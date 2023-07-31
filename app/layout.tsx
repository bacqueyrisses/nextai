import '@/styles/tailwind.css'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: {
    template: 'NextAI',
    default: 'Next.JS AI Doc',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/120/apple/354/sparkles_2728.webp"
          sizes="any"
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
