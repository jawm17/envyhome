import { useEffect, useState } from "react";
import venue from "../assets/venue.png";
import nvus from "../assets/nvus.jpg";
import ethergames from "../assets/ethergames.png";
import dobscoin from "../assets/dobscoin.png";
import tps from "../assets/tps.png";
import peppervine from "../assets/103peppervine.png";
import armchair from "../assets/armchair.png";
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
                {/* <img id="profilePic" src="https://pbs.twimg.com/profile_images/1726565027120066560/0Y_7_KGF_400x400.jpg"></img> */}
                <div id="footTitle">
                    PORTFOLIO
                </div>
                <div id="upBtnArea" >
                    <svg id="upBtn" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </div>

            <div id="homeSlide">
                <div id="itemArea">
                    <div id="portfolioGrid">
                        <div className="sitePreview" onClick={() => window.open("https://venue.market", "_blank")}>
                            <img className="siteImgPreview" src={venue}></img>
                            <div className="siteName">venue</div>
                            <div className="siteDescription">
                                venue is a video paywall platform and creator marketplace built on base.
                            </div>
                        </div>
                        <div className="sitePreview" onClick={() => window.open("https://nvus.app", "_blank")}>
                            <img className="siteImgPreview" src={nvus}></img>
                            <div className="siteName">nvus</div>
                            <div className="siteDescription">
                                social platform for Friend Tech users to share videos with key holders.
                            </div>
                        </div>
                        <div className="sitePreview" onClick={() => window.open("https://ethergames.io", "_blank")}>
                            <img className="siteImgPreview" src={ethergames} ></img>
                            <div className="siteName">ethergames</div>
                            <div className="siteDescription">
                                crypto arcade with real money jackpots.
                            </div>
                        </div>
                        <div className="sitePreview">
                            <img className="siteImgPreview" src={dobscoin}></img>
                            <div className="siteName">dobscoin</div>
                            <div className="siteDescription">
                                erc20 memecoin on ethereum mainnet.
                            </div>
                        </div>
                        <div className="sitePreview" onClick={() => window.open("https://texaspoolservices.com", "_blank")}>
                            <img className="siteImgPreview" src={tps}></img>
                            <div className="siteName">Texas Pool Services</div>
                            <div className="siteDescription">
                                bookings and info for a pool construction company.
                            </div>
                        </div>
                        <div className="sitePreview" onClick={() => window.open("https://103peppervine.com", "_blank")}>
                        <img className="siteImgPreview" src={peppervine}></img>
                            <div className="siteName">103 peppervine</div>
                            <div className="siteDescription">
                                info and bookings for an airBnB.
                            </div>
                        </div>
                        <div className="sitePreview" onClick={() => window.open("https://armchaircap.com", "_blank")}>
                        <img className="siteImgPreview" src={armchair}></img>
                            <div className="siteName">armchair capital</div>
                            <div className="siteDescription">
                                portfolio site for a venture capital firm.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
