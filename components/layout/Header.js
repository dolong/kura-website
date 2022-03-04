import React, { useState, useEffect } from "react"
import Image from "next/image"

const Header = ({ languageContent, setLocaleValue }) => {
  const [isToggled, setToggled] = useState(false)
  const [scroll, setScroll] = useState(0)
  const toggleTrueFalse = () => setToggled(!isToggled)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })

    var audio1 = document.querySelectorAll("#audio1")
    var audio2 = document.querySelectorAll("#audio2")
    var hamburger = document.querySelector(".trigger .hamburger")

    hamburger.addEventListener("click", function () {
      var element = this

      if (element.classList.contains("is-active")) {
        audio1[0].play()
      } else {
        audio2[0].play()
      }
      return false
    })

    // mobileMenuList.addEventListener("click", function () {
    //     document.querySelector(".trigger .hamburger").classList.remove("is-active");
    //     mobileMenu.slideUp();
    //     return false;
    // });
  })

  return (
    <>
      <div className={scroll ? "kura_tm_topbar animate" : "kura_tm_topbar"}>
        <div className="wrapper">
          <div className="topbar_inner">
            <div className="logo">
              <a href="#">
                <img src="/img/logo.png" alt="" />
              </a>
            </div>
            <div className="menu">
              <div className="list">
                <ul className="anchor_nav">
                  <li className={isToggled ? "current opened" : "current"}>
                    <a href="#home">{languageContent.headerHome}</a>
                  </li>
                  <li className={isToggled ? "opened" : ""}>
                    <a href="#portfolio">{languageContent.headerPortfolio}</a>
                  </li>
                  <li className={isToggled ? "opened" : ""}>
                    <a href="#skills">{languageContent.headerSkills}</a>
                  </li>
                  <li className={isToggled ? "opened" : ""}>
                    <a href="#timeline">{languageContent.headerTimeline}</a>
                  </li>
                  {/* <li className={isToggled ? "opened" : ""}>
                                        <a href="#price">Price</a>
                                    </li> */}
                  {/* <li className={isToggled ? "opened" : ""}>
                                        <a href="#news">News</a>
                                    </li> */}
                  <li className={isToggled ? "opened" : ""}>
                    <a href="#contact">{languageContent.headerContact}</a>
                  </li>
                </ul>
              </div>
              <div className="trigger" onClick={toggleTrueFalse}>
                <div
                  className={
                    isToggled
                      ? "hamburger hamburger--slider is-active"
                      : "hamburger hamburger--slider"
                  }
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kura_tm_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
              <a href="#">
                <img src="/img/logo.png" alt="" />
              </a>
            </div>
            <div className="trigger" onClick={toggleTrueFalse}>
              <div
                className={
                  isToggled
                    ? "hamburger hamburger--slider is-active"
                    : "hamburger hamburger--slider"
                }
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isToggled ? "dropdown active" : "dropdown"}>
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">{languageContent.headerHome}</a>
              </li>
              <li>
                <a href="#portfolio">{languageContent.headerPortfolio}</a>
              </li>
              <li>
                <a href="#skills">{languageContent.headerSkills}</a>
              </li>
              <li>
                <a href="#timeline">{languageContent.headerTimeline}</a>
              </li>
              {/* <li>
                                <a href="#price">Price</a>
                            </li>
                            <li>
                                <a href="#news">News</a>
                            </li> */}
              <li>
                <a href="#contact">{languageContent.headerContact}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
