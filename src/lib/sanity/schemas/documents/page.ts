import { defineArrayMember, defineField, defineType } from 'sanity';

export interface IPage {
  title: string;
  slug: string;
  pageBuilder: object[];
}

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'collectionGrid',
          type: 'collectionGrid',
        }),
        defineArrayMember({
          name: 'blogGrid',
          type: 'blogGrid',
        }),
        defineArrayMember({
          name: 'textBlock',
          type: 'blockObject',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
