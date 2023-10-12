import { type SchemaTypeDefinition } from 'sanity';
import post from './schemas/documents/post';
import author from './schemas/documents/author';
import blockContent from './schemas/objects/blockContent';
import category from './schemas/documents/category';
import page from './schemas/documents/page';
import hero from './schemas/objects/hero';
import collectionGrid from './schemas/objects/collection-grid';
import blogGrid from './schemas/objects/blog-grid';
import navigation from './schemas/documents/navigation';
import blockObject from './schemas/objects/blockObject';

// ---------------- Documents ----------------
const documents = [post, author, category, page, navigation];

// ---------------- Objects ------------------
const objects = [blockContent, hero, collectionGrid, blogGrid, blockObject];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...objects],
};
