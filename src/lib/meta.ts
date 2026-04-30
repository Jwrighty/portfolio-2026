import { site } from '../data/site';

interface MetaInput {
  title?: string;
  description?: string;
  path?: string;
}

interface MetaTags {
  title: string;
  description: string;
  canonical: string;
  'og:title': string;
  'og:description': string;
  'og:url': string;
  'og:type': string;
  'twitter:card': string;
  'twitter:title': string;
  'twitter:description': string;
}

export function buildMeta({ title, description, path = '/' }: MetaInput): MetaTags {
  const resolvedTitle = title ? `${title} — ${site.name}` : site.name;
  const resolvedDescription = description ?? site.description;
  const canonical = `${site.url}${path}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    canonical,
    'og:title': resolvedTitle,
    'og:description': resolvedDescription,
    'og:url': canonical,
    'og:type': 'website',
    'twitter:card': 'summary',
    'twitter:title': resolvedTitle,
    'twitter:description': resolvedDescription,
  };
}
