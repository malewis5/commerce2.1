import { defineField, defineType } from 'sanity';

export interface INavigation {
  _key: string;
  title: string;
  navItems: {
    title: string;
    slug: string;
  }[];
  tag: string;
}

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
