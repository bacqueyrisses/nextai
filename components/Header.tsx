import Image from 'next/image'

export default function Header() {
  return (
    <div className={"flex justify-between items-center space-x-4 font-medium"}>
      <div>
      <div className={"flex items-center justify-center"}>
      <Image className={"filter-white"} src={"/images/flash-white.svg"} alt={"logo nextai"} width={30} height={30}/>
      <div className={"text-white text-2xl"}>NextAI</div>
      </div>
      </div>
      <div className={"text-white text-lg flex gap-4 items-center"}>
        <div  className={"rounded-full w-8 h-8 bg-white flex items-center justify-center"}><svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          </div>
        Next.JS Doc
      </div>
    </div>
  )
}