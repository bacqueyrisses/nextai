import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchDialog } from '@/components/SearchDialog'
import Header from '@/components/Header'

import { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'My Page Title',
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <main className={"flex flex-col items-center gap-10 justify-between"}>
        <section>
          <SearchDialog />
        </section>

      </main>
      <Footer/>
    </>
  )
}
