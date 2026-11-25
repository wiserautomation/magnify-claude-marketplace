---
name: google-ads-copywriting
description: Write or rewrite Google Ads headlines, titles and descriptions (Search RSA, Performance Max) that qualify, entice and prime the click, including dynamic keyword insertion {KeyWord:Default} headlines. Use whenever the user asks for ad copy, headlines, titles, titulares, títulos, descriptions or descripciones, or to improve, compare or review existing ads.
---
# Google Ads copywriting (Magnify Ad Copy Skill)

Always use this skill for any headline or description, even a single line. Good copy is a requirement, not a nice-to-have.

## 1. Route the request
- **The copy is for the user's own account**: read what it must match yourself (the ad group's keywords and current ads with `list_search_ad_resources` and `get_search_ad_creative_evidence`, converting queries with `get_search_terms`), then write it with the rules below. Apply it with `prepare_search_ad_replacement` and `prepare_owner_requested_search_ad_replacement` for an existing ad, or inside `prepare_search_campaign` for a new campaign: Magnify checks every headline and description against Google's limits and returns each problem with its field.
- **Generic copy, no account data needed**: write it yourself with the rules below. Do not call Magnify.

## 2. Method: QUALIFY → ENTICE → PRIME
- **Qualify**: say exactly what it is and who it is for, so the wrong people do not click.
- **Entice**: give the right person a concrete reason to click.
- **Prime**: promise only what the landing page delivers (same offer, same words).
Optimize for qualified conversions (CPA/ROAS), not CTR or Ad Strength.

## 3. Search RSA composition
- Up to **15 headlines (≤30 characters)** and **4 descriptions (≤90)**. Aim for 12-15 distinct headlines, each one meaningful on its own in any combination.
- Mix angles: product + query intent, specific benefit, verified proof/trust, verified price/offer, location (if served), clear CTA, brand. No synonyms as filler.
- One ad group = one theme: use that ad group's vocabulary.
- Never invent prices, discounts, reviews, ratings, guarantees, shipping terms, stock, deadlines or rankings. If you have not seen them on the landing page or in the account, leave them out or mark them `[verify]`.
- Pin sparingly.
- PMax: up to 15 headlines (≤30), 5 long headlines (≤90), 5 descriptions (≤90). Aim for ≥11 headlines, ≥2 long headlines and ≥4 descriptions.

## 3b. Headline types to fill the 15
| Type | Purpose |
| --- | --- |
| Descriptive | Match the search; the more specific the better (product + model + attribute) |
| Trust: authority | Look like the safe choice (official store, a verified ranking) |
| Trust: longevity | An established business (year founded) |
| Trust: proof | Reasons to believe (verified rating and review count, guarantee length) |
| Urgency | Act now, sparingly (stock limit, offer end date) |
| Price | For price searchers (bundle, free shipping threshold) |
| Feature | Convenience or attributes (instalments, compatibility) |
| Location | Delivery speed or local pride |
| CTA | Lower the effort of the next step |
| Comparison | Against alternatives, only with unprotected names |
| Remarketing | The visitor's context |
| Brand | Tie the purchase to the brand |

Every claim must be verified on the landing page or in the account; remove urgency headlines when the date passes, and do not overuse urgency. For a selling hook, ask how the product helps the buyer make money, save money, save time, avoid effort or pain, gain comfort, health, recognition, belonging or status, and write one headline per answer. "The cheapest" positions the store as a discounter: use it only if that is the brand.

**Standards**: complete 15 headlines and 4 descriptions; the ad group's keywords repeated in headlines; at most one pinned element (brand in position 1 on brand campaigns, or a clear CTA); brand spelled the same way everywhere; no exaggeration or exclamation marks; what the ad promises is visible above the fold on the landing page.

**Customizers**: countdown `{COUNTDOWN(2026-11-30 23:59:59,5)}` for sales (shows 5 days before by default); location `{LOCATION(City):Default}`. Allowed separators that stand out: · • – — … ™ ® (stars and hearts are not allowed).

## 4. Dynamic keyword insertion (DKI): the underused advantage
`{KeyWord:Default text}` is replaced by the ad group **keyword** that triggered the ad (the keyword, not the search term). If the keyword does not fit, Google shows the default text. The headline mirrors the searcher's wording, which raises relevance, CTR and Quality Score without extra ad groups.

**Syntax and casing**
| Token | Result for keyword "apple watch bands" |
|---|---|
| `{keyword:...}` | apple watch bands |
| `{Keyword:...}` | Apple watch bands |
| `{KeyWord:...}` | Apple Watch Bands (most common for headlines) |
| `{KEYWord:...}` | APPLE watch bands |
| `{KeyWORD:...}` | apple watch BANDS |
| `{KEYWORD:...}` | APPLE WATCH BANDS |

**Rules**
- The default text is required. It is the ad group's core theme and must read well on its own.
- Length: Google counts the **default text**, not the braces or `KeyWord:`. `Shop {KeyWord:Watch Bands}` counts as 16 characters. The room left for the keyword is 30 minus the fixed text; longer keywords fall back to the default.
- Use **1-3 DKI headlines per RSA** (of 15). More removes variety.
- Use it only in **tightly themed** ad groups where every keyword reads naturally in the sentence and the landing page sells every keyword.
- Never use it with competitor or third-party trademarks, misspelled or grammatically odd keywords, broad themes, regulated claims, or in PMax/Shopping/Display (they have no keywords).
- Pinning the DKI headline to position 1 maximizes query mirroring; do it only for homogeneous ad groups.

**Patterns**: `{KeyWord:Leather Watch Bands}` · `Shop {KeyWord:Watch Bands}` · `Buy {KeyWord:Watch Bands} Online` · `{KeyWord:Correas Apple Watch}` · `Compra {KeyWord:Correas de Piel}`

## 5. Quality check before delivering
- [ ] Every line within its limit (count DKI by its default text); no duplicates.
- [ ] DKI tokens valid (casing from the table, non-empty default) and 1-3 per RSA.
- [ ] Angles varied; each headline makes sense alone.
- [ ] Every concrete claim seen on the landing page or in the account, else removed or marked `[verify]`.
- [ ] The ad group theme appears; the CTA is honest.

## 6. Output format
Give a table per ad group: `# | Headline | Characters | Angle | DKI`, then the descriptions with character counts, then the items to verify. Write in the language of the landing page and the user.
