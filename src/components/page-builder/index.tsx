import { BlogGrid } from './blog-grid';
import { CollectionGrid } from './collection-grid';
import { HeroImage } from './hero-image';
import { IPage } from '@/lib/sanity/schemas/documents/page';
import { TextBlock } from './text-block';

const componentMap: Record<string, React.ComponentType<any>> = {
  hero: HeroImage,
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
