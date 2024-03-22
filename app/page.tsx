import { RocketLaunchIcon, ShareIcon } from '@heroicons/react/16/solid'
import Header from './components/Header'
import PcImage from './components/PcImage'
import { Work, WorkType } from './components/Work';




const works: WorkType[] = [
  {date:'April 2022', title:'金の卵株式会社', caption:'2022年4月、金の卵株式会社のホームページを作成しました。Webサイト作成をメインにやっております。', href:'https://tamago-project.vercel.app/', src:'tamago.jpg'},
  {date:'Coming Soon...', title:'Port Forio Tool', caption:'誰でも簡単にポートフォリオが作成できる便利なツールを作成しております。近日公開予定。', href:'/', src:'coming.jpg'},
]


export default function Page() {
  return (
    <>
      <PcImage />
      <p id="work" className="mx-auto mt-24 w-[165px] min-w-[165px] border-b-2 border-b-[#aa8875] pb-2 text-6xl lg:mt-36 lg:w-[80%]">Works</p>
        <div className="mx-auto mt-14 w-[80%] lg:flex lg:space-x-[5%]">
          {works.map((l) => (
            <Work key={l.href} date={l.date} title={l.title} caption={l.caption} href={l.href} src={l.src}/>
          ))}
        </div>
        <p className="mx-auto mt-24 w-[160px] min-w-[160px] border-b-2 border-b-[#aa8875] pb-2 text-6xl lg:mt-36 lg:w-[80%]">About</p>
        <div id="about" className="mx-auto mt-12 w-[80%] leading-8 lg:flex">
          <p>
            【経歴】<br/>
            ・2021年から個人事業主として活動開始。<br/>
            ・2022年からニッタスタジオ株式会社に勤務。<br/>
            ・2023年から副業の活動を開始。
          </p>
          <div className="lg:ml-[84px]">
            <p className="mt-10 lg:mt-0">
            【現在の業務内容】<br/>
              ・Next.js (Rreact) を使用したwebサイト制作。<br/>
              ・HTML CSS JavaScriptを使用したwebサイト制作。
            </p>
            <p className="mt-10 lg:mt-6">
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
        <div className="cont mt-24 h-auto w-full pt-14">
          <p className="mx-auto mt-9 w-[200px] min-w-[200px] border-b-2 border-b-[#aa8875] pb-2 text-6xl lg:w-[80%]">Contact</p>
          <div className="mx-auto mt-6 h-24 w-[80%] items-center gap-1 lg:mt-0 lg:flex lg:justify-start">
            <button className="mx-auto flex gap-1 rounded-md border-2 border-[#aa8875] px-1 py-2 duration-300 hover:bg-[#aa8875] hover:text-[#282420] lg:mx-0">
              <p>Send Mail</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </button>
            <div className="hidden lg:block">⬅︎</div>
            <p className="mt-6 text-center lg:mt-0 lg:text-start">ご依頼等、お気軽にお待ちしております！</p>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 pb-9">
            <RocketLaunchIcon className="h-8 w-5 text-white/80"/>
            <div id="contact" className="text-2xl tracking-widest text-white/80">Mitsutoshi Sato</div>
          </div>
        </div>
      <Header />
    </>
  )
}
