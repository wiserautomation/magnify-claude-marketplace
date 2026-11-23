#!/usr/bin/env node
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
const check = (condition, label) => {
  console.log((condition ? "PASS " : "FAIL ") + label);
  if (!condition) failures.push(label);
};
const load = (path) => {
  try { return JSON.parse(readFileSync(join(root, path), "utf8")); }
  catch (error) { failures.push("Invalid JSON: " + path); return {}; }
};
const marketplace = load(".claude-plugin/marketplace.json");
check(typeof marketplace.name === "string" && !!marketplace.name, "Marketplace name");
check(Array.isArray(marketplace.plugins) && marketplace.plugins.length > 0, "Plugins present");
const names = new Set();
const files = [".claude-plugin/marketplace.json"];
for (const entry of marketplace.plugins ?? []) {
  check(typeof entry.name === "string" && !names.has(entry.name), "Unique plugin name");
  names.add(entry.name);
  const source = String(entry.source ?? "");
  const dir = resolve(root, source);
  const safe = source.startsWith("./plugins/") && dir.startsWith(join(root, "plugins") + "/");
  check(safe, "Plugin is contained inside repository");
  if (!safe) continue;
  const pluginPath = source + "/.claude-plugin/plugin.json";
  const mcpPath = source + "/.mcp.json";
  files.push(pluginPath, mcpPath);
  const plugin = load(pluginPath), mcp = load(mcpPath);
  check(plugin.name === entry.name && plugin.version === entry.version, "Names and versions agree");
  check(typeof plugin.description === "string" && plugin.description.length > 20, "Descriptive plugin manifest");
  check(mcp.mcpServers?.magnify?.type === "http" && mcp.mcpServers?.magnify?.url === "https://mcp.magnifyshopping.com/mcp", "Expected secure remote MCP");
  const skillRoot = join(dir, "skills");
  const skills = existsSync(skillRoot) ? readdirSync(skillRoot, { withFileTypes: true }).filter(f => f.isDirectory()).map(f => f.name) : [];
  check(skills.length > 0, "Skills exist");
  for (const skill of skills) {
    const filename = join(skillRoot, skill, "SKILL.md");
    const text = existsSync(filename) ? readFileSync(filename, "utf8") : "";
    check(text.startsWith("---\n") && text.includes("name: " + skill) && text.includes("description:"), "Skill frontmatter: " + skill);
  }
}
// Media-buyer playbook v2: the skills carry the same thresholds as the Magnify server
// (PLAYBOOK_THRESHOLDS in supabase/functions/_shared/magnifaiMediaBuyerPlaybook.ts).
{
  const base = "plugins/magnify-google-ads";
  const playbook = load(base + "/playbook-thresholds.json");
  const t = playbook.thresholds ?? {};
  check(playbook.version === "media-buyer-playbook-2026-11-23-v2", "Playbook thresholds version");
  const skill = (name) => {
    const dir = join(root, base, "skills", name);
    const main = existsSync(join(dir, "SKILL.md")) ? readFileSync(join(dir, "SKILL.md"), "utf8") : "";
    const refs = existsSync(join(dir, "references")) ? readdirSync(join(dir, "references")).map((f) => readFileSync(join(dir, "references", f), "utf8")).join("\n") : "";
    for (const ref of main.match(/references\/[a-z-]+\.md/g) ?? []) check(existsSync(join(dir, ref)), "Skill reference exists: " + name + "/" + ref);
    return main + "\n" + refs;
  };
  const range = (a) => Array.isArray(a) ? a[0] + "-" + a[1] : "";
  const expect = [
    ["supervised-optimization", "The first target is the actual last-30-day CPA or ROAS"],
    ["supervised-optimization", `Move a target ${range(t.targetStepPct)}% per step, then wait ${range(t.waitDaysBetweenTargetSteps)} days`],
    ["supervised-optimization", `more than ${t.maxSimultaneousTargetAndBudgetChangePct}% in the same week`],
    ["supervised-optimization", `raise budget ${range(t.budgetScaleUpPct)}% every ${range(t.budgetScaleEveryDays)} days`],
    ["supervised-optimization", `lower tROAS ${t.notSpendingLowerTroasPct}%`],
    ["supervised-optimization", `Under ~${t.maximizeConversionsBelow30d} conversions in 30 days`],
    ["negative-keywords", `cost >= ${range(t.negateCostVsTargetCpa)}x the target CPA with 0 conversions`],
    ["negative-keywords", `Terms with ${t.promoteSearchTermConversions}+ conversions`],
    ["shopping-pmax", `ROAS above target and ${t.heroMinConversions90d}+ conversions`],
    ["shopping-pmax", `Cost > ${t.villainCostVsTargetCpa}x target CPA, 0 conversions`],
    ["shopping-pmax", `Under ${t.zombieMaxImpressions90d} impressions`],
    ["shopping-pmax", `cost >= ${t.excludeProductCostVsTargetCpa}x target CPA or ${t.excludeProductMinClicks}+ clicks`],
    ["shopping-pmax", `about ${t.targetReadyConversions30d} conversions a month`],
    ["google-ads-audit", `by more than ~${t.trackingGapPct}%`],
    ["google-ads-audit", "Stop at the first broken layer"],
  ];
  for (const [name, phrase] of expect) check(skill(name).includes(phrase), "Playbook threshold in " + name + ": " + phrase);
}
for (const file of ["README.md", "SUBMISSION.md", "REVIEWER_GUIDE.md"]) check(existsSync(join(root, file)), "Documentation: " + file);
for (const file of files) {
  if (!existsSync(join(root, file))) continue;
  const content = readFileSync(join(root, file), "utf8");
  check(!/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|sk_(?:live|test)_[A-Za-z0-9]{12,}|AIza[\w-]{25,}/.test(content), "No obvious secrets: " + file);
}
if (failures.length) { console.error("Static validation FAILED: " + failures.length); process.exitCode = 1; }
else console.log("Static validation PASSED; OAuth, live MCP and Anthropic review remain separate.");
