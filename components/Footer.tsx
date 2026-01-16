import Facebook from './Facebook';
import Instagram from './Instagram';
import Strava from './Strava';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="static bottom-0 py-8 right-0 left-0 bg-blue">
      <div className="flex items-center justify-center gap-x-6">
        <Facebook />
        <Instagram />
        <Strava />
      </div>
      <p className="flex text-xs text-start justify-center pt-4">
        ©{currentYear} New York Racing Club. All Rights Reserved. <br /> 501(c)(3)
        Non-Profit Organization.
      </p>
    </footer>
  );
}

export default Footer;