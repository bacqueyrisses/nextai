'use client'

import * as React from 'react'
import {useRef} from 'react'
import {useCompletion} from 'ai/react'
import {Frown, User} from 'lucide-react'
import AISearch from '@/components/AISearch'
import {questions} from '@/config/questions'

type RouterType = "APP" | "PAGES";

export function SearchDialog() {
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState<string>('')
    const [routerType, setRouterType] = React.useState<RouterType>("APP")

    const {complete, completion, isLoading, error} = useCompletion({
        api: '/api/vector-search', body: {routerType}
    })
    const inputRef = useRef<HTMLInputElement>(null)


    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (!query) return inputRef.current?.focus()
        void complete(query)
    }

    return (
        <>
            <div className={"w-full overflow-y-auto"}>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-10 py-4 text-slate-700">
                        <div className={"space-y-4"}>
                            <div className="mt-5 flex rounded-3xl bg-white py-6 pr-2.5 shadow-xl shadow-blue-900/5">
                                <input
                                    placeholder="Ask a question about Next.JS..."
                                    name="search"
                                    ref={inputRef}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                ></input>
                                <button type="submit"
                                        className="bg-emerald-500 border-none outline-none rounded-2xl hover:bg-emerald-600 px-4 py-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className={`${isLoading && "animate-spin-slow"} lucide lucide-circle-dashed`}>
                                        <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/>
                                        <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/>
                                        <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/>
                                        <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/>
                                        <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/>
                                        <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/>
                                        <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"/>
                                        <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="text-xs text-gray-500 dark:text-gray-100 flex items-center justify-center">
                                <div className={"space-x-2"}>
                                    {questions.map(question => (
                                        <button
                                            key={question.id}
                                            type="button"
                                            className="px-2 py-1
                  bg-slate-50 dark:bg-gray-500
                  hover:bg-slate-100 dark:hover:bg-gray-600
                  rounded-md border border-slate-200 dark:border-slate-600
                  transition-colors"
                                            onClick={(_) => setQuery(question.description)}
                                        >
                                            {question.description}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={"space-y-5 px-4"}>
                            {error && (
                                <div className="flex items-center gap-4">
                  <span className="bg-red-100 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                    <Frown width={18}/>
                  </span>
                                    <span className="text-slate-700 dark:text-slate-100">
                    Sad news, the search has failed! Please try again.
                  </span>
                                </div>
                            )}
                            <div className={`${query ? "visible" : "invisible"} flex gap-6`}>
                      <span
                          className={`bg-slate-100 dark:bg-slate-300 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center`}>
                        <User width={18}/>{' '}
                      </span>
                                <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-100">{query}</p>
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