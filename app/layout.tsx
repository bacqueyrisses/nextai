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
    <body className={"bg-[#F1F4F5] min-h-screen px-40 py-10 flex flex-col justify-between"}>{children}</body>
    </html>
  )
}