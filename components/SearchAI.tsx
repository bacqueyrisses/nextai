import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { markdownComponents } from '@/components/ui/components/markdown'
import { Wand } from 'lucide-react'
import * as React from 'react'

interface AISearchI {
  message: string
}

export default function SearchAI({ message }: AISearchI) {
  return (
    <div key={12} className="mb-6 [overflow-anchor:none]">
      <div className="mb-6 flex flex-col items-center gap-4 [overflow-anchor:none] sm:flex-row sm:items-start sm:gap-6">
        <>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 p-2 text-center">
            <Wand width={18} className="text-white" />
          </span>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
            linkTarget="_blank"
            className="prose dark:prose-dark max-w-full space-y-4"
          >
            {message}
          </ReactMarkdown>
        </>
      </div>
    </div>
  )
}
