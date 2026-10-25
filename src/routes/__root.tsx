import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const siteUrl = 'https://nehorastam.co.il'
const siteName = 'נהורא - ספרי תורה, תפילין ומזוזות'
const siteDescription =
  'סת״ם מהודר בכתב יד סופר מוסמך: ספרי תורה, תפילין ומזוזות בפיקוח רבני, ושירות בדיקת מזוזות ותפילין עד הבית.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      { property: 'og:url', content: siteUrl },
      { property: 'og:site_name', content: 'נהורא' },
      { property: 'og:locale', content: 'he_IL' },
      { property: 'og:image', content: `${siteUrl}/og.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'נהורא - ספרי תורה, תפילין ומזוזות' },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { name: 'twitter:image', content: `${siteUrl}/og.jpg` },
    ],
    links: [
      { rel: 'canonical', href: `${siteUrl}/` },
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'icon', type: 'image/png', href: '/icon-512.png', sizes: '512x512' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700;900&family=Heebo:wght@300;400;500;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
