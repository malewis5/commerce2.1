import BlogGrid from './BlogGrid';
import CollectionGrid from './CollectionGrid';
import Hero from './Hero';
import { IPage } from '@/lib/sanity/schemas/documents/page';
import TextBlock from './TextBlock';

const componentMap: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  blogGrid: BlogGrid,
  collectionGrid: CollectionGrid,
  textBlock: TextBlock,
};

export const RenderPage = ({ page }: { page: IPage }) => {
  return page.pageBuilder.map((block: any) => {
    const Component = componentMap[block._type];
    if (Component) {
      return <Component block={block} key={block._key} />;
    }
  });
};
