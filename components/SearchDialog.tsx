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
import AISearch from '@/components/AISearch'
import { CircleDotDashed } from 'lucide'
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
<div className={"sm:w-1/2 w-full overflow-y-auto"}>

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
              <div className="relative flex justify-between border rounded-2xl pl-6 pr-4 py-2 bg-white focus:bg-white">
                <input
                  placeholder="Ask a question about Next.JS..."
                  name="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border-none outline-none w-2/3 visited:bg-white"
                ></input>
                <Button type="submit" className="bg-emerald-500 border-none rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`${isLoading && "animate-spin-slow"} lucide lucide-circle-dashed`}><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"/><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"/></svg>                </Button>
              </div>

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
              <div className={`${query ? "visible" : "invisible"} flex gap-6 px-4`}>
                      <span className={`bg-slate-100 dark:bg-slate-300 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center`}>
                        <User width={18} />{' '}
                      </span>
                <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-100">{query}</p>
              </div>
              {completion && !error ? (
                <>
                  <AISearch message={completion}/>
                {/*<div className="flex items-center gap-4 dark:text-white">*/}
                {/*  <span className="bg-green-500 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">*/}
                {/*    <Wand width={18} className="text-white" />*/}
                {/*  </span>*/}
                {/*  <h3 className="font-semibold">Answer:</h3>*/}

                {/*</div>*/}
                {/*<ReactMarkdown*/}
                {/*  remarkPlugins={[remarkGfm]}*/}
                {/*  linkTarget="_blank"*/}
                {/*  className="prose dark:prose-dark"*/}
                {/*>*/}
                {/*  {completion}*/}
                {/*</ReactMarkdown>*/}
                </>
              ) : null}


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