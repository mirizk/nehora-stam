import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  BadgeCheck,
  Clock,
  Feather,
  HandHeart,
  Mail,
  MapPin,
  Phone,
  ScanSearch,
  ShieldCheck,
  Star,
  Truck,
} from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export const Route = createFileRoute('/')({
  component: Home,
})

// Placeholder business details — replace with the real ones before launch
const BUSINESS = {
  name: 'נהורא',
  tagline: 'סת״ם מהודר',
  phone: '0527174076',
  phoneHref: 'tel:+972527174076',
  waHref: 'https://wa.me/972527174076',
  email: 'nhr60179@gmail.com',
  address: 'רחוב הרב עובדיה יוסף 9, לוד',
  hours: 'א׳–ה׳ 19:00–21:00 · או בתאום',
}

const img = (name: string, w: number) => `/.netlify/images?url=/img/${name}.png&w=${w}&fm=webp`

const NAV = [
  { href: '#services', label: 'שירותים' },
  { href: '#inspection', label: 'בדיקת מזוזות' },
  { href: '#trust', label: 'למה אנחנו' },
  { href: '#contact', label: 'צור קשר' },
]

const PRODUCTS = [
  {
    image: 'torah',
    title: 'ספרי תורה',
    text: 'כתיבת ספר תורה מהודר לבית הכנסת, להכנסה לזכר יקירים או לשמחה משפחתית - כולל ליווי מלא עד מעמד הכנסת הספר.',
    points: ['כתב ספרדי, אשכנזי ואר״י', 'קלף עבודת יד מעובד לשמה', 'הגהה ממוחשבת וידנית כפולה'],
  },
  {
    image: 'tefillin',
    title: 'תפילין',
    text: 'תפילין גסות ופשוטות בכל רמות ההידור, בתים מעור אחד ופרשיות בכתב יד סופרים יראי שמיים. מותאמות לבר מצווה ולכל מנהג.',
    points: ['בתים גסות מעור אחד', 'פרשיות מהודרות לכל מנהג', 'התאמת קשר ורצועות במקום'],
  },
  {
    image: 'mezuzah',
    title: 'מזוזות',
    text: 'מזוזות כשרות למהדרין לבית, למשרד ולמוסדות - במגוון רמות הידור, יחד עם בתי מזוזה מעוצבים וקביעה מקצועית.',
    points: ['כל מזוזה נבדקת פעמיים', 'בתי מזוזה ממתכת, עץ וזכוכית', 'קביעה במקום בברכה'],
  },
]

const INSPECTION_STEPS = [
  { title: 'תיאום והגעה', text: 'מתאמים מועד נוח ומגיעים אליכם, או אוספים את המזוזות מהבית.' },
  { title: 'בדיקת מחשב', text: 'סריקה ממוחשבת לאיתור אותיות חסרות, נוספות או מתחלפות.' },
  { title: 'בדיקת סופר מגיה', text: 'כל אות נבחנת בעין מומחה: צורת האות, דיו, סדקים ונגיעות.' },
  { title: 'תיקון והחזרה', text: 'תיקון כשר במידת האפשר, דוח בדיקה מסודר וקביעה מחדש בברכה.' },
]

const BADGES = [
  { icon: ShieldCheck, title: 'בפיקוח רבני', text: 'כל המוצרים תחת השגחה והגהה מוסמכת' },
  { icon: Feather, title: 'סופרים מוסמכים', text: 'כתב יד סופרים יראי שמיים בעלי תעודה' },
  { icon: ScanSearch, title: 'בדיקה כפולה', text: 'בדיקת מחשב ובדיקת עין לכל פריט' },
  { icon: BadgeCheck, title: 'תעודת כשרות', text: 'תעודה חתומה מצורפת לכל רכישה' },
  { icon: Truck, title: 'עד הבית', text: 'משלוח ושירות בדיקה בכל רחבי הארץ' },
  { icon: HandHeart, title: 'אחריות מלאה', text: 'ליווי, ייעוץ ושירות גם אחרי הרכישה' },
]

const TESTIMONIALS = [
  {
    quote: 'הגיעו לבדוק את כל המזוזות בבית, הסבירו בסבלנות מה נמצא בכל אחת ותיקנו במקום. שירות אמין ומכבד.',
    name: 'משפחת לוי',
    place: 'בית שמש',
  },
  {
    quote: 'הזמנו ספר תורה לעילוי נשמת אבינו. הליווי מהכתיבה ועד ההכנסה היה מקצועי, רגיש ומדויק.',
    name: 'הרב אליהו כ.',
    place: 'גבאי בית כנסת, בני ברק',
  },
  {
    quote: 'קנינו תפילין לבר מצווה של הבן. קיבלנו ייעוץ מקצועי והסבר על כל רמת הידור, בלי לחץ ובמחיר הוגן.',
    name: 'יוסף א.',
    place: 'ירושלים',
  },
]

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <Inspection />
      <Trust />
      <Contact />
      <Footer />
    <a
        href={BUSINESS.waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="דברו איתנו בוואטסאפ"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
      >
        <svg
          className="size-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="hidden font-medium text-sm md:inline">שאל אותנו בוואטסאפ</span>
      </a>
    </div>
  )
}

function Logo() {
  return (
    <a href="#top" className="flex items-center">
      <img
        src="/img/logo.png" 
        alt="נהורא - סת״ם"
        className="h-20 w-auto object-contain"
      />
    </a>
  )
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo light />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-parchment/80 transition hover:text-gold-light">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 rounded-full border border-gold-light/50 px-4 py-2 text-sm text-parchment transition hover:bg-gold-light/10"
        >
          <Phone className="size-4" />
          <span dir="ltr">{BUSINESS.phone}</span>
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-center bg-ink text-parchment">
      <img
        src={img('hero', 1920)}
        srcSet={`${img('hero', 960)} 960w, ${img('hero', 1600)} 1600w, ${img('hero', 2400)} 2400w`}
        sizes="100vw"
        alt="ספר תורה פתוח על שולחן עץ, לצד יד כסף ונוצת סופר"
        className="absolute inset-0 -z-10 size-full object-cover object-left"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-ink via-ink/85 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-2xl">
          <p className="rise mb-6 inline-flex items-center gap-3 text-sm tracking-[0.2em] text-gold-light">
            <span className="h-px w-10 bg-gold-light" />
            ספרי תורה · תפילין · מזוזות
          </p>
          <h1 className="rise rise-2 font-serif text-5xl leading-[1.1] font-bold md:text-7xl">
            כל אות נכתבת
            <br />
            <span className="text-gold-light">בקדושה ובדיוק</span>
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-parchment/80">
            סת״ם מהודר בכתב יד סופרים מוסמכים, בפיקוח רבני צמוד ובבדיקה כפולה. מספר תורה לבית הכנסת ועד בדיקת המזוזות
            בביתכם — אנחנו כאן כדי שתהיו שקטים.
          </p>
          <div className="rise rise-4 mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-medium text-ink shadow-xl shadow-black/30 transition hover:bg-gold-light"
            >
              לתיאום בדיקת מזוזות
              <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-parchment/30 px-8 py-4 font-medium transition hover:border-parchment/60 hover:bg-white/5"
            >
              לכל השירותים
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <div className="border-y border-gold/20 bg-ink-soft text-parchment/80">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-sm">
        {BADGES.slice(0, 4).map(({ icon: Icon, title }) => (
          <li key={title} className="flex items-center gap-2">
            <Icon className="size-4 text-gold-light" />
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <p className="text-sm font-medium tracking-[0.2em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">{title}</h2>
      <div className="gold-rule mx-auto mt-6 w-40" />
      {text && <p className="mt-6 text-lg leading-relaxed text-ink/70">{text}</p>}
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="grain scroll-mt-8 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="מה אנחנו עושים"
          title="סת״ם בהידור ללא פשרות"
          text="כל פריט שיוצא מאיתנו עובר דרך ידיים מקצועיות ויראות שמיים — מהקלף והדיו ועד ההגהה האחרונה."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink">
                <img
                  src={img(p.image, 800)}
                  srcSet={`${img(p.image, 480)} 480w, ${img(p.image, 800)} 800w, ${img(p.image, 1200)} 1200w`}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-serif text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{p.text}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="size-1.5 rotate-45 bg-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-ink transition hover:text-gold"
                >
                  לקבלת הצעת מחיר
                  <ArrowLeft className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Inspection() {
  return (
    <section id="inspection" className="relative scroll-mt-8 overflow-hidden bg-ink py-24 text-parchment md:py-32">
      <div className="absolute -top-40 -left-40 size-[32rem] rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-gold-light">שירות בדיקה</p>
          <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">בדיקת מזוזות ותפילין</h2>
          <div className="gold-rule mt-6 w-40" />
          <p className="mt-6 text-lg leading-relaxed text-parchment/75">
            ההלכה מורה לבדוק מזוזות פעמיים בשבע שנים ותפילין באופן קבוע. לחות, שמש ופגעי הזמן עלולים לפגוע באותיות —
            בדיקה מקצועית מבטיחה שהמצווה נשמרת בשלמותה.
          </p>
          <ol className="mt-10 space-y-6">
            {INSPECTION_STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-light/50 font-serif text-lg text-gold-light">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold">{step.title}</h3>
                  <p className="mt-1 text-parchment/65">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            href="#contact"
            className="group mt-12 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-medium text-ink transition hover:bg-gold-light"
          >
            לתיאום בדיקה
            <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl border border-gold/30" aria-hidden />
          <img
            src={img('mezuzah', 1000)}
            srcSet={`${img('mezuzah', 600)} 600w, ${img('mezuzah', 1000)} 1000w, ${img('mezuzah', 1400)} 1400w`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt="קלף מזוזה, בית מזוזה מנחושת וזכוכית מגדלת לבדיקה"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
          <div className="absolute -bottom-6 right-6 max-w-xs rounded-xl bg-parchment p-5 text-ink shadow-xl">
            <p className="font-serif text-lg font-bold">דוח בדיקה לכל מזוזה</p>
            <p className="mt-1 text-sm text-ink/70">תדעו בדיוק מה נבדק, מה תוקן ומה מצב כל פריט.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section id="trust" className="scroll-mt-8 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="למה לבחור בנו" title="אמינות שנבנתה לאורך דורות" />
        <div className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-parchment p-8 transition hover:bg-white">
              <span className="flex size-14 items-center justify-center rounded-full bg-ink text-gold-light">
                <Icon className="size-6" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold">{title}</h3>
              <p className="mt-2 text-ink/65">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-gold/25 bg-white/60 p-8">
              <div className="flex gap-1 text-gold" aria-label="5 כוכבים">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 font-serif text-lg leading-relaxed">״{t.quote}״</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-bold">{t.name}</span>
                <span className="text-ink/55"> · {t.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const details = [
    { icon: Phone, label: 'טלפון', value: BUSINESS.phone, href: BUSINESS.phoneHref, ltr: true },
    { icon: Mail, label: 'דוא״ל', value: BUSINESS.email, href: `mailto:${BUSINESS.email}`, ltr: true },
    { icon: MapPin, label: 'כתובת', value: BUSINESS.address },
    { icon: Clock, label: 'שעות פעילות', value: BUSINESS.hours },
  ]
  return (
    <section id="contact" className="grain scroll-mt-8 bg-parchment-deep/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-medium tracking-[0.2em] text-gold">צור קשר</p>
          <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">נשמח לעמוד לשירותכם</h2>
          <div className="gold-rule mt-6 w-40" />
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            השאירו פרטים לייעוץ ללא התחייבות, להצעת מחיר או לתיאום בדיקת מזוזות — ונחזור אליכם בהקדם.
          </p>
          <ul className="mt-10 space-y-5">
            {details.map(({ icon: Icon, label, value, href, ltr }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-ink text-gold-light">
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs text-ink/55">{label}</p>
                  {href ? (
                    <a href={href} dir={ltr ? 'ltr' : undefined} className="font-medium hover:text-gold">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-parchment p-8 shadow-xl shadow-ink/5 ring-1 ring-ink/5 md:p-10 lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-parchment/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <Logo light />
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-gold-light">
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-sm">© {new Date().getFullYear()} {BUSINESS.name}. כל הזכויות שמורות.</p>
      </div>
    </footer>
  )
}
