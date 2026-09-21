---
name: seo-metadata
description: Maintain accurate generic Next.js Metadata API infrastructure without fabricated brand information.
---
# SEO metadata

Use the Next.js Metadata API, `robots.ts`, and `sitemap.ts`. Keep titles, descriptions, canonical URLs, Open Graph, Twitter fields, and `metadataBase` truthful. This template uses obvious generic defaults and `NEXT_PUBLIC_SITE_URL`; replace them with verified production values. Do not invent domains, social handles, organization claims, or structured data.

## Verify route output

Inspect the root layout and route metadata together to avoid conflicting titles, canonical values, or accidental indexing behavior. Include only real public routes in the sitemap; keep robots behavior consistent with the intended deployment. Verify rendered metadata and image URLs on affected routes. Structured data must describe visible, verified content, never invented ratings or organization details.
