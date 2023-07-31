'use client'

import * as React from 'react'
import { useRef } from 'react'
import { useCompletion } from 'ai/react'
import { Frown, User } from 'lucide-react'
import AISearch from '@/components/AISearch'
import { questions } from '@/config/questions'
import Image from 'next/image'

export function SearchDialog() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState<string>('')

  const { complete, completion, isLoading, error } = useCompletion({
    api: '/api/vector-search',
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!query) return inputRef.current?.focus()
    void complete(query)
  }

  const handleQuestion = (question: string) => {
    if (!question) return inputRef.current?.focus()
    setQuery(question)
    void complete(question)
  }

  return (
    <>
      <div className={'w-full overflow-y-auto'}>
        <form onSubmit={handleSubmit}>
          <div className="space-y-10 pt-2 text-slate-700 sm:pt-4">
            <div className={'space-y-7'}>
              <div className="mt-2 flex rounded-3xl bg-white py-2 pr-4 shadow-xl shadow-blue-900/5 sm:py-4">
                <input
                  placeholder="Ask a question about Next.JS..."
                  name="search"
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-auto bg-transparent pl-6 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                ></input>
                <button type="submit" className="">
                  <img
                    src="https://em-content.zobj.net/thumbs/120/apple/354/sparkles_2728.webp"
                    alt="Crystal Ball"
                    className={`${isLoading ? 'hidden' : 'inline'}`}
                    width="28"
                    height="28"
                  />
                  <img
                    src="https://camo.envatousercontent.com/c8b4a1fb2365661771e5a787902f5dedabb8cb2d/68747470733a2f2f692e696d6775722e636f6d2f33326c4f6e326c2e676966"
                    alt="Crystal Ball"
                    className={`${isLoading ? 'inline' : 'hidden'}`}
                    width="28"
                    height="28"
                  />
                  {/*<Image*/}
                  {/*  src={'/images/shape.webp'}*/}
                  {/*  className={`${*/}
                  {/*    isLoading && 'animate-spin-slower sm:animate-spin-slow'*/}
                  {/*  }`}*/}
                  {/*  alt={'logo NextAI'}*/}
                  {/*  width={50}*/}
                  {/*  height={50}*/}
                  {/*/>*/}
                </button>
              </div>

              {!query && (
                <div className="text-sm text-gray-600">
                  <div
                    className={
                      'flex flex-wrap items-center justify-center gap-2'
                    }
                  >
                    {questions.map((question) => (
                      <div
                        key={question.id}
                        className={
                          'inline-flex w-full items-center justify-center sm:inline sm:w-auto'
                        }
                      >
                        <button
                          type="button"
                          className="rounded-full border
                  border-slate-200 bg-slate-50
                  px-2.5 py-1
                  text-center transition-colors hover:bg-slate-100 hover:text-stone-900"
                          onClick={() => handleQuestion(question.description)}
                        >
                          {question.description}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div className={'space-y-5'}>
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 p-2 text-center">
                    <Frown width={18} />
                  </span>
                  <span className="text-slate-700 dark:text-slate-100">
                    Sad news, the search has failed! Please try again.
                  </span>
                </div>
              </div>
            )}
            {completion && !error ? (
              <div className={'space-y-5'}>
                <AISearch message={completion} />
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </>
  )
}
