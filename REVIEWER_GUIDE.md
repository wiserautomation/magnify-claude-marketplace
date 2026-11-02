# Magnify for Claude — reviewer instructions

## Scope
Connector: `https://mcp.magnifyshopping.com/mcp`. Plugin bundle: `magnify-google-ads`, which points at the same server. No credentials or customer data are packaged.

## Test account
Use the test account credentials entered in the developer portal. They open a synthetic sample workspace with seeded campaigns, products and feed data. `list_stores` marks it `data_mode=sample`. It has no live Google Ads connection, so read tools return seeded data and Google Ads writes are unavailable by design.

## Reproduce
1. Connect the server as a connector, or install the plugin from `wiserautomation/magnify-claude-marketplace`.
2. Sign in through Claude's OAuth flow with the test account. Do not paste passwords or tokens into chat.
3. Run the example prompts below.
4. Disconnect or revoke the connection and confirm that a tool call now requires sign-in again.

## Example prompts
| Prompt | Expected tool | Expected result |
| --- | --- | --- |
| Give me an overview of my Google Ads performance for the last 30 days. | `get_account_overview` | Seeded 30-day spend, revenue, conversions, clicks and impressions |
| Compare my campaigns and tell me which are strongest and weakest. Do not make changes. | `get_performance` | Campaign spend, revenue, ROAS and CPA where available, with no changes |
| Which Shopping products need attention in my catalogue? Do not change anything. | `get_product_opportunities` | Product issues from the sample catalogue, with no changes |
| Audit my Shopping catalogue and summarize its health. | `get_catalog_summary` | Catalogue lifecycle, quality and publication summary |
| Which products need image improvements? Do not generate or publish anything. | `get_image_opportunities` | Missing primary or lifestyle images, with nothing generated |

These should not invoke Magnify: “What is the weather in Barcelona tomorrow?”, “Write a birthday email to my sister.”, “Book a table for four tonight.”

## How changes work
Write tools never change Google Ads from chat. A prepare tool creates an exact preview, the workspace owner approves it on the signed-in Magnify page, and an execute tool applies it and reads the result back from Google Ads. A "yes" in chat is not approval. Execution needs a real connected account, an active Operator plan and owner consent, so it cannot be exercised on the sample workspace.

## Limitations
Not every account exposes Merchant Center data. Capabilities depend on entitlement and API access. A proposal is not a completed change. Missing data is reported as unknown rather than invented.

Website: https://magnifyshopping.com
Privacy: https://www.magnifyshopping.com/privacy
Terms: https://www.magnifyshopping.com/terms
Support: https://www.magnifyshopping.com/support
