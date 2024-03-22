'use client';

import { useEffect, useRef, useState } from "react";

export default function PcImage() {
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const i = imageRef.current
    if (i) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting){
            i.style.opacity = '1'
            i.style.transform = 'scale(1.0)'
            i.style.transition = 'all 1.5s ease-in-out'
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.3,
        }
      )
      observer.observe(i)
    }
  }, [])


  return(
    <>
      <div className="relative overflow-hidden">
        <img
          style={{transform: 'scale(1.1)', opacity: '0'}}
          ref={imageRef}
          src="pc.jpg" className="h-[600px] w-full object-cover"/>
        <div className="absolute inset-0 bg-black opacity-25"/>
        <div className="absolute left-[20%] top-[200px] text-[70px] leading-[72px] text-white/90 opacity-70 lg:text-[6.8vw] lg:leading-[7vw]">Design &<br/> Front-End<br/> Developer</div>
      </div>
    </>
    
  )
}