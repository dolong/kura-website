import "jarallax/dist/jarallax.css";
import 'react-modal-video/css/modal-video.css';
import { useEffect } from "react";
import 'react-responsive-modal/styles.css';
import "react-awesome-lightbox/build/style.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../public/css/colors.css";
import "../public/css/dark.css";
import "../public/css/plugins.css";
import "../public/css/style.css";
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // P
        function kura_tm_preloader() {
            "use strict";

            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.userAgent
            )
                ? true
                : false;
            var preloader = document.getElementById("preloader");

            if (!isMobile) {
                setTimeout(function () {
                    preloader.classList.add("preloaded");
                }, 800);
                setTimeout(function () {
                    preloader.remove();
                }, 2000);
            } else {
                preloader.remove();
            }
        }

        function kura_tm_my_load() {
            "use strict";

            var speed = 500;
            setTimeout(function () {
                kura_tm_preloader();
            }, speed);
            setTimeout(function () {
                document.querySelector("body").classList.add("opened");
                document.querySelector("body").classList.add("dark");
            }, speed + 2000);
        }
        kura_tm_my_load();

        if (typeof window !== "undefined") {
            window.WOW = require("wowjs");
        }
        new WOW.WOW().init();

        var myCursor = document.querySelectorAll(".mouse-cursor"),
            hamburger = document.querySelector(".hamburger"),
            kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
            pointer = document.querySelector(".cursor-pointer"),
            e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");

        function mouseEvent(element) {
            element.addEventListener("mouseenter", function () {
                e.classList.add("cursor-hover"),
                    t.classList.add("cursor-hover");
            });
            element.addEventListener("mouseleave", function () {
                e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover");
            });
        }
        if (myCursor.length) {
            if (document.body) {
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function (s) {
                    // console.log(document.querySelector(this));
                    o ||
                        (t.style.transform =
                            "translate(" +
                            s.clientX +
                            "px, " +
                            s.clientY +
                            "px)"),
                        (e.style.transform =
                            "translate(" +
                            s.clientX +
                            "px, " +
                            s.clientY +
                            "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                    document.body.addEventListener(
                        "mouseenter",
                        // "a,.kura_tm_topbar .trigger, .cursor-pointer",
                        function () {
                            let a = document.querySelectorAll("a");
                            e.classList.add("cursor-inner"),
                                t.classList.add("cursor-outer");

                            for (let i = 0; i < a.length; i++) {
                                const element = a[i];
                                mouseEvent(element);
                            }

                            hamburger && mouseEvent(hamburger);
                            kura_tm_topbar && mouseEvent(kura_tm_topbar);
                            pointer && mouseEvent(pointer);
                        }
                    ),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    });
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
