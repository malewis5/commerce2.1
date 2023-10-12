import { defineType, defineField } from 'sanity';

export interface ISEO {
  title: string;
  description?: string;
  canonicalUrl?: string;
  metaRobots?: string;
  metaKeywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
}

export default defineType({
  name: 'seo',
  type: 'object',
  title: 'SEO',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'canonicalUrl',
      type: 'string',
    }),
    defineField({
      name: 'metaRobots',
      type: 'string',
    }),
    defineField({
      name: 'metaKeywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ogTitle',
      type: 'string',
    }),
    defineField({
      name: 'ogDescription',
      type: 'text',
    }),
    defineField({
      name: 'ogImage',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'twitterTitle',
      type: 'string',
    }),
    defineField({
      name: 'twitterDescription',
      type: 'text',
    }),
    defineField({
      name: 'twitterImage',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'twitterCard',
      type: 'string',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary Large Image', value: 'summary_large_image' },
          { title: 'App', value: 'app' },
          { title: 'Player', value: 'player' },
        ],
      },
    }),
  ],
});
