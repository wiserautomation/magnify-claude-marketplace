# Magnify for Claude — Plugin Marketplace

Install **Magnify Google Ads Intelligence** in Claude with our public plugin marketplace. The plugin connects to Magnify's existing remote MCP endpoint; no secrets, client accounts or backend code are included in this repository.

## Install in Claude

1. Open **Customize → Plugins → Add → Add marketplace** in Claude.
2. Enter `https://github.com/wiserautomation/magnify-claude-marketplace` (or `wiserautomation/magnify-claude-marketplace`).
3. Click **Sync**. Find **magnify-google-ads** and install/enable it.
4. Connect your Magnify account through Claude's supported MCP/OAuth flow if prompted. Select your authorized store.
5. Start with “List my authorized stores” or “Audit my Google Ads performance over the last 30 days.”

## What Magnify does

- Google Ads account health, spend, conversion, CPA/ROAS audits and wasted-budget analysis based on available authorized tools.
- Shopping, Performance Max and Merchant Center diagnostics.
- Supervised change preparation with explicit approval requirements, where the client supports the workflow.

The service endpoint is `https://mcp.magnifyshopping.com/mcp`.

## Validate in Claude Code

```sh
claude plugin validate .
claude plugin validate ./plugins/magnify-google-ads
claude plugin marketplace add wiserautomation/magnify-claude-marketplace
claude plugin install magnify-google-ads@magnify-marketplace
```

## Important distinctions

This is an **independently hosted public marketplace**, installable by URL; it is **not an official curated listing** in Anthropic's discovery directory. Official discovery requires an additional Anthropic submission and approval. Local installation also does not certify remote OAuth, live data, or write execution.

## Trust and support

No credentials are embedded. All Google Ads access is subject to Magnify's per-user/per-store grants. Do not paste passwords or OAuth tokens into Claude. Supported mutations require explicit approval and subsequent verification.

- Website: https://magnifyshopping.com
- Privacy: https://www.magnifyshopping.com/privacy
- Terms: https://www.magnifyshopping.com/terms
- Support: https://www.magnifyshopping.com/support

See [Submission checklist](SUBMISSION.md) for review gates.
