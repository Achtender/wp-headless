'use client';

import { Button } from "@/components/ui/button";

import { mainMenu } from '@/menu.config';
import { siteConfig } from '@/site.config';

import Logo from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

import { MobileNav } from '@/components/nav/mobile-nav';
import { useEffect, useRef, useState } from 'react';

export const Nav = ({ children, id }: NavProps) => {
  const stickyRef = useRef(null);
  const [stuck, setStuck] = useState(false);

  // useEffect(() => {
  //   const observer = new globalThis.IntersectionObserver(
  //     ([e]) => {
  //       setStuck(e.intersectionRatio < 1)
  //     },
  //     { threshold: [1] },
  //   );

  //   if (stickyRef.current) observer.observe(stickyRef.current);
  //   return () => observer.disconnect();
  // }, []);

  return (
    <nav
      // className={cn('sticky z-50 top-0 md:top-[-72px] bg-background ', 'border-b', className)}
      className={`sticky z-50 top-0 md:top-[-72px] border-b bg-background`}
      id={id}
    >
      <div className='max-w-6xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center'>
        <Link
          className='hover:opacity-75 transition-all flex gap-4 items-center'
          href='/'
        >
          <Image
            src={Logo}
            alt='Logo'
            loading='eager'
            className='dark:invert'
            width={42}
            height={26.44}
          >
          </Image>
          <span className='text-sm'>{siteConfig.site_name}</span>
        </Link>
        {children}
        <div className='flex items-center gap-2'>
          <div className='mx-2 hidden md:flex'>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant='ghost' size='sm'>
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
          <Button asChild className='hidden sm:flex'>
            <Link href='https://github.com/9d8dev/next-wp'>Get Started</Link>
          </Button>
          <MobileNav />
        </div>
      </div>

      <div
        ref={stickyRef}
        className='hidden md:flex max-w-6xl mx-auto h-14 px-6 sm:px-8 justify-between items-center'
      >
        {
          <Link
          className={`hover:opacity-75 transition-all flex gap-4 items-center ${
        stuck ? '' : 'invisible'
      }`}
          href='/'
        >
          <Image
            src={Logo}
            alt='Logo'
            loading='eager'
            className='dark:invert'
            width={42}
            height={26.44}
          >
          </Image>
        </Link>
        }
        <div className='flex items-center gap-2'>
          <MobileNav />
          <div className='hidden md:flex'>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant='ghost' size='sm'>
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
