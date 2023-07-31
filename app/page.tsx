import {Container} from '@/components/Container'
import {SearchDialog} from '@/components/SearchDialog'
import {ArrowDownToDot} from "lucide-react";

function SearchContainer() {
    return (
        <>
            <Container className="mt-10 sm:mt-16">
                <div
                    className="relative -mx-2 rounded-4xl bg-stone-100 px-4 pt-10 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:px-16 xl:px-24">
                    <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 xl:max-w-none">
                        <h3 className="text-lg flex sm:justify-start justify-center items-center gap-1 font-semibold tracking-tight text-stone-800">
                            <span>Browse the documentation</span><span><ArrowDownToDot size={15}/></span>
                        </h3>
                        <div className="">
                            <SearchDialog/>
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
                        The AI Powered Next.JS Doc Search.
                    </h1>
                    <p className="mt-4 text-xl text-neutral-600">
                        AI-driven search for an effortless Next.JS documentation exploration.
                        Updated daily.
                    </p>
                </div>
            </Container>
            <SearchContainer/>
        </>
    )
}
