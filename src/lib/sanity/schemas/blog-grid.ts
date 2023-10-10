import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export default defineType({
  name: 'blogGrid',
  type: 'object',
  title: 'Blog Grid',
  fields: [
    defineField({
      name: 'blogs',
      title: 'Blogs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
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
