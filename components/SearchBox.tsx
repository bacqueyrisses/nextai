'use client'

import * as React from 'react'
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useCompletion } from 'ai/react'
import { RotateCcw, X } from 'lucide-react'
import { questions } from '@/config/questions'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { markdownComponents } from '@/components/ui/MarkdownComponents'
import Image from 'next/image'

const CONTACT_EMAIL = 'bacqueyrisses@proton.me'
const SUBJECT = encodeURIComponent('🎉 Inquery to test NextAI');

export default function SearchBox() {
  const [query, setQuery] = useState<string>('')
  const [displayedQuestions, setDisplayedQuestions] = useState<boolean>(true)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { complete, completion, isLoading, stop } = useCompletion({
    api: '/api/vector-search',
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
  }, [inputRef])

  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeModal, isModalOpen])

  useEffect(() => {
    if (!isModalOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isModalOpen])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    stop()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return inputRef.current?.focus()
    setQuery(trimmedQuery)
    setDisplayedQuestions(false)
    setIsModalOpen(true)
    void complete(trimmedQuery)
  }

  const hideMobileKeyboardOnReturn = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const key = e.key
    if (key === 'Enter' || key === '13') {
      const trimmedQuery = query.trim()
      if (!trimmedQuery) return inputRef.current?.focus()
      e.currentTarget.blur()
      stop()
      setQuery(trimmedQuery)
      setDisplayedQuestions(false)
      setIsModalOpen(true)
      void complete(trimmedQuery)
    }
  }

  const handleQuestion = (question: string) => {
    stop()
    const trimmedQuestion = question.trim()
    if (!trimmedQuestion) return inputRef.current?.focus()
    setQuery(trimmedQuestion)
    setDisplayedQuestions(false)
    setIsModalOpen(true)
    void complete(trimmedQuestion)
  }

  const handleClean: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    stop()
    setDisplayedQuestions(true)
    setQuery('')
    inputRef.current?.focus()
  }

  const trimmedQuery = query.trim()

  return (
    <>
      <div className={'w-full overflow-y-auto'}>
        <form
          onSubmit={handleSubmit}
          className={'min-h-[256px] sm:min-h-[160px]'}
        >
          <div className="mx-4 space-y-5 pt-2 text-slate-700 sm:space-y-10 sm:pt-4">
            <div className={'space-y-7'}>
              <div className="ring-offset-3 group mt-2 flex cursor-text overflow-visible rounded-3xl bg-white shadow-xl shadow-blue-900/5 transition-shadow focus-within:ring-2 focus-within:ring-slate-300 hover:shadow-slate-200">
                <input
                  placeholder="Ask a question about Next.JS..."
                  name="search"
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={hideMobileKeyboardOnReturn}
                  className="group block h-full w-full bg-transparent py-2 pl-6 pr-4 text-base text-slate-900 placeholder:text-[0.8rem] placeholder:text-slate-400 focus:outline-none sm:py-4 sm:placeholder:text-base"
                />
                <button type="submit" className="mr-6">
                  <Image
                    src="https://em-content.zobj.net/thumbs/120/apple/354/sparkles_2728.webp"
                    alt="Sparkles emoji"
                    className={`${isLoading ? 'hidden' : 'inline'}`}
                    width="28"
                    height="28"
                  />
                  <Image
                    src="https://em-content.zobj.net/source/telegram/358/sparkles_2728.webp"
                    alt="Sparkles telemoji"
                    className={`${isLoading ? 'inline' : 'hidden'}`}
                    width="28"
                    height="28"
                  />
                </button>
              </div>

              {(!query || displayedQuestions) && (
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
                  border-slate-200/60 bg-slate-50
                  px-4 py-1
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

            {completion && !displayedQuestions ? (
              <div>
                <div className="mb-6 [overflow-anchor:none]">
                  <div className="mb-6 flex flex-col items-center gap-6 [overflow-anchor:none] sm:flex-row sm:items-start">
                    <>
                      <button
                        onClick={handleClean}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 p-2 text-center hover:bg-emerald-400"
                      >
                        <RotateCcw width={18} className="text-white" />
                      </button>
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                        linkTarget="_blank"
                        className="prose dark:prose-dark max-w-full space-y-4"
                        transformLinkUri={(href) => {
                          const nextUrl = new URL('https://nextjs.org')
                          const linkUrl = new URL(href, 'https://nextjs.org')

                          if (linkUrl.origin === nextUrl.origin) {
                            return linkUrl.toString()
                          }

                          return href
                        }}
                      >
                        {completion}
                      </ReactMarkdown>
                    </>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </form>
      </div>

      {isModalOpen && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center px-4 py-10">
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white p-8 text-slate-700 shadow-2xl shadow-blue-900/20">
            <div className="absolute right-4 top-4">
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="mt-8 space-y-4 text-center">
              <h2 className="text-2xl font-semibold text-slate-900">
                🎉 Available on demand
              </h2>
              <p className="text-base text-slate-600">
                NextAI is currently available on demand due to API costs.
                Reach out by email to get access.
              </p>
              <a

                href={`mailto:${CONTACT_EMAIL}?subject=${SUBJECT}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-6 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"

              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
