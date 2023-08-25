'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Intro from '@/components/intro'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useLayoutEffect } from 'react'
import Load from '@/components/loading'
import Body from '@/components/body'

export default function Home() {

  useLayoutEffect ( () => {
    (
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll();
    }) ()
  }, [])


  return (
    <main className={styles.main}>
      <Load />
      <Intro />
      <Body />
    </main>
  )
}
