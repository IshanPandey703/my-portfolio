import { useEffect, useRef } from "react";
import "./LandingPage.css";
import { gsap } from "gsap"
import { CSSRulePlugin, CSSPlugin } from "gsap/all";
import bgimage from "../../Media/background-img.png"
gsap.registerPlugin(CSSPlugin, CSSRulePlugin)

export default function LandingPage() {
    const textref = useRef(null);
    useEffect(()=>{
        const target = CSSRulePlugin.getRule('.masked-text::before')
        // console.log(target)
        gsap.to(target,3, {opacity: 1})
    })

    return (
        <div className="Landing-div">
            <h1>
                Hi, I'm
            </h1>
            <h1 ref= {textref} className="masked-text">
                ISHAN PANDEY
            </h1>
            <h1>
                Develop|
            </h1>
        </div>
    );
}