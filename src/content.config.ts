import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * COURSES: one markdown file per course in src/content/courses/.
 * The file name (without .md) is the URL slug: /cursussen/<slug>/.
 * Files starting with `_` are ignored (use them as templates or drafts).
 * The markdown body is the long course description; the frontmatter feeds
 * cards, the "Praktisch" box and the registration form.
 */
const courses = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),                     // one line under the title
    summary: z.string(),                      // 2–3 sentences for cards and meta description
    format: z.string(),                       // "Opleiding", "Workshop", "Online cursus" …
    audience: z.enum(['makers', 'professionals', 'iedereen']),
    order: z.number().default(10),            // position in lists (low first)
    status: z.enum(['open', 'binnenkort', 'op-aanvraag', 'volzet']).default('open'),
    image: z.string().optional(),             // /images/… ; without one a typographic title card is shown
    imageAlt: z.string().optional(),
    practical: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    price: z.string().optional(),
    primaryCta: z.string().default('Schrijf je in'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { courses };
