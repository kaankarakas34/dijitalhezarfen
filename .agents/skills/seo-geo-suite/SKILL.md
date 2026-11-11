---
name: seo-geo-suite
description: >
  Unified SEO + GEO (Generative Engine Optimization) audit and remediation
  workflow for Dijital Hezarfen. Combines Agentic-SEO-Skill (technical SEO,
  crawler policy, E-E-A-T, entity/citation readiness), geo-seo-claude
  (citability scoring, brand signals, llms.txt), claude-seo (boilerplate-free
  QRG content scoring & HTML inspection), and open-seo strategy skills.
---

# Unified SEO + GEO Suite (Dijital Hezarfen)

This orchestrator skill connects four complementary open-source toolkits installed in this workspace so they execute as one coordinated pipeline.

## Connected Engines

1. **Technical & Evidence Engine (`Agentic-SEO-Skill`)**
   - Full site audit (`audit_runner.py`), AI crawler matrix (`ai_crawler_policy_matrix.py`), `llms.txt` inspection (`llms_txt_checker.py`), sitemap validation (`sitemap_checker.py`), security headers (`security_headers.py`), JS-render DOM diff (`javascript_render_audit.py`), E-E-A-T (`eeat_signal_checker.py`), entity schema (`entity_checker.py`), citation readiness (`citation_readiness.py`).
2. **GEO Citability & Brand Engine (`geo-seo-claude`)**
   - Passage citability scoring (`citability_scorer.py`), cross-platform brand visibility checklist (`brand_scanner.py`), and `llms.txt` draft generation (`llmstxt_generator.py`).
3. **Content Quality & HTML Extraction Engine (`claude-seo`)**
   - QRG-aligned boilerplate-free content quality scoring (`content_quality.py` + `trafilatura`) and HTML image/meta probing (`parse_html.py`).
4. **AI Visibility & Keyword Strategy Skills (`open-seo`)**
   - Workspace skills in `.agents/skills/`: `ai-visibility-audit`, `ai-prompt-research`, `keyword-research`, `keyword-clustering`, `competitor-analysis`.

## How to Run the Combined Check

```bash
npm run audit:seo-geo
```

Optional target URL (defaults to `https://www.dijitalhezarfen.com` and featured article `https://www.dijitalhezarfen.com/yayinlar/enron-karin-nakdin-ve-guvenin-denetimi`):

```bash
node scripts/seo-geo-audit.mjs https://www.dijitalhezarfen.com https://www.dijitalhezarfen.com/yayinlar/enron-karin-nakdin-ve-guvenin-denetimi
```

All generated JSON, Markdown, and HTML dashboard reports are written to `reports/seo-geo/` (gitignored).
