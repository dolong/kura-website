import React from "react"

import TIMELINE from '../../data/TIMELINE.json'

const Timeline = ({ languageContent, locale }) => {
  return (
    <div>
      <div className="kura_tm_section" id="timeline">
        <div className="kura_tm_timeline">
          <div className="container">
            <div className="kura_tm_main_title">
              <span>Works</span>
              <h3>Working with key industry leaders</h3>
            </div>
            <div className="timeline_list">
              <ul>
                  {TIMELINE[locale] && TIMELINE[locale].map((time, index) => (
                      <li className="wow fadeInUp" data-wow-duration=".7s" key={index}>
                      <div className="list_inner">
                        <span>{time.role}</span>
                      </div>
                      <div className="list_inner">
                        <span>{time.company}</span>
                      </div>
                      <div className="list_inner">
                        <span>{time.location}</span>
                      </div>
                    </li>
                  )
                    
                    )}
                {/* <li className="wow fadeInUp" data-wow-duration=".7s">
                  <div className="list_inner">
                    <span>April, 2019 - Today</span>
                  </div>
                  <div className="list_inner">
                    <span>Head Designer &amp; Co-founder</span>
                  </div>
                  <div className="list_inner">
                    <span>Alan Klein Design, London</span>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".2s"
                >
                  <div className="list_inner">
                    <span>September, 2018 - April, 2019</span>
                  </div>
                  <div className="list_inner">
                    <span>Creative Director &amp; Senior Designer</span>
                  </div>
                  <div className="list_inner">
                    <span>Raxuna Poc, New York</span>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".4s"
                >
                  <div className="list_inner">
                    <span>October, 2015 - September, 2018</span>
                  </div>
                  <div className="list_inner">
                    <span>Head Designer</span>
                  </div>
                  <div className="list_inner">
                    <span>Arimana Co. Ltd, Amsterdam</span>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".6s"
                >
                  <div className="list_inner">
                    <span>July, 2012 - October, 2015</span>
                  </div>
                  <div className="list_inner">
                    <span>Senior UX &amp; UI Designer</span>
                  </div>
                  <div className="list_inner">
                    <span>Baxdoro Design, London</span>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".8s"
                >
                  <div className="list_inner">
                    <span>March, 2010 - July, 2012</span>
                  </div>
                  <div className="list_inner">
                    <span>Junior UX Designer</span>
                  </div>
                  <div className="list_inner">
                    <span>Simono Design Group, London</span>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
