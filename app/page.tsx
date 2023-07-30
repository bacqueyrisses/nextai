"use client"
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchDialog } from '@/components/SearchDialog'
import Header from '@/components/Header'

import { Metadata } from 'next'
import Footer from '@/components/Footer'

// export const metadata: Metadata = {
//   title: 'My Page Title',
// }


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <main className={"flex flex-grow flex-col items-center gap-10 justify-between"}>
        <section className={"flex flex-col items-center w-full sm:w-2/3"}>
          <div className={"sm:text-3xl text-xl font-bold"}>
            The AI powered Next.JS Doc Search
          </div>
          <SearchDialog />
        </section>

      </main>
      <Footer/>
    </>
  )
}
