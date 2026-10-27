# Magnify for Claude — Google Ads Intelligence

Magnify exposes authorized Google Ads and Merchant Center intelligence to Claude through a remote MCP connector plus specialist Skills. This is a publicly installable GitHub marketplace, **not** official Anthropic directory approval.

## Install
In Claude's plugin marketplace, add `https://github.com/wiserautomation/magnify-claude-marketplace`, sync and install `magnify-google-ads`. Alternatively, under **Customize → Connectors**, add the remote MCP server `https://mcp.magnifyshopping.com/mcp`. Authenticate using Claude's supported OAuth process; never paste tokens into chat.

Start with “List my authorized stores” or “Which campaigns spent last week, including those now paused?”

## Capabilities and boundaries
- `google-ads-audit`: evidence-backed performance and conversion diagnostics.
- `shopping-pmax`: Shopping, PMax and Merchant Center investigations when connected data exists.
- `supervised-optimization`: supported changes are proposed, require real owner approval and must be verified after execution.
- `google-ads-copywriting`: Search RSA and PMax headlines and descriptions (qualify, entice, prime) with dynamic keyword insertion `{KeyWord:Default}` headlines. Copy for your account goes through Magnify, which reviews every line before it can be proposed.
- `keyword-research`: Keyword Planner volumes and bids, search intent classification, ad groups and a campaign structure sized to your budget and target CPA.

Availability depends on user, store permissions, tool support and live evidence. We **do not** promise unrestricted Google Ads writes or an inline Claude approval widget.

## Verification
Run `node scripts/validate.mjs` to check the package offline. Where Claude Code CLI is available, run `claude plugin validate .` and `claude plugin validate ./plugins/magnify-google-ads`. Neither proves OAuth/live MCP readiness.

See [submission gates](SUBMISSION.md) and [reviewer guide](REVIEWER_GUIDE.md) before an official Anthropic directory submission.

## Security/support
No credentials are packaged. Google Ads access is authorized per user/store. Actions require independent consent and readback where supported.

- Website: https://magnifyshopping.com
- Privacy: https://www.magnifyshopping.com/privacy
- Terms: https://www.magnifyshopping.com/terms
- Support: https://www.magnifyshopping.com/support
