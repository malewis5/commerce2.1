import { defineType } from 'sanity';

export default defineType({
  title: 'Block',
  name: 'blockObject',
  type: 'object',
  fields: [
    {
      title: 'Block Text',
      name: 'blockText',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});
