import Container from '@/components/Container'
import SearchBox from '@/components/SearchBox'

function SearchContainer() {
  return (
    <>
      <Container className="mt-10 sm:mt-16">
        <div className="relative -mx-2 rounded-4xl bg-stone-100 px-4 pb-12 pt-12 sm:-mx-6 sm:px-6 sm:pb-14 md:mx-0 md:px-16 xl:px-24">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 xl:max-w-none">
            <h3 className="-mt-2 flex items-baseline justify-center gap-1 text-lg font-semibold tracking-tight text-stone-800 sm:justify-start sm:text-xl">
              <span>Browse the documentation</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </span>
            </h3>
            <div>
              <SearchBox />
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
          <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            The AI-Powered <br /> Next.JS Documentation.
          </h1>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            NextAI: Effortless Next.JS documentation exploration powered by AI.
            Daily updated.
          </p>
        </div>
      </Container>
      <SearchContainer />
    </>
  )
}
