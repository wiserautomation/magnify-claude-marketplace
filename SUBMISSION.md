# Anthropic directory submission packet

Submit two listings from the same organization in the [developer portal](https://claude.ai/directory/manage): the MCP connector first, then the plugin bundle, and pair them. The owner enters credentials and accepts the terms and acknowledgements personally. Never put credentials in this file.

## 1. MCP connector

| Portal field | Value |
| --- | --- |
| Server URL | `https://mcp.magnifyshopping.com/mcp` (universal URL) |
| Server name | Magnify — Google Ads Intelligence |
| One-liner | Roast your Google Ads, find wasted spend and prepare fixes you approve, using real account evidence. |
| Categories | Marketing, Productivity |
| Documentation URL | https://magnifyshopping.com/advertising-infrastructure |
| Privacy policy URL | https://www.magnifyshopping.com/privacy |
| Support contact | https://www.magnifyshopping.com/support |
| Icon | `plugins/magnify-google-ads/.claude-plugin/icon.png` (1024 × 1024 PNG) |
| Slug (permanent) | `magnify` |
| Allowed link URIs | `https://magnifyshopping.com`, `https://www.magnifyshopping.com` |
| Company | WISER MARKETING SRL, https://magnifyshopping.com |
| Primary contact | alejandro@wiserautomation.agency |
| Authentication | OAuth sign-in, Dynamic Client Registration. Do not enter an Anthropic-held client. |
| Reads or writes | Both. Writes are prepared as previews and applied only after owner approval in Magnify. |
| Underlying API | Magnify's own service, which reads Google Ads and Merchant Center through Magnify's own Google integration for accounts each user authorizes. |
| Personal health data, sponsored content | No |

**Description**

Magnify connects Claude to the Google Ads and Merchant Center accounts you authorize, so answers come from your real account data instead of generic advice.

Roast and grade your account, find search terms, products and campaigns that spend without recorded conversions, diagnose campaign delivery and conversion setup, audit Performance Max and Shopping, and review feed health and catalogue experiments. Magnify reports what it can verify and says when data is missing, stale or unknown.

Magnify can also prepare supported Google Ads changes, such as pausing a campaign, updating a budget or adding negative keywords. Every change starts as an exact preview. The workspace owner approves it on the signed-in Magnify page, then Magnify applies it and reads the result back from Google Ads. Nothing changes because of a message in chat.

Amounts are observed spend to review, not guaranteed savings. Magnify does not promise ROAS improvements.

**Use cases:** find wasted spend; audit a Google Ads account; diagnose a drop in performance; audit Performance Max, Shopping and Merchant Center feeds; prepare supervised Google Ads changes.

**Before connecting:** a Magnify account with a Google Ads account connected. Account reads are included. Applying changes needs a paid Operator plan on that workspace.

**Carousel (MCP App):** 3–5 PNGs, at least 1000 px wide, cropped to the card only, each with its prompt supplied separately. Capture from a real Claude session on the test account: home, account overview, money leaks, roast, proposed change.

**Test & launch:** paste the steps from [REVIEWER_GUIDE.md](REVIEWER_GUIDE.md), then enter the test account credentials.

**Compliance:** seven acknowledgements, accepted by the owner.

## 2. Plugin bundle

| Portal field | Value |
| --- | --- |
| Repository | `wiserautomation/magnify-claude-marketplace` |
| Plugin path | `plugins/magnify-google-ads` |
| Branch | `main` |
| Reads or stores personal data | Through the Magnify connector only: account and advertising data the user authorizes |
| Sends data to services other than declared connectors | No |
| Retention | Per the privacy policy |
| Intended for people under 18 | No |
| New versions | GitHub push webhook |

**Compliance:** check the contact email, then four acknowledgements, accepted by the owner.

## Release gates

Evidence as of 2026-11-01. A box stays unchecked until it is proven on the deployed revision.

- [x] Public HTTPS `initialize`, `tools/list` and `resources/list` answer.
- [x] Signed-out `tools/call` returns 401 with a `resource_metadata` pointer.
- [x] OAuth metadata advertises DCR, S256 PKCE, refresh and revocation, and the redirect policy accepts Claude's callback and loopback.
- [x] Privacy, terms and support pages are live.
- [x] 59 tools, each with a name under 64 characters and a read-only or destructive hint.
- [ ] `title` on every tool is **deployed**. Source is fixed; until it is live the portal flags all 59 tools.
- [ ] Tested as a custom connector on the deployed revision: fresh OAuth, refresh, revoke, tool calls.
- [ ] The owner has run every tool, as the Test & launch step requires them to confirm.
- [x] Sample workspace data renewed for the ChatGPT review (confirmed by the owner).
- [ ] Test account signs in and reads that workspace from Claude.
- [ ] Cross-tenant denial tested from Claude.
- [ ] Carousel screenshots captured.
- [ ] Updated privacy policy published. It names the AI model providers and what Magnify receives from connected clients.
- [ ] Portal submission IDs recorded here.

Static checks do not certify OAuth, live execution or Google Ads writes. Do not claim submitted or approved until the portal shows it.
