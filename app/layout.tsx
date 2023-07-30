import "@/styles/globals.css";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}
export default function RootLayout({
                                     // Layouts must accept a children prop.
                                     // This will be populated with nested layouts or pages
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body className={"min-h-screen flex flex-col justify-between px-4 sm:px-0"}>{children}</body>
    </html>
  )
}

//bg-[#F1F4F5]