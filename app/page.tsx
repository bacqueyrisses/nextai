import { Container } from '@/components/Container'
import { SearchDialog } from '@/components/SearchDialog'
function SearchContainer() {
  return (
    <>
      <Container className="mt-10 sm:mt-16">
        <div className="relative -mx-2 rounded-4xl bg-stone-100 px-4 py-10 sm:-mx-6 sm:px-6 md:mx-0 md:px-16 xl:px-24">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 xl:max-w-none">
            <h3 className="text-lg font-semibold tracking-tight text-blue-950">
              Browse the documentation <span aria-hidden="true">&darr;</span>
            </h3>
            <div className="">
              <SearchDialog />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-10 sm:mt-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            The AI Powered Next.JS Doc Search.
          </h1>
          <p className="mt-4 text-xl text-neutral-600">
            AI-driven search for a effortless Next.JS documentation exploration.
            Daily updated.
          </p>
        </div>
      </Container>
      <SearchContainer />
    </>
  )
}
