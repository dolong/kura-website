import React, { useState } from "react";
// import Swiper core and required modules
import { Modal } from "react-responsive-modal";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const News = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <>
            <div className="kura_tm_section" id="news">
                <div className="kura_tm_news">
                    <div className="container">
                        <div className="kura_tm_main_title">
                            <span>Follow Us</span>
                            <h3>Media Mentions</h3>
                        </div>
                        <div
                            className="news_list wow fadeInUp"
                            data-wow-duration=".7s"
                        >
                            <div className="slick-container">
                                <div className="slick-wrapper">
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
                                              slidesPerView: 2,
                                              spaceBetween: 20
                                            },
                                            640: {
                                              slidesPerView: 2,
                                              spaceBetween: 20
                                            },
                                            768: {
                                              slidesPerView: 2,
                                              spaceBetween: 30
                                            },
                                            1024: {
                                              slidesPerView: 2,
                                              spaceBetween: 40
                                            }
                                          }}
                                    >
                                        <SwiperSlide className="slick-slide">
                                            <div className="list_inner">
                                                <div className="image">
                                                    <img
                                                        src="/img/news/atari.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/atari.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="overlay"></div>
                                                <img
                                                    className="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div className="details">
                                                1st Ocean-Positive P&E Game To Launch via Anomura
                                                </div>
                                                <a
                                                    className="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div className="news_hidden_details">
                                                    <div className="news_popup_informations">
                                                        <div className="text">
                                                            <p>
                                                               
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slick-slide">
                                            <div className="list_inner">
                                                <div className="image">
                                                    <img
                                                        src="/img/news/Nasdaq-Logo.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/Nasdaq-Logo.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="overlay"></div>
                                                <img
                                                    className="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div className="details">
                                                    The Bitcoin Question on Everyone's Mind
                                                </div>
                                                <a
                                                    className="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div className="news_hidden_details">
                                                    <div className="news_popup_informations">
                                                        <div className="text">
                                                            <p>
                                                                Coming Soon.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        
                                        <SwiperSlide className="slick-slide">
                                            <div className="list_inner">
                                                <div className="image">
                                                    <img
                                                        src="/img/news/anomura-atari.gif"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/anomura-atari.gif)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="overlay"></div>
                                                <img
                                                    className="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div className="details">
                                                    Anomura Enters into Partnership with Atari
                                                </div>
                                                <a
                                                    className="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div className="news_hidden_details">
                                                    <div className="news_popup_informations">
                                                        <div className="text">
                                                            <p>
                                                                Coming Soon.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
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
            <Modal open={open} onClose={onCloseModal} center>
                <div className="box_inner">
                    <div className="description_wrap" style={{ padding: "30px" }}>
                        <div className="news_popup_informations">
                                <h3>COMING SOON</h3>
                            <div className="image modal-center">
                                <img src="img/spotify.png" width="400" alt="" />
                                <img src="img/apple_podcasts.png"  width="400" alt="" />
                                <img src="img/twitter_spaces.png"  width="400" alt="" />
                            </div>
                            <br />
                            <div className="details" style={{marginBottom:"20px"}}>
                            </div>
                            <div className="text">
                                <p>
                                    Listen to some of the crypto industry leaders as Whaledrop.eth hosts talks on key phenomenons happening in the new metaverse.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default News;
