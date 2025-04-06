'use client';

import React from 'react';
import Link from 'next/link';

import { LogoIconDark, LogoIconLight } from './logoicon';

import { Button, ButtonProps } from '@/components/button';

export const LogoIcons: React.FC<ButtonProps> = ({ className }) => {
  return (
    <Link href="#home">
      <Button className={className} variant="secondary" size="icon">
        <LogoIconDark className="size-5 dark:hidden" />
        <LogoIconLight className="hidden size-5 dark:block" />
      </Button>
    </Link>
  );
};
