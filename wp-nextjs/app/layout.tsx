import './globals.css';

import { Container, Section } from '@/components/craft';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThemeToggle } from '@/components/theme/theme-toggle';
// import { Analytics } from '@vercel/analytics/react';

import { contentMenu, footerMenu } from '@/menu.config';
import { siteConfig } from '@/site.config';
import { cn } from '@/lib/utils';

import Balancer from 'react-wrap-balancer';
import Logo from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

import type { Metadata } from 'next';

import { Nav } from '@/components/nav/nav';
import { ServiceWorkerManager } from '@/components/pwa/sw-manager';

const font = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'WordPress & Next.js Starter by 9d8',
  description:
    'A starter template for Next.js with WordPress as a headless CMS.',
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'overflow-y-scroll',
          'flex flex-col [&>*]:flex-none [&>section:first-of-type]:flex-1 min-h-screen font-sans antialiased',
          font.variable,
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
        {/* <Analytics /> */}

        <ServiceWorkerManager />
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer>
      <Section>
        <Container className='grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12'>
          <div className='flex flex-col gap-6 not-prose'>
            <Link href='/'>
              <h3 className='sr-only'>{siteConfig.site_name}</h3>
              <Image
                src={Logo}
                alt='Logo'
                className='dark:invert'
                width={42}
                height={26.44}
              >
              </Image>
            </Link>
            <p>
              <Balancer>{siteConfig.site_description}</Balancer>
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm'>
            <h5 className='font-medium text-base'>Website</h5>
            {Object.entries(footerMenu).map(([key, href]) => (
              <Link
                className='hover:underline underline-offset-4'
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-2 text-sm'>
            <h5 className='font-medium text-base'>Blog</h5>
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className='hover:underline underline-offset-4'
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
        </Container>
        <Container className='border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center'>
          <ThemeToggle />
          <p className='text-muted-foreground'>
            &copy;{' '}
            <a href='https://9d8.dev'>9d8</a>. All rights reserved.
            2025-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
};
