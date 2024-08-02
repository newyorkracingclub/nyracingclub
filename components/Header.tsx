import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

type NavItemType = {
  type: 'link' | 'external';
  text: string;
  href?: string;
  external?: string;
};

const navItems: NavItemType[] = [
  { type: 'link', text: 'HOME', href: '/' },
  { type: 'link', text: 'EVENTS', href: '/events' },
  {
    type: 'external',
    text: 'TEAM',
    href: 'https://www.verrazanobikeshop.com/team/',
  },
  {
    type: 'external',
    text: 'DONATE',
    href: 'https://www.paypal.com/donate?token=BcqKe14lJPY1aeKF5SyTDKb7Ni29VmB0YEF8eABTu7qsqUZ8SpOi1JVlo_Zz_bSbh06kKtIGh-Rf6KAs',
  },
];

const ExternalLink: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <Link
    href={href}
    passHref
    className="cursor-pointer hover:text-gray-300 focus:text-gray-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </Link>
);

function Header() {
  const NavItem: React.FC<{ item: NavItemType }> = ({ item }) => {
    if (item.type === 'link') {
      return (
        <Link href={item.href ?? ''} passHref>
          <a className="cursor-pointer hover:text-gray-300">{item.text}</a>
        </Link>
      );
    } else if (item.type === 'external') {
      return <ExternalLink href={item.href ?? ''} text={item.text} />;
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
