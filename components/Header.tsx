import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Donate from './Donate';

const navItems = [
  { type: 'link', text: 'MISSION', href: '#mission' },
  { type: 'link', text: 'EVENTS', href: '#events' },
  { type: 'link', text: 'CONTACT', href: '#contact' },
  { type: 'component', text: 'DONATE', component: <Donate /> },
];

function Header() {
  return (
    <header className="sticky bg-blue">
      <div className="relative">
        <nav className="flex flex-col sm:flex-row items-center pb-5 md:pb-0 md:pr-10">
          <div className="flex items-center space-x-4 md:space-x-0 hover:cursor-pointer">
            <Logo />
          </div>
          <div className="flex-1 flex justify-center md:justify-end items-center space-x-2 md:space-x-4 text-white font-semibold text-base md:text-2xl hover:cursor-pointer tracking-tighter">
            <div className="flex-1 flex justify-center md:justify-end items-center space-x-2 md:space-x-4 text-white font-semibold text-base md:text-2xl hover:cursor-pointer tracking-tighter">
              {navItems.map((item) =>
                item.type === 'link' ? (
                  <Link key={item.text} href={item.href ?? ''}>
                    <span className="cursor-pointer hover:text-gray-300">
                      {item.text}
                    </span>
                  </Link>
                ) : (
                  <div
                    key={item.text}
                    className="cursor-pointer hover:text-gray-300 text-red-500"
                  >
                    {item.component}
                  </div>
                )
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
