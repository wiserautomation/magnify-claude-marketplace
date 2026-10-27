---
name: google-ads-copywriting
description: Write or rewrite Google Ads headlines, titles and descriptions (Search RSA, Performance Max) that qualify, entice and prime the click, including dynamic keyword insertion {KeyWord:Default} headlines. Use whenever the user asks for ad copy, headlines, titles, titulares, títulos, descriptions or descripciones, or to improve, compare or review existing ads.
---
# Google Ads copywriting (Magnify Ad Copy Skill)

Always use this skill for any headline or description, even a single line. Good copy is a requirement, not a nice-to-have.

## 1. Route the request
- **The copy is for the user's own account** (a campaign, ad group, product or landing page in Magnify, or they want it applied): call `ask_magnifai` with the full objective, e.g. "Write RSA headlines and descriptions for ad group X using the Ad Copy Skill, with 1-3 dynamic keyword insertion headlines; review them with review_ad_copy_draft". MagnifAI reads the real keywords, search terms and landing page, runs the mandatory review, and only proposes copy that passed it. Show its copy and the review result. Changes go live only after the owner approves them in Magnify.
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
