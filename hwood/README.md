# HWOOD תשתית אתר נגרות תעשייתית

אתר תדמיתי בעברית עבור מותג הנגרות התעשייתית HWOOD, מבוסס Next.js 14 עם App Router, TypeScript ו-Tailwind CSS.

## דרישות מוקדמות
- Node.js 18.17+
- npm או pnpm/yarn (הוראות ניתנו עבור npm)

## התקנה והרצה
```bash
npm install
npm run dev
```

- `npm run build` – קומפילציה לפרודקשן
- `npm run start` – הרצת ה-build שנוצר
- `npm run lint` – בדיקות ESLint
- `npm run type-check` – בדיקת טיפוסים

השרת המקומי נפתח בכתובת [http://localhost:3000](http://localhost:3000).

## מבנה הפרויקט
```
app/               # דפי אפליקציה (App Router)
components/        # קומפוננטות UI ממוחזרות
data/              # קבצי JSON המשמשים כ-CMS זמני
lib/               # עזרי גישה לנתונים ו-SEO
public/images/     # נכסי תמונות (webp/svg)
public/video/      # קבצי וידאו (cnc-loop.mp4)
public/docs/       # קבצי PDF למוצרים
styles/            # סגנונות גלובליים
```

## ניהול תכנים
### קטגוריות, תתי שירותים ומוצרים
הנתונים מנוהלים דרך קבצי JSON בתיקיית `data/`:
- `categories.json`
- `subservices.json`
- `products.json`

כל שינוי בקבצים אלו יופיע אוטומטית באתר בבנייה הבאה. ניתן להוסיף שדות כגון `tags` במוצרים לצורך פילוח מהיר.

### תמונות ווידאו
- מקמו תמונות מותאמות (WebP/SVG) ב-`public/images/`
- מקמו לוגואים של אמון/שותפים ב-`public/images/`
- מקמו וידאו לולאה ב-`public/video/cnc-loop.mp4`
- קבצי PDF שמורים ב-`public/docs/`

## מעבר ל-WordPress Headless
כדי לחבר ל-WordPress + WPGraphQL:
1. החליפו את הפונקציות ב-`lib/content.ts` בבקשות `fetch` ל-API של WordPress.
2. שמרו על אותן חתימות פונקציות (`getCategories`, `getCategory`, וכו') כדי שלא נצטרך לשנות קומפוננטות קיימות.
3. השתמשו ב-`revalidate` של Next.js לקביעת זמני Cache.

## SEO
- שימוש ב-`lib/seo.ts` לייצור Metadata עקבי.
- Sitemap ו-robots.txt זמינים תחת `app/sitemap.ts` ו-`app/robots.txt`.

## תצוגה ו-RTL
- כל האתר פועל ב-RTL כברירת מחדל באמצעות Tailwind וגלובליות CSS.
- סקשנים בנויים על בסיס מינימום מסך אחד ובשילוב snap view במסכים רחבים.
