'use client'
import * as React from 'react'
import { CodeBlock } from '@/components/ui/components/CodeBlock/CodeBlock'
import Image from 'next/image'

export const markdownComponents = {
  mono: (props: any) => <code className="text-sm">{props.children}</code>,
  code: (props: any) => <CodeBlock {...props} />,
  a: (props: { target: string; href: string; children: string }) => (
    <a
      style={{
        textDecoration: 'underline',
      }}
      target={props.target}
      href={props.href}
    >
      {props.children}
    </a>
  ),
  img: (props: any) => {
    return (
      <span className={['next-image--dynamic-fill'].join(' ')}>
        <Image
          {...props}
          className={['rounded-md border'].join(' ')}
          layout="fill"
          alt={'code snippet next AI'}
        />
      </span>
    )
  },
}
