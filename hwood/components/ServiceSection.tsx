import Image from 'next/image';

interface ServiceSectionProps {
  id: string;
  title: string;
  text: string;
  bullets: string[];
  image: string;
  invert?: boolean;
  bg?: 'white' | 'light';
}

export function ServiceSection({ id, title, text, bullets, image, invert = false, bg = 'white' }: ServiceSectionProps) {
  const background = bg === 'light' ? 'bg-light' : 'bg-white';
  return (
    <section id={id} className={`snap flex min-h-screen items-center ${background}`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 lg:flex-row lg:items-center lg:py-24">
        <div className={`flex-1 space-y-6 ${invert ? 'lg:order-2' : ''}`}>
          <h2 className="text-3xl font-semibold text-dark md:text-4xl">{title}</h2>
          <p className="text-lg leading-relaxed text-dark/80">{text}</p>
          <ul className="list-disc pr-6 text-base leading-8 text-dark/70">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <a
            href="mailto:info@hwood.co.il"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary/90"
          >
            בקשו הצעת מחיר
          </a>
        </div>
        <div className={`flex-1 ${invert ? 'lg:order-1' : ''}`}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-soft">
            <Image src={image} alt={title} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
