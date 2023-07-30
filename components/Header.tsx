import Image from 'next/image'

export default function Header() {
  return (
    <div className={"flex justify-center items-center font-medium w-full relative"}>
        <div className={"text-xl"}>Next AI</div>
      <div className="absolute inset-y-0 right-5">Next.JS docs</div>
    </div>
  )
}