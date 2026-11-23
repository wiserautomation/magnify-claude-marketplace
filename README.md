# Magnify for Claude — Google Ads Intelligence

Magnify connects Claude to authorized Google Ads and Merchant Center data through a remote MCP connector plus specialist Skills. Roast your account, find wasted spend, and prepare fixes that you approve in Magnify.

This repository is a publicly installable plugin marketplace. It holds only the plugin: no application source, credentials or customer data.

## Install
In Claude's plugin marketplace, add `https://github.com/wiserautomation/magnify-claude-marketplace`, sync and install `magnify-google-ads`. In Claude Code:

```
/plugin marketplace add wiserautomation/magnify-claude-marketplace
/plugin install magnify-google-ads@magnify-marketplace
```

Alternatively, under **Customize → Connectors**, add the remote MCP server `https://mcp.magnifyshopping.com/mcp`. Authenticate using Claude's OAuth sign-in; never paste tokens into chat.

Start with “Roast my Google Ads”, “Find my top 3 money leaks” or “What did Magnify save and make for my clients this month?”.

## Capabilities and boundaries
- `google-ads-audit`: roast, grade and diagnose in the right order (tracking and feed before bids), with symptom trees and a review routine, using the fewest Magnify reads.
- `shopping-pmax`: feed health and compliance, hero/sidekick/villain/zombie segmentation, campaign architecture by budget, Shopping and PMax playbooks.
- `supervised-optimization`: bidding by data, target steps, budget scaling and learning-period rules; supported changes are proposed, require real owner approval and are verified after execution.
- `google-ads-copywriting`: Search RSA and PMax headlines and descriptions (qualify, entice, prime) with dynamic keyword insertion `{KeyWord:Default}` headlines. Copy for your account goes through Magnify, which reviews every line before it can be proposed.
- `value-report`: money saved, money made and time saved for one account or a whole agency portfolio, labelled as estimates, plus a client-ready monthly recap.
- `negative-keywords`: phrase-match negative patterns instead of one exact negative per query, safety checks against converting terms and keywords, and shared negative keyword lists.
- `keyword-research`: Keyword Planner volumes and bids, search intent classification, ad groups and a campaign structure sized to your budget and target CPA.

The skills share one media-buyer playbook with the Magnify server (`plugins/magnify-google-ads/playbook-thresholds.json`). Claude does the analysis with Magnify's read tools, so fewer reads and fewer MagnifAI runs are needed.

Availability depends on user, store permissions, tool support and live evidence. We **do not** promise unrestricted Google Ads writes or an inline Claude approval widget.

## Verification
Run `node scripts/validate.mjs` to check the package offline. Where Claude Code CLI is available, run `claude plugin validate .` and `claude plugin validate ./plugins/magnify-google-ads`. Neither proves OAuth or live MCP readiness.

See the [plugin README](plugins/magnify-google-ads/README.md) for requirements, data flow and troubleshooting, and the [submission packet](SUBMISSION.md) and [reviewer guide](REVIEWER_GUIDE.md) for Anthropic directory review.

## Security and support
No credentials are packaged. Google Ads access is authorized per user and store. Actions require independent owner approval and read-back where supported.

- Website: https://magnifyshopping.com
- Privacy: https://www.magnifyshopping.com/privacy
- Terms: https://www.magnifyshopping.com/terms
- Support: https://www.magnifyshopping.com/support
