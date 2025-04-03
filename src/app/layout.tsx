import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import { DisableDraftMode } from '@/components/disable-draft-mode';
import './globals.css';
import { SanityLive } from '@/sanity/lib/live';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          {children}
          <SanityLive />
          {(await draftMode()).isEnabled && (
            <>
              <VisualEditing />
              {/* <DisableDraftMode /> */}
            </>
          )}
        </>
      </body>
    </html>
  );
}
