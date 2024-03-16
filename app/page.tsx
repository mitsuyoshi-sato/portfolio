import Image from 'next/image'
import Link from 'next/link'
import { AcademicCapIcon } from '@heroicons/react/16/solid'
import Header from './components/Header'
import Mouse from './components/Mouse'


export default function Page() {
  return (
    <>
      <div className="relative overflow-hidden">
        <img src="pc.jpg" className="h-[600px] w-full object-cover"/>
        <div className="absolute inset-0 bg-black opacity-25"/>
        <div className="absolute left-[200px] top-[200px] text-[6.8vw] leading-[7vw] text-white/90 opacity-70">Design &<br/> Front-End<br/> Developer</div>
      </div>
      <div className="mx-auto w-[calc(100%-400px)]">
        <p className="mt-8 text-center text-[5vw] font-semibold">Works</p>
        <Mouse />
        <p className="mt-36 border-b-2 border-b-black/70 pb-4 text-6xl" id="about">About</p>
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
        <p className="mt-36 border-b-2 border-b-black pb-4 text-6xl" id="contact">Contact</p>
        <p className="ml-10 mt-10">ご依頼等、お気軽にお待ちしております！</p>
        <button className="ml-10 mt-4 flex gap-1 rounded-md border-2 border-black/70 px-1 py-2">
          <p>Send Mail</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </button>
      </div>
      <Header />
    </>
  )
}
