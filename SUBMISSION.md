# Official Claude directory submission readiness

**Package:** GitHub plugin bundle containing remote MCP + Skills. Anthropic's official Claude directory review is separate from a public GitHub marketplace installation.

**Name:** Magnify — Google Ads Intelligence
**Short pitch:** Analyze your authorized Google Ads performance with real account evidence in Claude.
**Category:** Marketing / Productivity
**Repository:** https://github.com/wiserautomation/magnify-claude-marketplace
**MCP:** https://mcp.magnifyshopping.com/mcp
**Website:** https://magnifyshopping.com
**Privacy:** https://www.magnifyshopping.com/privacy
**Terms:** https://www.magnifyshopping.com/terms
**Support:** https://www.magnifyshopping.com/support

## Static checks
Run `node scripts/validate.mjs`. Optionally capture `claude plugin validate .` and `claude plugin validate ./plugins/magnify-google-ads` output and CLI version. Static checks do NOT certify live OAuth or Google Ads execution.

## Evidence checklist — leave unchecked until independently proven
- [ ] Claude CLI validates marketplace and plugin; attach version/output.
- [ ] Claude.ai/Claude Desktop installs bundle and lists remote MCP tools.
- [ ] Public HTTPS MCP initialize and tool discovery work from Claude's cloud.
- [ ] OAuth authorize, workspace selection, reconnect, refresh and revoke verified.
- [ ] Authorized users can see only their own stores; cross-tenant requests fail.
- [ ] Real read-only Google Ads query returns correct campaign IDs, currency, dates and spend (including paused-with-spend).
- [ ] Failed/partial reads never produce fabricated account metrics.
- [ ] Real signed preview, expiry, rejection and no-write-before-approval tested.
- [ ] If write actions are advertised, controlled approved execution plus independent Google Ads readback passed; otherwise describe read-only support only.
- [ ] Public privacy/terms/support pages and OAuth metadata validated.
- [ ] Reviewer test account, reproducible prompts, screenshots and data-handling disclosures prepared.
- [ ] Official Claude portal submission completed with saved submission ID.

## Reviewer walkthrough
See [REVIEWER_GUIDE.md](REVIEWER_GUIDE.md). Suggested prompts: “List my stores”; “Which campaigns spent in the last 7 days, including currently paused campaigns?”; “Analyze Performance Max performance with evidence”; “Prepare, do not execute, a campaign change.”

## Outstanding as of 2026-10-26
Claude OAuth and tool discovery not demonstrated in this audit. Magnify Operator's live write execution and Brain B final-answer reliability are not fully certified. External endpoint/legal-page accessibility from Anthropic has not been independently verified. **Do not claim submitted/approved.**

Submit via Anthropic's authenticated Claude directory portal, selecting the GitHub plugin-bundle route; final portal interaction and owner agreement require the authorized account owner.
