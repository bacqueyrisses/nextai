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
      <main className={"bg-grainy bg-[#1f2122] min-h-screen flex flex-col justify-between p-6"}>
        <Header/>
        <div>
          <SearchDialog />
        </div>
      </main>
    </>
  )
}
