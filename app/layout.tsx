import '@/styles/tailwind.css'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: {
    template: 'NextAI',
    default: 'Next.JS AI Doc Search',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Crystal%20Ball.png"
          sizes="any"
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
