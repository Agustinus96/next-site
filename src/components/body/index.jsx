import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import style from "./style.module.css"
import { useLayoutEffect, useRef } from "react";

const contents = ["I am Agustinus", "A trilingual translator", "🇯🇵Japanese, 🇮🇩Indonesian, 🇬🇧English", "Experienced corporate planner"]

export default function Body () {

    const bodyProject = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
          trigger: bodyProject.current,
          pin: true,
          start: "top -=80px",
          end: "bottom+=600px bottom",
          markers: true
        });
      }, []);

    return (
        <div ref={bodyProject} className={style.bodyProject}>
            <div className={style.introduction}>
                <div className={style.introList}>
                {
                    contents.map((content, index) => {
                        return <AnimatedText key={index} className={style.bodyContents}>{content}</AnimatedText>
                    })
                }
                </div>
            </div>
        </div>
    )
}

function AnimatedText({children}) {
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "-=500vw botton",
                end: "bottom+=600px bottom",
            }, 
            opacity: 0,
            left: "-600px",
            ease: "power3.Out"
        })
    }, [])


    return <p ref={text}>{children}</p>
}