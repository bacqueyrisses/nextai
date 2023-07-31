import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { markdownComponents } from '@/components/ui/components/markdown'
import { Wand } from 'lucide-react'
import * as React from 'react'

interface AISearchI {
  message: string
}

export default function AISearch({ message }: AISearchI) {
  return (
    <div key={12} className="mb-6 [overflow-anchor:none]">
      <div className="mb-6 flex gap-6 [overflow-anchor:none]">
        {/*<AiIconChat />*/}
        <>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 p-2 text-center">
            <Wand width={18} className="text-white" />
          </span>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
            linkTarget="_blank"
            className="prose dark:prose-dark space-y-4"
            // transformLinkUri={(href) => {
            //   console.log(href)
            //   const supabaseUrl = new URL('www.bacqueyrisses.dev')
            //   const linkUrl = new URL(href, 'https://www.bacqueyrisses.dev')
            //
            //   if (linkUrl.origin === supabaseUrl.origin) {
            //     return linkUrl.toString()
            //   }
            //
            //   return "www.bacqueyrisses.dev"
            // }}
          >
            {message}
          </ReactMarkdown>
        </>
      </div>
    </div>
  )
}
