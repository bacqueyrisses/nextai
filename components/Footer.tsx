import Link from 'next/link'

export default function Footer() {
  return (
    <Link
      href={'https://www.bacqueyrisses.dev/'}
      target={'_blank'}
      className={'mb-6 pt-6 text-center text-sm'}
    >
      ✦ Made with love by Enzo ✦
    </Link>
  )
}
