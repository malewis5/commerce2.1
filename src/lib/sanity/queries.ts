import { groq } from 'next-sanity';

// Get all posts
export const postsQuery = groq`*[_type == "post"]`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body, publishedAt, author->{name, image}, slug
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get a single page by its slug
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
    seo,
    pageBuilder[]{
      ...,
      _type == 'blogGrid' => {
        ...,
        blogs[]->{
          ...,
        }
      },
      _type == 'collectionGrid' => {
        ...,
      },
    }
}`;

// Get Navigation Menu
export const navigationQuery = groq`*[_type == "navigation" && tag == $tag][0]{
  navItems[]{
    title,
    slug
  }
}`;
