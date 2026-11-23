---
name: keyword-research
description: Google Ads keyword research with real Keyword Planner search volumes and bids through Magnify. Finds opportunities, classifies keywords by search intent (transactional, commercial, informational, brand, competitor, navigational), groups them into ad groups and recommends a campaign structure sized to the budget and target CPA. Use for KW research, keyword ideas, search volume, keyword opportunities, ad group or campaign structure.
---
# Keyword research (Magnify Keyword Research Skill)

## 1. Get real data through Magnify
Read the data yourself and build the structure with the method below; do not hand the research to `ask_magnifai`.
- Volumes, competition and top-of-page bids: `get_keyword_ideas` (3 units on Operator) with the seeds, country and language. They come from the **Google Ads Keyword Planner API** of the connected account. Missing volume is **unknown, not zero**.
- The account's own winners: `get_search_terms` (4 units) once for a stated period. Search, Shopping and PMax terms with 2+ conversions at or above target are the best seeds.
- If budget, target CPA, country or language are missing, ask once. Without a target CPA, give the CPA the budget implies.
- If no Google Ads account is connected, say so: there are no real volumes, and any list is ideas only, labelled as such.
- Use `ask_magnifai` in mode `prepare` only to create the campaigns or keywords the owner wants, passing your structure.

## 2. Method
1. **Seeds**: products, services and categories, converting search terms, landing pages.
2. **Opportunities**: high-intent terms with reasonable bids that the account does not cover, converting search terms not yet added as keywords, specific long-tail variants (material, model, use, location).
3. **Intent**
   - Transactional (buy, price, cheap, near me, or a product noun): core ad groups.
   - Commercial (best, vs, review, alternative): a separate ad group, or campaign if the budget allows.
   - Informational (how, what, guide, free) and navigational (login, support): **negatives** or content, never Search ad groups.
   - Brand: its own campaign. Competitor: its own capped campaign, only if requested.
4. **Grouping**: one ad group = one intent + one theme that a single RSA and landing page can answer. Never mix intents, brand or competitor terms.
5. **Sizing to budget and CPA**
   - Clicks/month = budget ÷ estimated CPC (midpoint of the Planner bid range).
   - Conversions = clicks × conversion rate (the account's real rate; otherwise a stated assumption).
   - Projected CPA = CPC ÷ conversion rate. Compare it with the target; if it is not feasible, say so.
   - Ad groups the budget can feed ≈ clicks ÷ ~100 per ad group per month. Keep **3-20 keywords per ad group**. Defer the remaining clusters with a reason.
   - Bidding: ≥30 conversions/month → tCPA; ~15-30 → Maximize conversions; fewer → Maximize clicks with a CPC cap and fewer ad groups.
   - Match types: exact + phrase for high intent, phrase for commercial, exact for competitors; broad only with smart bidding and enough conversions.
6. **Campaign types**: brand, generic by category, long tail from winning terms, Dynamic Search Ads and competitors each have their own rules: `references/search-campaigns.md`.
7. **Copy hand-off**: flag tightly themed ad groups for 1-3 dynamic keyword insertion headlines (see the `google-ads-copywriting` skill).

## 3. Output
1. **Economics**: budget, estimated CPC, clicks, conversions, projected CPA vs target, recommended bidding, assumptions.
2. **Opportunities**: top keywords with volume, CPC and intent, and why each one matters.
3. **Structure**: campaign → ad groups (intent, number of keywords, monthly volume, budget share, match types) → keywords.
4. **Negatives and exclusions**: informational, navigational and competitor terms.
5. **Deferred clusters**: what to add when the budget grows.
6. **Caveats**: Planner volumes and bids are estimates that overlap between close variants; validate against search terms after launch.

Never present a structure as created. Creating campaigns or adding keywords is a separate change that the owner approves in Magnify.
