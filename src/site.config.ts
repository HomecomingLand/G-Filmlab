/**
 * Site-specific configuration for website 2: G-Filmlab (Gert Embrechts).
 * Shared code never hard-codes these values.
 */
export const i18n = {
  locales: ['nl'] as const,
  defaultLocale: 'nl' as const,
};
export type Locale = (typeof i18n.locales)[number];

export const site = {
  /** Brand name used in the nav wordmark and <title>. */
  name: 'G-Filmlab',
  /** Sub-line under the brand (from the logo). */
  tagline: 'Masterclasses & story development',
  person: 'Gert Embrechts',
  umbrella: 'Embrace Evolve',
  email: 'gert@g-filmlab.org',
  phone: '+32 476 47 19 39',
  phoneHref: 'tel:+32476471939',
  address: {
    venue: 'Homecoming Land',
    street: 'Bredabaan 1251',
    postal: '2930',
    city: 'Brasschaat',
    country: 'België',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bredabaan+1251%2C+2930+Brasschaat',
  /**
   * Where the registration/contact forms post to.
   * Leave empty to use Netlify Forms (works automatically on Netlify),
   * or paste a Formspree / Basin / Web3Forms endpoint.
   */
  formEndpoint: '',
  /** Sibling sites, shown in the footer. */
  siblings: [
    { name: 'Familieopstellingen', url: 'https://familieopstellingen.embraceevolve.com', nl: 'Jessica Abicht, Brasschaat' },
  ] as { name: string; url: string; nl: string }[],
};
