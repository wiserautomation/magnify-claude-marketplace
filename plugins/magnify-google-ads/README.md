# Magnify for Claude

Evidence-backed Google Ads and Merchant Center intelligence in Claude, powered by the same Magnify remote MCP service used by other clients.

## What it does
- Roast, grade and audit Google Ads spend, conversions, campaign efficiency and account health where authorized read tools provide evidence.
- Investigate Shopping, PMax and Merchant Center feeds with available data.
- Write Search and PMax headlines and descriptions with the Magnify Ad Copy Skill, including dynamic keyword insertion headlines.
- Research keywords with real Keyword Planner volumes, group them by search intent and size the campaign structure to the budget and CPA.
- Turn wasted search terms into a few phrase-match negative patterns and shared negative keyword lists.
- Prepare supported changes for explicit preview and approval; execution is not automatic.

## Requirements
A Magnify account with a Google Ads account connected. Account reads are included. Applying changes through Magnify needs a paid Operator plan on that workspace. Tool availability varies by workspace, entitlements and server version.

## Install
From the Claude plugin directory, add **Magnify — Google Ads Intelligence**. In Claude Code you can also install it from this repository:

```
/plugin marketplace add wiserautomation/magnify-claude-marketplace
/plugin install magnify-google-ads@magnify-marketplace
```

## Getting started
Enable the `magnify` MCP connection and complete the OAuth sign-in and workspace authorization when Claude prompts. Start with “Roast my Google Ads”, “Roast my Google Ads, extra hot” or “Find my top 3 money leaks”. In Spanish: “Haz un roast de mi Google Ads” or “Roast extra picante de mi Google Ads”.

## What this plugin runs and sends
This plugin contains Skills, which are instruction text, and a reference to one remote MCP server: `https://mcp.magnifyshopping.com/mcp`, operated by WISER MARKETING SRL. It runs no local code, hooks or scripts, and it bundles no credentials.

When a Magnify tool runs, Claude sends that tool's inputs to the server: for example the workspace, date range, and, for `ask_magnifai`, your objective and the context needed to answer it. The server reads the Google Ads and Merchant Center data you authorized, and returns results to Claude. The plugin sends data nowhere else. How Magnify processes and retains data on its own service is covered by the [privacy policy](https://www.magnifyshopping.com/privacy).

## Security
The plugin makes no privileged calls outside MCP and does not bypass per-store access controls. Never enter tokens into chat. A change only runs after the workspace owner approves its exact preview on the signed-in Magnify page, and a "yes" in chat is not approval.

## Troubleshooting
- **Sign-in does not start or the connection fails:** disconnect and reconnect `magnify` in Claude's connector settings, then complete sign-in in the browser.
- **No workspaces are listed:** sign in to [Magnify](https://magnifyshopping.com) with the same account and connect Google Ads there.
- **Results say syncing or unknown:** the first sync has not finished. Unknown is not zero, so try again later.
- **A change did not apply:** open the approval link and approve it in Magnify. If Magnify reports no paid access, ask Claude for your Operator access link.

Privacy: https://www.magnifyshopping.com/privacy
Terms: https://www.magnifyshopping.com/terms
Support: https://www.magnifyshopping.com/support
