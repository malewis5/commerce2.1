import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export interface ICollectionGrid {
  _key: string;
  collection: string;
  title: string;
}

export default defineType({
  name: 'collectionGrid',
  type: 'object',
  title: 'Collection Grid',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'collection',
      title: 'Collection (Collection ID)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || DocumentTextIcon,
      };
    },
  },
});
