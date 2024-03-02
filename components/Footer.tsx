import Facebook from './Facebook';
import Instagram from './Instagram';
import Strava from './Strava';

function Footer() {
  return (
    <footer className="static bottom-0 py-8 right-0 left-0 bg-blue">
      <div className="flex items-center justify-center text-center gap-x-6">
        <Facebook />
        <Instagram />
        <Strava />
      </div>
    </footer>
  );
}

export default Footer;
