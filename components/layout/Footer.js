import React, { useState } from "react"

import { HomeModal } from "../elements/ContentModal"

import TERMS_OF_USE from "../../data/TERMS_OF_USE.json"

const Footer = ({ languageContent, locale }) => {
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
    <div>
      <div className="kura_tm_section">
        <div className="kura_tm_copyright">
          <div className="container">
            <div
              className="copyright_inner wow fadeInUp"
              data-wow-duration=".7s"
            >
              { <div className="social">
                
                  {<p>
                    Probablynothing.dev website is operated by 1000012328 Ontario Inc. 
                  </p>}
              </div>}
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
  )
}

export default Footer
