'use client';

import { ArrowLongRightIcon, ShareIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from 'next/link'
import { useState } from "react";
export default function Header(){
  const mbMenuList = [
    'Works',
    'About',
    'Blog',
    'Contact',
  ];
  const [open, setOpen] = useState(false)
  const handleMenuOpen = () => {
    setOpen(!open)
  }



  return(
    <>
      {/* pc版 */}
      <div className="cont fixed top-0 flex h-14 w-[100%] items-center justify-between">
        <div className="ml-5 flex items-center gap-3">
          <ShareIcon className="font-1 h-8 w-5"/>
          <div className="font-1 text-2xl tracking-widest">Mitsutoshi Sato</div>
        </div>
        <div className="hidden md:block">
          <ul className="mr-8 flex gap-12">
            <li className="tracking-widest hover:opacity-70"><Link href="#work">Works</Link></li>
            <li className="tracking-widest hover:opacity-70"><Link href="#about">About</Link></li>
            <li className="tracking-widest hover:opacity-70"><Link href="#blog">Blog</Link></li>
            <li className="tracking-widest hover:opacity-70"><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

      {/* スマホ版 */}
      <nav
        className={clsx(
          'mb:hidden z-10 block h-auto w-[500px] bg-slate-900 px-24 pb-16 pt-6 opacity-90 duration-700',
          {
            'fixed -top-[800px] right-0': !open,
            'fixed top-16 right-0': open,
          }
        )}
        id="menu"
      >
      <h1 className="vertical-text absolute left-0 top-4 text-[120px] font-bold text-gray-400 opacity-30">
        MENU
      </h1>
      <ul>
        {mbMenuList.map((menu, index) => {
          return (
          <li
            key={menu}
            className={clsx(
              'mt-4 flex cursor-pointer pb-3 text-xl font-bold text-gray-100 ',
              {
                'border-b-[1px] border-white/30':
                  index !== mbMenuList.length - 1,
                'duration-100 opacity-0': !open,
                'duration-[1500ms] opacity-1 delay-500': open,
              }
            )}
          >
            {menu}
            <ArrowLongRightIcon className="ml-auto w-8 text-gray-400" />
          </li>
          )
        })}
      </ul>
      </nav>
      <div
          className="relative mr-3 mt-5 block h-[20px] w-10 cursor-pointer md:hidden"
          id="hum"
          onClick={handleMenuOpen}
        >
          <div
            className={clsx(
              'absolute inset-y-0 right-0 my-auto h-[1.5px] origin-center border-gray-400 bg-gray-400 duration-300',
              {
                'w-full rotate-45 translate-y-0': open,
                'w-full translate-y-[-9.25px]': !open,
              }
            )}
          />
          <div
            className={clsx(
              'absolute inset-y-0 right-0 my-auto h-[1.5px] w-8 bg-gray-400 duration-1000',
              {
                'opacity-0': open,
              }
            )}
          />
          <div
            className={clsx(
              'absolute inset-y-0 right-0 my-auto h-[1.5px] origin-center bg-gray-400 duration-300',
              {
                'w-5 translate-y-[9.25px]': !open,
                'w-full -rotate-45 translate-y-0': open,
              }
            )}
          />
        </div>
      </div>
    </>
  )
}