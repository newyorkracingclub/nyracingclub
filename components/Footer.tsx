import Link from 'next/link';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Strava from './Strava';

type FooterLinkProps = {
  href: string;
  text: string;
};

const additionalLinks: FooterLinkProps[] = [
  { href: '/privacypolicy', text: 'Privacy Policy' },
  { href: '/termsandconditions', text: 'Terms and Conditions' },
];

const Footer: React.FC = () => (
  <>
    <footer className="static bottom-0 py-8 right-0 left-0 bg-blue">
      <div className="flex items-center justify-center gap-x-4">
        <Facebook />
        <Instagram />
        <Strava />
      </div>
      <div className="text-xs text-center pt-8">
        ©2024 New York Racing Club. All Rights Reserved. <br /> 501(c)(3)
        Non-Profit Organization.
      </div>
      <div className="flex justify-center gap-x-2 pt-2 text-xs italic underline-offset-2 underline">
        {additionalLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="cursor-pointer hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </footer>
  </>
);

export default Footer;
