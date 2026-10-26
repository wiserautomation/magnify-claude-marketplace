# Magnify for Claude

Evidence-backed Google Ads and Merchant Center intelligence in Claude, powered by the same Magnify remote MCP service used by other clients.

## What it does
- Audit Google Ads spend, conversions, campaign efficiency and account health where authorized read tools provide evidence.
- Investigate Shopping, PMax and Merchant Center feeds with available data.
- Prepare supported changes for explicit preview and approval; execution is not automatic.

## Getting started
Install `magnify-google-ads` from the Magnify marketplace, enable the `magnify` MCP connection, and complete the OAuth sign-in and workspace/store authorization if Claude prompts. Start with “List my authorized stores” or “Audit my Google Ads account for the last 30 days.” Tool availability varies by workspace, entitlements and server version.

## Security
No credentials are bundled. Server endpoint: `https://mcp.magnifyshopping.com/mcp`. Magnify's backend remains in Lovable Cloud; the plugin makes no privileged calls outside MCP and does not bypass per-store access controls. Never enter tokens into chat. Writes require supported approval and live verification.

Privacy: https://www.magnifyshopping.com/privacy
Terms: https://www.magnifyshopping.com/terms
Support: https://www.magnifyshopping.com/support

## Install
```
/plugin install magnify-google-ads --marketplace wiserautomation/magnify-claude-marketplace
```
