import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Donate from './Donate';

type NavItemType = {
  type: 'link' | 'external' | 'component';
  text: string;
  href?: string;
  component?: JSX.Element;
};

const navItems: NavItemType[] = [
  { type: 'link', text: 'HOME', href: '/' },
  { type: 'link', text: 'EVENTS', href: '/events' },
  {
    type: 'external',
    text: 'TEAM',
    href: 'https://www.verrazanobikeshop.com/team/',
  },
  { type: 'component', text: 'DONATE', component: <Donate /> },
];

function Header() {
  const NavItem: React.FC<{ item: NavItemType }> = ({ item }) => {
    if (item.type === 'link') {
      return (
        <Link
          href={item.href ?? ''}
          className="cursor-pointer hover:text-gray-300"
        >
          <span>{item.text}</span>
        </Link>
      );
    } else if (item.type === 'external') {
      return (
        <Link
          href={item.href ?? ''}
          className="cursor-pointer hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.text}
        </Link>
      );
    } else if (item.type === 'component') {
      return (
        <div className="cursor-pointer hover:text-gray-300 focus:text-gray-300">
          {item.component}
        </div>
      );
    }
    return null;
  };

  return (
    <header className="sticky bg-blue">
      <div className="relative">
        <nav className="flex flex-col sm:flex-row items-center pb-5 md:pb-0 md:pr-10">
          <div className="flex items-center space-x-4 md:space-x-0 hover:cursor-pointer">
            <Logo />
          </div>
          <div className="flex-1 flex justify-center md:justify-end items-center space-x-2 md:space-x-4 text-white font-semibold text-base md:text-2xl hover:cursor-pointer tracking-tighter">
            {navItems.map((item) => (
              <NavItem key={item.text} item={item} />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
