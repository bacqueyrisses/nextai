import Link from 'next/link'

export default function Footer() {
  return (
    <div className={'mb-6 pt-6 text-center text-sm'}>
      <Link href={'https://www.bacqueyrisses.dev/'} target={'_blank'}>
        ✦ Made with love by Enzo ✦
      </Link>
    </div>
  )
}
