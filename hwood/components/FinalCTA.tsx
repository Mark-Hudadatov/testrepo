import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-l from-primary via-dark to-accent text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">מוכנים לאצור את פס הייצור הבא שלכם?</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-white/85">
          צוות HWOOD מחבר בין תכנון הנדסי, בחירת חומר והתקנות בשטח. נבנה יחד מערך מודולרי המותאם למחזור הייצור שלכם.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="https://wa.me/972523001234"
            className="rounded-full bg-white px-6 py-3 font-semibold text-dark transition hover:bg-white/90"
            target="_blank"
            rel="noreferrer"
          >
            פתיחת WhatsApp
          </a>
          <Link
            href="mailto:info@hwood.co.il"
            className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            תיאום שיחת ייעוץ
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
