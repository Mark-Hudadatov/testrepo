import SubnavActive from '@/components/SubnavActive';
import { ServiceSection } from '@/components/ServiceSection';
import FinalCTA from '@/components/FinalCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'שירותי HWOOD | תצורת ייצור תעשייתית',
  description: 'ארבעה קווי התמחות: עיבוד CNC, מודולריות, חזיתות וחומרי גלם מבוקרים לפרויקטים מסחריים.',
});

const sections = [
  {
    id: 'cnc',
    title: 'עיבוד CNC רב-צירי',
    text: 'מרכזי CNC מתקדמים בעלי חיבור ישיר ל-CAM מאפשרים לנו לפתח מחזורי ייצור מדויקים ואחידים, עם שליטה מלאה בחריטות, קידוחים והברגות.',
    bullets: ['ניהול תוכניות CAM בעברית ואנגלית', 'בקרת איכות Inline עם מדידה אוטומטית', 'הזנת לוחות חכמה להפחתת בזבוז', 'משמרת לילה ללא מגע יד אדם'],
    image: '/images/service-cnc.svg',
    bg: 'white' as const,
  },
  {
    id: 'modular',
    title: 'ייצור מודולים והרכבות',
    text: 'הקווים המודולריים שלנו מייצרים סדרות של ארונות, מגירות ומדפים עם מחברי קבועים לבחירתכם, ומכינים את כל היחידות להרכבה מהירה בשטח.',
    bullets: ['הרכבה יבשה מלאה לפני אספקה', 'סימון חלקים בלייזר להתאמה', 'שילוב פרזולים ממותגים מובילים', 'אריזה לפי סדר התקנה'],
    image: '/images/service-modular.svg',
    invert: true,
    bg: 'light' as const,
  },
  {
    id: 'facades',
    title: 'חזיתות וצבע תעשייתי',
    text: 'חזיתות MDF וצבע פוליאוריטני בתנור עם בקרת לחות וטמפרטורה. תהליך משולב השחזה, פריימר וגימור לקבלת מרקם אחיד ואיכותי.',
    bullets: ['קווים נפרדים למאט ולמבריק', 'בקרת אבק וחלקיקים מתקדמת', 'צבעים בהתאמה אישית לפי RAL', 'תיעוד מתכונים חוזרים לכל מותג'],
    image: '/images/service-facades.svg',
    bg: 'white' as const,
  },
  {
    id: 'materials',
    title: 'ניהול חומרים ולוגיסטיקה',
    text: 'ניהול מלאי מתועד עם RFID ומעקב משלוחים, כדי להבטיח זמינות פלטות, פרזול וחומרי גמר בדיוק בזמן הנדרש לפרויקט.',
    bullets: ['ייבוא ולוגיסטיקה מרכזית באירופה וישראל', 'ניטור תנועה ומלאי בזמן אמת', 'קווי שילוח ישירים לאתרי התקנה', 'מערך אריזה והגנה מותאם אישית'],
    image: '/images/service-materials.svg',
    invert: true,
    bg: 'light' as const,
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-0">
      <SubnavActive items={sections.map(({ id, title }) => ({ id, label: title }))} />
      {sections.map((section) => (
        <ServiceSection key={section.id} {...section} />
      ))}
      <FinalCTA />
    </div>
  );
}
