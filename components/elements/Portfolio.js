import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import LightBox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

// const ModalVideo = dynamic(import("react-modal-video"), {
//     ssr: false,
// });

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const IMAGES = [
    {
        src: "/img/portfolio/1.jpg",
        thumbnail: "/img/portfolio/1.jpg",
        title: "Magic Art",
        sub: "Image",
    },
    {
        src: "/img/portfolio/2.jpg",
        thumbnail: "/img/portfolio/2.jpg",
        title: "Bona Green",
        sub: "Image",
    },

    {
        src: "/img/portfolio/3.jpg",
        thumbnail: "/img/portfolio/3.jpg",
        title: "Leo Dandora",
        sub: "Image",
    },
    {
        src: "/img/portfolio/4.jpg",
        thumbnail: "/img/portfolio/4.jpg",
        title: "Folio Grasia",
        sub: "Image",
    },
    {
        src: "/img/portfolio/5.jpg",
        thumbnail: "/img/portfolio/5.jpg",
        title: "Viva Mercury",
        sub: "Image",
    },
    {
        src: "/img/portfolio/6.jpg",
        thumbnail: "/img/portfolio/6.jpg",
        title: "Santa Onera",
        sub: "Image",
    },
];

const Portfolio = () => {
    const [showLight, setShowLight] = useState(null);

    const showLightBox = (index) => {
        setShowLight({
            startIndex: index,
        });
    };

    const hideLightBox = () => {
        setShowLight(null);
    };
    return (
        <div>
            <div className="kura_tm_section" id="portfolio">
                <div className="kura_tm_portfolio">
                    <div className="container">
                        <div className="kura_tm_main_title">
                            <span>Portfolio</span>
                            <h3>Selected Works</h3>
                        </div>
                        <div
                            className="portfolio_list gallery_zoom wow fadeInUp"
                            data-wow-duration=".7s"
                        >
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={false}
                                        navigation={{
                                            prevEl: ".my_prev",
                                            nextEl: ".my_next",
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 30,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 40,
                                            },
                                        }}
                                    >
                                        {IMAGES.map((image, index) => (
                                                <SwiperSlide className="swiper-slide" key={index}>
                                                    <div className="list_inner">
                                                        <div className="image">
                                                            <img
                                                                src="/img/portfolio/410-460.jpg"
                                                                alt=""
                                                            />
                                                            <div
                                                                className="main"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(" +
                                                                        image.src +
                                                                        ")",
                                                                }}
                                                            ></div>
                                                            <div className="overlay"></div>
                                                            <img
                                                                className="svg"
                                                                src="/img/svg/right-arrow.svg"
                                                                alt=""
                                                            />
                                                            <div className="details">
                                                                <h3>
                                                                    {
                                                                        image.title
                                                                    }
                                                                </h3>
                                                                <span>
                                                                    {image.sub}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            className="kura_tm_full_link popup-vimeo"
                                                            onClick={() =>
                                                                showLightBox(
                                                                    index
                                                                )
                                                            }
                                                        ></a>
                                                    </div>
                                                </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="kura_tm_swiper_progress fill">
                                    <div className="my_pagination_in"></div>
                                    <div className="my_navigation">
                                        <ul>
                                            <li>
                                                <a className="my_prev">
                                                    <img
                                                        className="svg"
                                                        src="img/svg/right-arrow.svg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="my_next">
                                                    <img
                                                        className="svg"
                                                        src="img/svg/right-arrow.svg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showLight ? (
                <LightBox
                    images={IMAGES.map((img) => ({
                        url: img.src,
                        title: img.caption,
                    }))}
                    startIndex={showLight.startIndex}
                    onClose={hideLightBox}
                />
            ) : null}
        </div>
    );
};

export default Portfolio;
