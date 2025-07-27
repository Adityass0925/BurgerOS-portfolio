import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';
import { socialLinks } from '@/constants/contacts';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-12 px-6 py-24 text-center xl:flex-row xl:justify-evenly xl:text-left">
      <Logo isLogoFooter />

      <div className="space-y-1 text-sm text-gray-500">
        <p>
          Built with ❤️ by{' '}
          <Link
            href="https://scaleonn.com"
            target="_blank"
            className="underline hover:text-primary transition-colors"
          >
            Scaleonn
          </Link>
        </p>
        <p className="text-xs text-gray-400">Powered under the Bugeros Initiative</p>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-8">
        {socialLinks.map((socialLink) => (
          <li key={socialLink.id} className="flex items-center gap-2">
            <Link href={socialLink.path} target="_blank" className="flex items-center gap-2">
              <Image
                src={socialLink.icon}
                alt={socialLink.alt}
                width={20}
                height={20}
              />
              <span className="text-sm text-silverchalice hover:text-primary transition-colors">
                {socialLink.id}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
