/**
 * G-Filmlab is Dutch-only for now. The routes table keeps the same shape as site 1
 * so an English version can be added later (add 'en' to site.config + routes).
 */
export const routes = {
  home: '/',
  cursussen: '/cursussen/',
  over: '/over-gert/',
  inschrijven: '/inschrijven/',
  contact: '/contact/',
  privacy: '/privacy/',
  bedankt: '/bedankt/',
} as const;
export type RouteKey = keyof typeof routes;

export function route(key: RouteKey): string {
  return routes[key];
}
export function courseUrl(slug: string): string {
  return `${routes.cursussen}${slug}/`;
}
