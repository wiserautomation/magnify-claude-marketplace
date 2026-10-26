# Magnify for Claude — reviewer instructions

## Scope
Public plugin bundle `magnify-google-ads` points to `https://mcp.magnifyshopping.com/mcp`. No credentials or customer data are packaged. An independently installable marketplace is not an official directory listing.

## Prerequisites
Claude with plugin/connector access, a Magnify test account and authorized Google Ads workspace. For mutation tests, use a controlled test account, never an unrelated production customer.

## Safe reproduction
1. Add marketplace `wiserautomation/magnify-claude-marketplace` and install `magnify-google-ads`, or connect remote MCP directly.
2. Sign in through Claude OAuth. Do not paste passwords or OAuth tokens into chat.
3. Ask “List my authorized stores”; check isolation and selected store.
4. Ask “Which campaigns spent in the last 7 days, even if paused now?” Compare exact IDs, dates, spend and currency with real source.
5. Ask for PMax or Shopping diagnostics; identify verified observations, stale evidence, hypotheses and missing conversions separately.
6. Ask “Prepare but do not execute a change to campaign [ID].” Confirm bounded before/after and spending risks; verify a real independent approval is required. **Do not execute live writes without an explicit controlled owner test.**
7. Disconnect/revoke OAuth and confirm data access is denied.

## Important limitations
Not every account exposes Merchant Center data. Capabilities are entitlement- and API-dependent. A proposal is not a completed mutation. Inline Claude approval is not promised; authenticated web approval may be required. Missing data should be reported rather than invented.

Website: https://magnifyshopping.com
Privacy: https://www.magnifyshopping.com/privacy
Terms: https://www.magnifyshopping.com/terms
Support: https://www.magnifyshopping.com/support

Capture redacted screenshots, HTTP/tool errors and test revision for Anthropic reviewers. Never include real credentials.
