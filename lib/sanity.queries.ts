import { groq } from 'next-sanity';

export const latestBlogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    publishedAt,
    author->{name, "image": image.asset->url, role},
    categories[]->{title, "slug": slug.current}
  }
`;

export const allBlogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    publishedAt,
    author->{name, "image": image.asset->url, role},
    categories[]->{title, "slug": slug.current}
  }
`;

export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    publishedAt,
    seoTitle,
    seoDescription,
    "seoImage": seoImage.asset->url,
    content[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->
      }
    },
    author->{name, "image": image.asset->url, bio, role, socialLinks},
    categories[]->{title, "slug": slug.current}
  }
`;

export const allCaseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    clientName,
    industry,
    "coverImage": galleryImages[0].asset->url
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    clientName,
    industry,
    content[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->
      }
    },
    "galleryImages": galleryImages[].asset->url,
    seoTitle,
    seoDescription,
    "seoImage": seoImage.asset->url
  }
`;
