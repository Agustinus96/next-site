import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import style from "./style.module.css";
import { useLayoutEffect, useRef } from "react";

export default function Intro() {
  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=30opx",
        mark: true,
      },
    });
    timeline
      .from(background.current, { clipPath: `inset(0 50%)` })
      .to(introImage.current, { top: "100vh" }, 0);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: background.current,
      pin: true,
      start: "top -=300px",
      markers: true
    });
  }, []);

  return (
    <div className={style.introContainer}>
      <div
        data-scroll
        data-scroll-speed="0.5"
        ref={background}
        className={style.backgroundImage}
      >
        <Image
          src="/images/me-explain.jpg"
          fill="true"
          alt="agustinus consulting"
          priority="true"
        />
      </div>
      <div className={style.intro}>
        <div
          className={style.introImage}
        ></div>
        <h1 data-scroll data-scroll-speed="3">
          Welcome!
        </h1>
      </div>
      <div data-scroll data-scroll-speed="0.2" ref={introImage} className={style.cover}>      </div>
      <div className="style.footer"><h2>Footer</h2></div>
    </div>
  );
}
