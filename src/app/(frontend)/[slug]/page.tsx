import { PageBuilder } from "@/components/pageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...
  }
}`);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: await params,
  });

  return page?.content ? <PageBuilder content={page.content} /> : null;
}