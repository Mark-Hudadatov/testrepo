import Link from 'next/link';
import VideoBackground from './VideoBackground';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      <VideoBackground src="/video/cnc-loop.mp4" />
      <div className="absolute inset-0 bg-dark/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
          מערך נגרות תעשייתית שמתכייל לקצב שלכם
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/85">
          HWOOD משלבת מכונות CNC מדויקות, קווי גמר וחומרי גלם פרימיום כדי לייצר עבור מותגים אירופאים סטנדרט עקבי בכל מחזור ייצור.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-base">
          <a
            href="mailto:info@hwood.co.il"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
          >
            שלחו תוכניות
          </a>
          <Link
            href="/services"
            className="rounded-full border border-white/60 px-8 py-3 font-semibold transition hover:border-white hover:bg-white/10"
          >
            צפו בשירותים
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
