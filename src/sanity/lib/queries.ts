import { defineQuery } from 'next-sanity';

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...
  }
}`);

export const HEADERNAV_QUERY = defineQuery(`*[_type == "headerNav"][0]{
  "navItems": links[]{
    _type == "internalLink" => {
      "type": "internal",
      "href": "/"+@->slug.current,
      "title": @->title
    },
    _type == "externalLink" => {
      "type": "external",
      href,
      "title": text
    }
  }
}`);
