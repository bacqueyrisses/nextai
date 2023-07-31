'use client'

import {useId, useRef, useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {motion, MotionConfig, useReducedMotion} from 'framer-motion'
import logo from "@/public/images/logo.webp"

import {Container} from '@/components/Container'
import {GridPattern} from '@/components/GridPattern'
import Image from 'next/image'
import Footer from "@/components/Footer";

function Header() {
    return (
        <Container>
            <div className="flex items-center justify-between -ml-4">
                <Link href="/" aria-label="Home">
                    <Image
                        src={logo}
                        alt={'logo NextAI'}
                        width={80}
                        height={80}
                    />
                </Link>
                <div className="flex items-center gap-x-8">
                    <a
                        className="inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                        href="https://nextjs.org/docs"
                        rel={'noreferrer'}
                        target={'_blank'}
                    >
                        <span className="relative top-px">Next.JS Docs</span>
                    </a>
                </div>
            </div>
        </Container>
    )
}

function RootLayoutInner({children}: {
    children: React.ReactNode
}) {
    let panelId = useId()
    let [expanded, setExpanded] = useState(false)
    let openRef = useRef()
    let closeRef = useRef()
    let navRef = useRef()
    let shouldReduceMotion = useReducedMotion()

    return (
        <MotionConfig transition={shouldReduceMotion ? {duration: 0} : undefined}>
            <header>
                <div
                    className="absolute left-0 right-0 top-2 z-40 sm:p-5 py-5 sm:pt-14"
                >
                    <Header

                    />
                </div>

                <motion.div
                    layout
                    id={panelId}
                    style={{height: expanded ? 'auto' : '0.5rem'}}
                    className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
                    aria-hidden={expanded ? undefined : 'true'}
                >
                    <motion.div layout className="bg-neutral-800">
                        <div className="bg-neutral-950 pb-16 pt-5 sm:pt-14">
                            <Header

                            />
                        </div>
                        <div
                            className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
                            <Container>
                                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                                    <div>
                                        <h2 className="font-display text-base font-semibold text-white">
                                            Our offices
                                        </h2>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </motion.div>
                </motion.div>
            </header>

            <motion.div
                layout
                style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                className="relative flex flex-auto overflow-hidden bg-white pt-14"
            >
                <motion.div
                    layout
                    className="relative isolate flex w-full flex-col pt-9"
                >
                    <GridPattern
                        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                        yOffset={-96}
                        interactive
                    />

                    <main className="w-full flex-auto">{children}</main>

                    <Footer/>
                </motion.div>
            </motion.div>
        </MotionConfig>
    )
}

export function RootLayout({children}: { children: React.ReactNode }) {
    let pathname = usePathname()
    return <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
}
