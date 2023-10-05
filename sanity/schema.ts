import { type SchemaTypeDefinition } from 'sanity';
import post from './schemas/post';
import author from './schemas/author';
import blockContent from './schemas/blockContent';
import category from './schemas/category';
import page from './schemas/page';
import hero from './schemas/hero';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, category, page, hero],
};
