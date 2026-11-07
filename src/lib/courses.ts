import { getCollection } from 'astro:content';

export const statusLabel = {
  open: 'Inschrijvingen open',
  binnenkort: 'Binnenkort',
  'op-aanvraag': 'Op aanvraag',
  volzet: 'Volzet',
} as const;

export const audienceLabel = {
  makers: 'Voor schrijvers en makers',
  professionals: 'Voor professionals',
  iedereen: 'Voor iedereen die schrijft',
} as const;

/** All published courses, in their configured order. */
export async function getCourses() {
  return (await getCollection('courses', (c) => !c.data.draft)).sort((a, b) => a.data.order - b.data.order);
}
