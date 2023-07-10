import React, { useState } from "react"

import { HomeModal } from "./ContentModal"

import HERO_CONTENT from "../../data/HERO_CONTENT.json"
import IMG_CREDIT from "../../data/IMG_CREDIT.json"

const Home = ({ languageContent, locale }) => {
  const [open, setOpen] = useState(false)
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    description: [],
  })
  const onOpenModal = (img, title, description) => {
    setOpen(true)
    setModalValue({ img, title, description })
  }
  const onCloseModal = () => {
    setOpen(false)
    setModalValue({ img: null, title: "" })
  }
  return (
    <>
      <div className="kura_tm_section" id="home">
        <div className="kura_tm_hero">
          <div className="container">
            <div className="content">
              <div className="left">
                <span className="name">Probably Nothing</span>
                <h3 className="job">{languageContent.job}</h3>
                <div className="services">
                  <ul>
                    {HERO_CONTENT[locale].map(content => (
                      <li key={content.keyword}>
                          <span>{content.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="short_info"></div>
              </div>
              <div className="right">
                <div className="image">
                  <img src="/img/thumbs/3-4.jpg" alt="" />
                  <div
                    className="main"
                    title={IMG_CREDIT["ming-shan-vertical"][locale]}
                  ></div>
                  <div className="shape"></div>
                </div>
              </div>
              <div className="down anchor">
                <a href="#portfolio">
                  <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <HomeModal
          open={open}
          onCloseModal={() => onCloseModal()}
          img={modalValue.img}
          title={modalValue.title}
          description={modalValue.description}
        />
      </div>
    </>
  )
}

export default Home
