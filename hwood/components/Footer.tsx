import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-semibold">HWOOD</p>
          <p className="mt-2 max-w-lg text-sm text-white/80">
            פס ייצור מותאם אישית: CNC, גמר, מודולים ופרויקטים מיוחדים למותגים אירופאים מובילים.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/services" className="hover:text-accent">
            שירותים
          </Link>
          <Link href="/category/cnc" className="hover:text-accent">
            קטגוריות
          </Link>
          <a href="mailto:info@hwood.co.il" className="hover:text-accent">
            info@hwood.co.il
          </a>
          <a href="tel:+97239001234" className="hover:text-accent">
            03-900-1234
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} HWOOD. כל הזכויות שמורות.
      </div>
    </footer>
  );
}

export default Footer;
