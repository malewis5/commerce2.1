import { type SchemaTypeDefinition } from 'sanity';
import post from './schemas/post';
import author from './schemas/author';
import blockContent from './schemas/blockContent';
import category from './schemas/category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, category],
};
