import { ShareIcon } from "@heroicons/react/16/solid";
import Link from 'next/link'
export default function Header(){
  return(
    <>
      <div className="cont fixed top-0 flex h-14 w-[100%] items-center justify-between">
        <div className="ml-5 flex items-center gap-3">
          <ShareIcon className="font-1 h-8 w-5"/>
          <div className="font-1 text-2xl tracking-widest">Mitsutoshi Sato</div>
        </div>
        <ul className="mr-8 flex gap-12">
          <li className="tracking-widest hover:opacity-70"><Link href="#work">Works</Link></li>
          <li className="tracking-widest hover:opacity-70"><Link href="#about">About</Link></li>
          <li className="tracking-widest hover:opacity-70"><Link href="#blog">Blog</Link></li>
          <li className="tracking-widest hover:opacity-70"><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </>
  )
}