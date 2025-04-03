import { defineQuery } from 'next-sanity';

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...
  }
}`);

export const HEADERNAV_QUERY = defineQuery(`*[_type == "headerNav"][0]{
  links[]
}`);
