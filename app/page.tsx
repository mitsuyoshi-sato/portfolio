import Image from 'next/image'
import Link from 'next/link'
import { likes } from './likes/data'

export default function Page() {
  return (
    <>
      <header className="flex font-bold">
        <h1 className="fixed border-b-2 border-b-black/70 text-lg">Mitsutoshi Sato</h1>
        <ul className="fixed right-16 top-20 ml-auto flex gap-6">
          <li className="border-b-2 border-b-black/70 hover:opacity-70"><Link href="#work">Works</Link></li>
          <li className="border-b-2 border-b-black/70 hover:opacity-70"><Link href="#about">About</Link></li>
          <li className="border-b-2 border-b-black/70 hover:opacity-70"><Link href="#contact">Contact</Link></li>
        </ul>
      </header>
      <main>
        <h1 className="mt-40 text-7xl leading-[88px]">Design &<br/> Front-End<br/> Developer</h1>
        <div id="work"></div>
        <ul className="mt-28 grid grid-cols-2 gap-16">
          {likes.map((like) => {
            return (
              <li key={like.name}>
                <Link href={`${like.link}`}>
                    <div className="rounded-2xl bg-stone-200 px-6 py-8">
                      <p className="  text-4xl">{like.name}</p>
                      <p className="ml-28 mt-8 text-lg">{like.comment}</p>
                    </div>
                </Link>
              </li>
            )
          })}
        </ul>
        <h2 className="mt-36 border-b-2 border-b-black/70 pb-4 text-6xl" id="about">About</h2>
        <div className="mt-12 flex leading-8">
          <p className="ml-10">
            【経歴】<br/>
            ・2021年から個人事業主として活動開始。<br/>
            ・2022年からニッタスタジオ株式会社に勤務。<br/>
            ・2023年から副業の活動を開始。
          </p>
          <div className="ml-[84px]">
            <p>
            【現在の業務内容】<br/>
              ・Next.js (Rreact) を使用したwebサイト制作。<br/>
              ・HTML CSS JavaScriptを使用したwebサイト制作。
            </p>
            <p className="mt-6">
            【使用言語】<br/>
              ・HTML
              ・CSS
              ・PHP
              ・Javascript
              ・Figma
              ・React
              ・Next.js
            </p>
          </div>
        </div>
        <h2 className="mt-36 border-b-2 border-b-black pb-4 text-6xl" id="contact">Contact</h2>
          <p className="ml-10 mt-10">ご依頼等、お気軽にお待ちしております！</p>
          <button className="ml-10 mt-4 flex gap-1 rounded-md border-2 border-black/70 px-1 py-2">
            <p>Send Mail</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </button>
      </main>
    </>
  )
}
