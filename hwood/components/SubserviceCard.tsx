import Image from 'next/image';
import Link from 'next/link';
import type { Subservice } from '@/lib/content';

interface SubserviceCardProps {
  subservice: Subservice;
}

export function SubserviceCard({ subservice }: SubserviceCardProps) {
  return (
    <Link
      href={`/subservice/${subservice.slug}`}
      className="group flex min-w-[240px] max-w-sm flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3]">
        <Image src={subservice.image} alt={subservice.title} fill className="object-cover transition group-hover:scale-105" sizes="240px" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-xl font-semibold text-dark">{subservice.title}</h3>
        <p className="text-sm text-dark/70">{subservice.description}</p>
        <span className="mt-auto text-sm font-semibold text-primary">לפרטי המודולים →</span>
      </div>
    </Link>
  );
}

export default SubserviceCard;
