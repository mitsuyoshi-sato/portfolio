'use client';

import Link from 'next/link'
import { useEffect, useRef } from 'react';
import clsx from 'clsx';


export default function Mouse() {
  const divRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const d = divRef.current
    const i = imgRef.current
    if (d && i) {
      d.onmousemove = (e) => {
        // const r = d.getBoundingClientRect()
        const x = e.clientX
        const y = e.clientY
        i.style.display = 'block'
        i.style.transform = `translate(${x}px, ${y}px)`
      }
      d.onmouseleave = () =>{
        i.style.display = 'none'
      }
    }
  }, [])

  return(
    <ul className="mt-6 grid grid-cols-2 gap-4">
      <li>
        <Link href="https://tamago-project.vercel.app/">
          <div ref={divRef} className="cont h-[200px] w-[500px] rounded-lg p-8">
            <p className="mt-3 opacity-70">April 2022</p>
            <p className="mt-1 text-[18px]">金の卵株式会社</p>
            <p className="mt-3 opacity-70">2022年4月、金の卵株式会社のホームページを作成しました。</p>
            <img
              ref={imgRef}
              src="tamago.jpg"
              className="absolute left-[-200px] top-[-125px] hidden h-[250px] w-[400px] rounded-lg"
            />
          </div>
        </Link>
      </li>
      <li>
        <Link href="">
          <div ref={divRef} className="cont h-[200px] w-[500px] rounded-lg p-8">
            <p className="mt-3 opacity-70">Coming Soon...</p>
            <p className="mt-1 text-[18px]">Port Forio Tool</p>
            <p className="mt-3 opacity-70">誰でも簡単にポートフォリオが作成できる便利なツールを作成しております。近日公開予定。</p>
            <img
              ref={imgRef}
              src="coming.jpg"
              className="absolute left-[-200px] top-[-125px] hidden h-[250px] w-[400px] rounded-lg object-cover"
            />
          </div>
        </Link>
      </li>
    </ul>
  )
}