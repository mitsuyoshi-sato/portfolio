'use client';

import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(options:any) {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          setIntersecting(entry.isIntersecting);
      },
      options
    );
//要素が存在する場合、監視を始める。
    if(ref.current) {
      observer.observe(ref.current);
    }
//コンポーネントがアンマウントされる時に監視を解除する。
    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
    };
//oprionsの要素が変更される時にのみuseEffectが再実行される。
  }, [options]);

  return[ref, isIntersecting];
}