import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export default defineType({
  name: 'collectionGrid',
  type: 'object',
  title: 'Collection Grid',
  fields: [
    defineField({
      name: 'collection',
      title: 'Collection (Collection ID)',
      type: 'string',
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
