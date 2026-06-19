import Image from 'next/image'

export default function Header() {
  return (
    <>
    <header className="flex items-center justify-between p-4 bg-[#1c1a1a] text-white">
        <div className="flex items-center  gap-2 ml-[100px]">
            <Image src="/images/lib-logo.svg" alt="Open Library Logo" width={152} height={152} />
        </div>
        <div className="flex justify-end gap-[10px]">
            <span className="hover:cursor-pointer"> Donate❤️</span>
            <span className="hover:cursor-pointer mr-[80px]">English (En) ▼</span>
        </div>
    </header>
    </>
  )
}
