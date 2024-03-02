'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type MenuItem = {
  label: string;
  href: string;
};

const aboutMenuItems: MenuItem[] = [
  { label: 'MISSION', href: '/mission' },
  { label: 'SPONSORS', href: '/sponsors' },
  { label: 'VERRAZANO TEAM', href: 'https://www.verrazanobikeshop.com/team/' },
];

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p
          className="hover:cursor-pointer tracking-tighter"
          onClick={handleMenuToggle}
          aria-label="about"
        >
          ABOUT
        </p>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuContent align="end">
          {aboutMenuItems.map((item: MenuItem, index: number) => (
            <DropdownMenuItem key={index} onClick={handleMenuItemClick}>
              {item.href.startsWith('http') ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link href={item.href}>
                  <a>{item.label}</a>
                </Link>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
