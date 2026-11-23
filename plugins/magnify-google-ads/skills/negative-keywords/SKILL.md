---
name: negative-keywords
description: Create Google Ads negative keywords and negative keyword lists from real search terms, collapsing irrelevant queries into a few phrase-match patterns instead of one exact negative per query. Use for negative keywords, negativas, palabras clave negativas, negative lists, listas de negativas, wasted spend or irrelevant search terms.
---
# Negative keywords (Magnify Negative Keyword Skill)

**Principle: fewer, broader-but-safe negatives.** Most accounts add every bad query as an exact negative. That hits the account limits, and long-tail exact negatives almost never match again. Find the shared pattern and add it once as phrase match:

| Search terms | ❌ Usual | ✅ This skill |
|---|---|---|
| bad credit morgage for va · loans for bad credit owners · i have a bad credit and i want a mortgage | 3 exact negatives | `"bad credit"` phrase |
| va loan jobs · mortgage loan officer jobs near me | 2 exact negatives | `"jobs"` phrase |

## 1. Get real data through Magnify
Read the search terms yourself once: `get_search_terms` (4 units on Operator) for a stated period, campaign or account. Apply the method below to find the patterns. To build, fill and attach the negatives and shared lists in one approval, call `ask_magnifai` in mode `prepare` with your patterns, for example: "Create these phrase-match negatives and a General plus per-category negative keyword lists with plan_negative_keywords and build_negative_keyword_lists_plan: <patterns>." Pass your analysis so MagnifAI does not re-read everything. Changes are applied only after the owner approves them in Magnify.

**When a relevant term is waste, not intent.** A term that matches what the store sells is negated only after cost >= 1.5-2x the target CPA with 0 conversions, and after checking the product title, price and landing page: the problem may be the product, not the query. Terms with 2+ conversions at or above target are not negatives: they become keywords and title words (keyword-research skill).

## 2. Method
1. **Judge intent first.** Mark a term irrelevant for the business, not because it has zero conversions. A term that converted is never negated.
2. **Find patterns.** Look for the shortest group of 1–3 words shared by several bad terms. Prefer the more specific pattern when both cover the same terms: `bad credit` rather than `credit`.
3. **Check safety.** A pattern must not appear in a converting search term, an active keyword or a protected theme. Example: never `"loan"` in a VA loan campaign. Review what else the pattern would block.
4. **Match type.** Use phrase by default. Use exact only for short or costly one-offs that have no pattern. Skip one-off long tail (5+ words, little spend): it will not repeat.
5. **Close variants.** Negatives do not match close variants, so add plural or misspelled forms explicitly when they appear (`credit`/`credits`).
6. **Lists.** Every account should have a General list plus one list per main product category, attached to every Search and Shopping campaign: among the first recommendations for any account without them. The General list holds intents that never buy (jobs, how-to, definitions, manuals, support, complaints) and offers not sold (free, used, repair, rental, wholesale, download); keep only seeds that do not describe something the store sells. Category lists hold the products, attributes and audiences the store does not sell in that category. Put universal themes (jobs, free/DIY, how-to, support/login, competitors) in **shared negative keyword lists** attached to every relevant campaign. Keep campaign-specific negatives on the campaign. Google limits: 20 lists per account and 5,000 negatives per list.

## 3. Output
1. **Summary:** irrelevant terms → number of negatives (% reduction vs. one exact per term) and spend covered.
2. **Negatives table:** `Negative | Match | Terms covered | Spend | Theme`.
3. **Lists:** name, scope (shared or campaign) and keywords.
4. **Rejected patterns:** what each one would have blocked.
5. **Skipped long tail**, and converting terms kept on purpose.

Never present negatives as applied until Magnify confirms the approved change by readback. Review search terms weekly (daily in the first month or on large accounts), including Shopping and PMax search terms.
