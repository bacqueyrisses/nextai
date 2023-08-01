'use client'
import * as React from 'react'
import { Children, FC } from 'react'
import * as CopyToClipboard from 'react-copy-to-clipboard'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { monokaiCustomTheme } from './CodeBlock.utils'
// import { Button, IconCheck, IconCopy } from 'ui'

import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import ts from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript'
import csharp from 'react-syntax-highlighter/dist/cjs/languages/hljs/csharp'
import py from 'react-syntax-highlighter/dist/cjs/languages/hljs/python'
import sql from 'react-syntax-highlighter/dist/cjs/languages/hljs/sql'
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash'
import dart from 'react-syntax-highlighter/dist/cjs/languages/hljs/dart'
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json'
import kotlin from 'react-syntax-highlighter/dist/cjs/languages/hljs/kotlin'

import { useState } from 'react'
import { Copy, CopyCheck } from 'lucide-react'

// import { useTheme } from 'common/Providers'

export interface CodeBlockProps {
  title?: string
  language:
    | 'js'
    | 'jsx'
    | 'sql'
    | 'py'
    | 'bash'
    | 'ts'
    | 'dart'
    | 'json'
    | 'csharp'
    | 'kotlin'
  linesToHighlight?: number[]
  hideCopy?: boolean
  hideLineNumbers?: boolean
  className?: string
  value?: string
  children?: string
}

export const CodeBlock = ({
  title,
  language,
  linesToHighlight = [],
  className,
  value,
  children,
  hideCopy = false,
  hideLineNumbers = false,
}: CodeBlockProps) => {
  const isDarkMode = true
  const monokaiTheme = monokaiCustomTheme(isDarkMode)

  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  // Extract string when `children` has a single string node
  const childrenArray = Children.toArray(children)
  const [singleChild] = childrenArray.length === 1 ? childrenArray : []
  const singleString = typeof singleChild === 'string' ? singleChild : undefined

  let codeValue = value ?? singleString ?? children
  codeValue = codeValue?.trimEnd?.() ?? codeValue

  // check the length of the string inside the <code> tag
  // if it's fewer than 70 characters, add a white-space: pre so it doesn't wrap
  const shortCodeBlockClasses =
    typeof codeValue === 'string' && codeValue.length < 70
      ? 'short-inline-codeblock'
      : ''

  let lang = language
    ? language
    : className
    ? className.replace('language-', '')
    : 'js'
  // force jsx to be js highlighted
  if (lang === 'jsx') lang = 'js'
  SyntaxHighlighter.registerLanguage('js', js)
  SyntaxHighlighter.registerLanguage('ts', ts)
  SyntaxHighlighter.registerLanguage('py', py)
  SyntaxHighlighter.registerLanguage('sql', sql)
  SyntaxHighlighter.registerLanguage('bash', bash)
  SyntaxHighlighter.registerLanguage('dart', dart)
  SyntaxHighlighter.registerLanguage('csharp', csharp)
  SyntaxHighlighter.registerLanguage('json', json)
  SyntaxHighlighter.registerLanguage('kotlin', kotlin)

  const large = false
  // don't show line numbers if bash == lang
  if (lang !== 'bash') hideLineNumbers = true
  const showLineNumbers = !hideLineNumbers

  return (
    <>
      {title && (
        <div className="bg-scale-300 border-scale-500 text-blue-1100 rounded-t-md border-b px-4 py-2 font-sans">
          {title.replace(/%20/g, ' ')}
        </div>
      )}
      {className ? (
        <div className="relative max-w-full overflow-auto md:max-w-none">
          {/* @ts-ignore */}
          <SyntaxHighlighter
            language={lang}
            wrapLines={true}
            // @ts-ignore
            style={monokaiTheme}
            className={[
              'code-block !bg-scale-300 !my-0 w-full border px-2 py-4 sm:px-4',
              `${!title ? '!rounded-md' : '!rounded-b-md !rounded-t-none'}`,
              `${!showLineNumbers ? 'pl-6' : ''}`,
              className,
            ].join(' ')}
            customStyle={{
              fontSize: large ? 18 : 15,
              lineHeight: large ? 1.6 : 1.5,
            }}
            showLineNumbers={showLineNumbers}
            lineProps={(lineNumber) => {
              if (linesToHighlight.includes(lineNumber)) {
                return {
                  style: {
                    display: 'block',
                    backgroundColor: 'var(--colors-scale6)',
                  },
                }
              }
              return {}
            }}
            lineNumberContainerStyle={{
              paddingTop: '128px',
            }}
            lineNumberStyle={{
              minWidth: '44px',
              paddingLeft: '4px',
              paddingRight: '4px',
              marginRight: '12px',
              color: '#828282',
              textAlign: 'center',
              fontSize: large ? 14 : 12,
              paddingTop: '4px',
              paddingBottom: '4px',
            }}
          >
            {codeValue}
          </SyntaxHighlighter>
          {!hideCopy && (value || children) && className ? (
            <div
              className={[
                'absolute right-2',
                `${isDarkMode ? 'dark' : ''}`,
                `${!title ? 'top-2' : 'top-[3.25rem]'}`,
              ].join(' ')}
            >
              {/* //
              @ts-ignore */}
              <CopyToClipboard text={value || children}>
                <button
                  // type="default"
                  onClick={(e) => handleCopy(e)}
                >
                  {copied ? (
                    <CopyCheck className={'mr-2 mt-2 text-white'} size={18} />
                  ) : (
                    <Copy
                      className={
                        'mr-2 mt-2 text-stone-400 hover:text-stone-200'
                      }
                      size={18}
                    />
                  )}
                </button>
              </CopyToClipboard>
            </div>
          ) : null}
        </div>
      ) : (
        <code className={shortCodeBlockClasses}>{value || children}</code>
      )}
    </>
  )
}
