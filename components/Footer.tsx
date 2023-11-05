import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={'mb-6 flex items-center justify-center pt-6 text-sm'}>
      <Link href={'https://www.bacqueyrisses.dev/'} target={'_blank'}>
        ✦ Made with love by Enzo ✦
      </Link>
    </div>
  )
}
