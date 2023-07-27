'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useCompletion } from 'ai/react'
import { X, Loader, User, Frown, CornerDownLeft, Search, Wand } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
type RouterType = "APP" | "PAGES";



export function SearchDialog() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState<string>('')
  const [routerType, setRouterType] = React.useState<RouterType>("APP")

  const { complete, completion, isLoading, error } = useCompletion({
    api: '/api/vector-search', body: { routerType }
  })

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen(true)
      }

      if (e.key === 'Escape') {
        console.log('esc')
        handleModalToggle()
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  function handleModalToggle() {
    setOpen(!open)
    setQuery('')
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    void complete(query)
  }

  return (
    <>
<div className={"w-full"}>

          <form onSubmit={handleSubmit}>
            {/*<div className={"flex space-x-4"}>*/}
            {/*  <div className="flex items-center space-x-2">*/}
            {/*    <input onChange={()=> setRouterType("APP")} type={"radio"} value="APP" id="r1" checked={routerType === "APP"} />*/}
            {/*    <label htmlFor="r1">App Router</label>*/}
            {/*  </div>*/}
            {/*  <div className="flex items-center space-x-2">*/}
            {/*    <input onChange={()=> setRouterType("PAGES")} type={"radio"} value="PAGES" id="r2" checked={routerType === "PAGES"} />*/}
            {/*    <label htmlFor="r2">Pages Router</label>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="grid gap-4 py-4 text-slate-700">
              {query && (
                <div className="flex gap-4">
                  <span className="bg-slate-100 dark:bg-slate-300 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                    <User width={18} />{' '}
                  </span>
                  <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-100">{query}</p>
                </div>
              )}

              {isLoading && (
                <div className="animate-spin relative flex w-5 h-5 ml-2">
                  <Loader />
                </div>
              )}

              {error && (
                <div className="flex items-center gap-4">
                  <span className="bg-red-100 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                    <Frown width={18} />
                  </span>
                  <span className="text-slate-700 dark:text-slate-100">
                    Sad news, the search has failed! Please try again.
                  </span>
                </div>
              )}

              {completion && !error ? (
                <>
                <div className="flex items-center gap-4 dark:text-white">
                  <span className="bg-green-500 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                    <Wand width={18} className="text-white" />
                  </span>
                  <h3 className="font-semibold">Answer:</h3>

                </div>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  linkTarget="_blank"
                  className="prose dark:prose-dark"
                >
                  {completion}
                </ReactMarkdown>
                </>
              ) : null}

              <div className="relative flex justify-between border shadow-lg rounded-xl px-4 py-2 bg-white">
                <input
                  placeholder="Ask a question..."
                  name="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="col-span-3 border-none outline-none "
                ></input>
                <CornerDownLeft
                  className={`absolute top-3 right-5 h-4 w-4 text-gray-300 transition-opacity ${
                    query ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <Button type="submit" className="bg-blue-600 border-none">
                  Ask
                </Button>
              </div>
              {/*<div className="text-xs text-gray-500 dark:text-gray-100">*/}
              {/*  Or try:{' '}*/}
              {/*  <div className={"space-x-2"}>*/}
              {/*  <button*/}
              {/*    type="button"*/}
              {/*    className="px-1.5 py-0.5*/}
              {/*    bg-slate-50 dark:bg-gray-500*/}
              {/*    hover:bg-slate-100 dark:hover:bg-gray-600*/}
              {/*    rounded border border-slate-200 dark:border-slate-600*/}
              {/*    transition-colors"*/}
              {/*    onClick={(_) => setQuery('What is Next.JS?')}*/}
              {/*  >*/}
              {/*    What is Next.JS?*/}
              {/*  </button>*/}
              {/*  <button*/}
              {/*    type="button"*/}
              {/*    className="px-1.5 py-0.5*/}
              {/*    bg-slate-50 dark:bg-gray-500*/}
              {/*    hover:bg-slate-100 dark:hover:bg-gray-600*/}
              {/*    rounded border border-slate-200 dark:border-slate-600*/}
              {/*    transition-colors"*/}
              {/*    onClick={(_) => setQuery('How to start a server?')}*/}
              {/*  >*/}
              {/*    How to start a server?*/}
              {/*  </button>*/}
              {/*  <button*/}
              {/*    type="button"*/}
              {/*    className="px-1.5 py-0.5*/}
              {/*    bg-slate-50 dark:bg-gray-500*/}
              {/*    hover:bg-slate-100 dark:hover:bg-gray-600*/}
              {/*    rounded border border-slate-200 dark:border-slate-600*/}
              {/*    transition-colors"*/}
              {/*    onClick={(_) => setQuery('How to get the URL params?')}*/}
              {/*  >*/}
              {/*    How to get the URL params?*/}
              {/*  </button>*/}
              {/*  <button*/}
              {/*    type="button"*/}
              {/*    className="px-1.5 py-0.5*/}
              {/*    bg-slate-50 dark:bg-gray-500*/}
              {/*    hover:bg-slate-100 dark:hover:bg-gray-600*/}
              {/*    rounded border border-slate-200 dark:border-slate-600*/}
              {/*    transition-colors"*/}
              {/*    onClick={(_) => setQuery('Should I use SSR or CSR?')}*/}
              {/*  >*/}
              {/*    Should I use SSR or CSR?*/}
              {/*  </button>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>

          </form>
</div>
    </>
  )
}