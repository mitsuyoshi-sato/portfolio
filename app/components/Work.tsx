'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"


export type WorkType = {
  href: string
  date: string
  title: string
  caption: string
  src: string
}
export const Work = (props: WorkType) => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const d = linkRef.current
    const i = imageRef.current
    if (d && i) {
      d.onmousemove = (e) => {
        const r = d.getBoundingClientRect()
        const x = e.clientX - r.x
        const y = e.clientY - r.y
        i.style.display = 'block'
        i.style.transition = 'transform 0.2s'
        i.style.transform = `translate(${x}px, ${y}px)`
      }
      d.onmouseleave = () =>{
        i.style.display = 'none'
        i.style.opacity = '0'
      }
      d.onmouseenter = () => {
        i.style.opacity = '1'
      }
    }
  }, [])

  return (
      <Link
        href={props.href}
        ref={linkRef}
        className="relative mx-auto mt-6 block h-[200px] w-[400px] max-w-[600px] rounded-lg bg-[#e9e6e5] px-5 py-6 text-[#8f6a55] lg:w-auto lg:min-w-[400px]"
      >
        <p className="mt-3 opacity-70">{props.date}</p>
        <p className="mt-1 text-[18px]">{props.title}</p>
        <p className="mt-3 opacity-70">{props.caption}</p>
        <img
          ref={imageRef}
          src={props.src}
          className="pointer-events-none absolute left-[40px] top-[-260px] z-10 h-[250px] w-[400px] max-w-[400px] rounded-lg object-cover opacity-0"
        />
      </Link>
  )
}