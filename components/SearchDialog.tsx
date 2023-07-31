'use client'

import * as React from 'react'
import {useRef} from 'react'
import {useCompletion} from 'ai/react'
import {Frown, User} from 'lucide-react'
import AISearch from '@/components/AISearch'
import {questions} from '@/config/questions'
import Image from "next/image";

type RouterType = 'APP' | 'PAGES'

export function SearchDialog() {
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState<string>('')
    const [routerType, setRouterType] = React.useState<RouterType>('APP')

    const {complete, completion, isLoading, error} = useCompletion({
        api: '/api/vector-search',
        body: {routerType},
    })
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (!query) return inputRef.current?.focus()
        void complete(query)
    }

    return (
        <>
            <div className={'w-full overflow-y-auto'}>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-10 sm:py-4 text-slate-700">
                        <div className={'space-y-5'}>
                            <div
                                className="mt-5 flex rounded-3xl bg-white py-2 sm:py-4 pr-2.5 shadow-xl shadow-blue-900/5">
                                <input
                                    placeholder="Ask a question about Next.JS..."
                                    name="search"
                                    ref={inputRef}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="-px-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                ></input>
                                <button
                                    type="submit"
                                    className=""
                                >
                                    <Image
                                        src={'/images/shape.webp'}
                                        className={`${isLoading && "sm:animate-spin-slow animate-spin-slower"}`}
                                        alt={'logo NextAI'}
                                        width={50}
                                        height={50}
                                    />
                                </button>
                            </div>

                            <div
                                className="text-sm text-gray-500 dark:text-gray-100">
                                <div className={'gap-2 flex flex-wrap items-center justify-center'}>
                                    {questions.map((question) => (
                                        <button
                                            key={question.id}
                                            type="button"
                                            className="rounded-full border
                  border-slate-200 bg-slate-50
                  px-2.5 py-1
                  transition-colors hover:bg-slate-100 hover:text-stone-900 dark:border-slate-600 dark:bg-gray-500
                  dark:hover:bg-gray-600"
                                            onClick={(_) => setQuery(question.description)}
                                        >
                                            {question.description}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={'space-y-5 px-4'}>
                            {error && (
                                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 p-2 text-center">
                    <Frown width={18}/>
                  </span>
                                    <span className="text-slate-700 dark:text-slate-100">
                    Sad news, the search has failed! Please try again.
                  </span>
                                </div>
                            )}
                            <div className={`${query ? 'visible' : 'invisible'} flex gap-6`}>
                <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 p-2 text-center dark:bg-slate-300`}
                >
                  <User width={18}/>{' '}
                </span>
                                <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-100">
                                    {query}
                                </p>
                            </div>
                            {completion && !error ? (
                                <>
                                    <AISearch message={completion}/>
                                </>
                            ) : null}
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
