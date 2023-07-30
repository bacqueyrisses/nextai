import Image from 'next/image'

export default function Header() {
  return (
    <div className={"flex justify-center items-center font-medium w-full relative"}>
        <div className={"text-xl"}>Next AI</div>
      <a target={"_blank"} href={"https://nextjs.org/docs"} className="absolute inset-y-0 sm:right-5 right-1">Next.JS docs</a>
    </div>
  )
}