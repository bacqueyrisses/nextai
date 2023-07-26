import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchDialog } from '@/components/SearchDialog'
import Header from '@/components/Header'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Title',
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={"bg-grainy bg-[#1f2122] min-h-screen flex flex-col justify-between px-40 py-12"}>
        <Header/>
        <section className={"flex items-center justify-between"}>
          {/*<div className={"text-7xl text-white basis-2/3"}>Revolutionize Your Language Abilities with Mindmate</div>*/}
          {/*<div className={"text-3xl text-white basis-1/3 place-self-end flex flex-col gap-4 justify-end items-end"}>*/}
          {/*  <div>App Router</div>*/}
          {/*  <div>Pages Router</div>*/}
          {/*</div>*/}
        </section>
        <section>
          <SearchDialog />
        </section>

      </main>
    </>
  )
}
