import { useEffect, useState } from "react";
import "./styles/homeStyle.css";

function Home() {
    const [focused, setFocused] = useState(null);

    useEffect(() => {
        document.addEventListener("touchmove", preventBehavior, { passive: false });
        window.addEventListener('resize', appHeight);
        appHeight();
    }, []);

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }

    function preventBehavior(e) {
        if (document.getElementById("mainFooter").style.top !== "12px") {
            e.preventDefault();
        }
    };

    function openPage() {
        if (document.getElementById("mainFooter").style.top === "12px") {
            // page close
            setFocused(null);
            document.getElementById("mainFooter").style.top = "calc(var(--app-height) - 76px)";
            setTimeout(() => {
                document.getElementById("homeSlide").style.transform = "scaleY(0)";
            }, 40);
            document.getElementById("upBtn").style.transform = "rotate(0deg)";
            document.getElementById("itemArea").style.opacity = "0%";
        } else {
            // page open
            document.getElementById("mainFooter").style.top = "12px";
            document.getElementById("homeSlide").style.transform = "scaleY(1)";
            document.getElementById("upBtn").style.transform = "rotate(180deg)";
            setTimeout(() => {
                document.getElementById("itemArea").style.opacity = "100%";
            }, 450);
        }
    }

    useEffect(() => {
        if (focused) {

        }
    }, [focused]);

    return (
        <div>
            <div id="homeArea">

            </div>
            <div id="mainFooter" onClick={() => openPage()}>
                <img id="profilePic" src="https://pbs.twimg.com/profile_images/1726565027120066560/0Y_7_KGF_400x400.jpg"></img>
                <div id="footTitle">
                    ENVYHOSE
                </div>
                <div id="upBtnArea" >
                    <svg id="upBtn" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </div>

            <div id="homeSlide">

                {focused !== null ?
                    <div id="itemPage">

                    </div>
                    :

                    <div id="itemArea">

                        <div id="block">

                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Home;
