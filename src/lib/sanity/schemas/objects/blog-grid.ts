import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';
import { IPost } from '../documents/post';

export interface IBlogGrid {
  _key: string;
  blogs: IPost[];
}

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
      title: 'Blog Grid',
    },
    prepare() {
      return {
        title: 'Blog Grid' || 'Untitled',
        media: DocumentTextIcon,
      };
    },
  },
});
