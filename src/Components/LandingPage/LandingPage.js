import { useEffect, useRef } from "react";
import "./LandingPage.css";
import { gsap } from "gsap"
import { CSSRulePlugin, CSSPlugin } from "gsap/all";
import Typewriter from "typewriter-effect";
gsap.registerPlugin(CSSPlugin, CSSRulePlugin)

export default function LandingPage() {
    const el = useRef()
    const q = gsap.utils.selector(el)
    const tl = useRef()
    useEffect(()=>{
        tl.current = gsap.timeline({repeat: -1,defaults: {duration: 5}})
                    .to(q(".masked-text-1"),{backgroundPosition: "50% 99%"})
                    .to(q(".masked-text-2"), {backgroundPosition: "50% 99%"})
                    .to(q(".masked-text-3"), {backgroundPosition: "50% 99%"})
    })

    return (
        <div ref = {el} className="Landing-div">
            <h1 className="masked-text-1">
                Hi, I'm
            </h1>
            <h1 className="masked-text-2">
                ISHAN PANDEY
            </h1>
            <h1 className="masked-text-3">
            <Typewriter
							options={{
								strings: ["Programmer", "Developer", "Learner"],
								autoStart: true,
								loop: true,
							}}
						/>
            </h1>
        </div>
    );
}