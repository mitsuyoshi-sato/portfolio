'use client';

import Link from 'next/link'
import { likes } from '../data/data'
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
        const x = e.clientX
        const y = e.clientY
      }
    }
  })

  return(
    <ul className="mt-6 grid grid-cols-2 gap-4">
    {likes.map((like:any) => {
      return (
        <li key={like.name}>
          <Link href={`${like.link}`}>
            <div ref={divRef} className="cont h-[200px] w-[500px] rounded-lg p-8">
              <p className="mt-3 opacity-70">{like.date}</p>
              <p className="mt-1 text-[18px]">{like.name}</p>
              <p className="mt-3 opacity-70">{like.comment}</p>
              <img
                ref={imgRef}
                src="tamago.jpg"
              />
            </div>
          </Link>
        </li>
      )
    })}
  </ul>
  )
}