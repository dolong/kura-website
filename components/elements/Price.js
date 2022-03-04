import React from "react"

import PRICE from "../../data/PRICE.json"
import Contact from "./Contact"

const Price = () => {
  return (
    <div>
      <div className="kura_tm_section" id="price">
        <div className="kura_tm_pricing">
          <div className="container">
            <div className="pricing_inner">
              <div className="left">
                <div className="kura_tm_sticky_section">
                  <div className="kura_tm_main_title">
                    <span>Pricing</span>
                    <h3>Service Prices</h3>
                  </div>
                  <div className="text">
                    <p>
                      For more than 20 years our experts have been accomplishing
                      enough with modern Web Development, new generation web and
                      app programming language.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="kura_tm_sticky_section">
                  <ul>
                    {PRICE &&
                      PRICE.map((item, index) => (
                        <li className="wow fadeInUp" data-wow-duration=".7s" key={index}>
                          <div className="list_inner">
                            <div className="title">
                              <span>{item.title}</span>
                            </div>
                            <div className="cost">
                              <a href={item.mailto}><span>{item.price}</span></a>
                            </div>
                            <img src={item.icon} alt="" className="svg replaced-svg"/>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price
