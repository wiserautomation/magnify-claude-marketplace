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
for (const file of ["README.md", "SUBMISSION.md", "REVIEWER_GUIDE.md"]) check(existsSync(join(root, file)), "Documentation: " + file);
for (const file of files) {
  if (!existsSync(join(root, file))) continue;
  const content = readFileSync(join(root, file), "utf8");
  check(!/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|sk_(?:live|test)_[A-Za-z0-9]{12,}|AIza[\w-]{25,}/.test(content), "No obvious secrets: " + file);
}
if (failures.length) { console.error("Static validation FAILED: " + failures.length); process.exitCode = 1; }
else console.log("Static validation PASSED; OAuth, live MCP and Anthropic review remain separate.");
