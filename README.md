
# KH Group website (GitHub Pages) — v2

This package includes the updated multi-page static website for **KH Group** with three owners and expanded team roles.

## Quick start
1. Create a repository named **khgrpsss.github.io** in your GitHub account (or open it if you already created it).
2. Upload all files and folders from this package (including `CNAME`).
3. In your domain registrar (where you bought `khgrpsss.ca`), set DNS:
   - **A records** for the root domain `khgrpsss.ca` pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME** for `www.khgrpsss.ca` pointing to `khgrpsss.github.io`
4. On GitHub: Settings → Pages → Custom domain: **khgrpsss.ca** (Enforce HTTPS).

## Editing
- Update names for Area Manager and the three MUMs in `team.html`.
- Replace placeholder images in `assets/`.
- Update About text in `about.html`.
- Careers and Contact forms use `mailto:`. Swap to Formspree/Google Forms for in-browser submissions.

