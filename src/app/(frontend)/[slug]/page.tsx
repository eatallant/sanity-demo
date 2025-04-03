import { PageBuilder } from '@/components/pageBuilder';
import { sanityFetch } from '@/sanity/lib/live';
import { defineQuery } from 'next-sanity';
import { PAGE_QUERY } from '@/sanity/lib/queries';

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: await params
  });

  return page?.content ? <PageBuilder content={page.content} /> : null;
}
