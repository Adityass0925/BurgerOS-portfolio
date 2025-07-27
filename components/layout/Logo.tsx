import Link from 'next/link';

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? 'text-3xl' : 'text-2xl'
      }`}
    >
      <span className="text-valencia">B</span>
      <span className="text-supernova">u</span>
      <span className="text-cerise">r</span>
      <span className="text-azureradiance">g</span>
      <span className="text-azureradiance">e</span>
      <span className="text-oceangreen">r</span>
      <span className="text-roseofsharon">O</span>
      <span className="text-brickred">S</span>
    </Link>
  );
};
export default Logo;
