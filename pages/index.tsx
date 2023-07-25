import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchDialog } from '@/components/SearchDialog'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js OpenAI Template</title>
        <meta
          name="description"
          content="Next.js documentation AI powered."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"bg-grainy bg-[#1f2122] min-h-screen flex flex-col justify-between p-6"}>
        <Header/>
        <div>
          <SearchDialog />
        </div>
      </main>
    </>
  )
}
