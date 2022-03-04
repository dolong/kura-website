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
                            <h3>Listen to some of our podcasts</h3>
                        </div>
                        <div
                            className="news_list wow fadeInUp"
                            data-wow-duration=".7s"
                        >
                            <div className="slick-container">
                                <div className="slick-wrapper">
                                    <Swiper
                                        slidesPerView={2}
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
                                              spaceBetween: 20
                                            },
                                            640: {
                                              slidesPerView: 1,
                                              spaceBetween: 20
                                            },
                                            768: {
                                              slidesPerView: 2,
                                              spaceBetween: 30
                                            },
                                            1024: {
                                              slidesPerView: 3,
                                              spaceBetween: 40
                                            }
                                          }}
                                    >
                                        <SwiperSlide className="slick-slide">
                                            <div className="list_inner">
                                                <div className="image">
                                                    <img
                                                        src="/img/spotify.png"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/spotify.png)",
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
                                                </div>
                                                <a
                                                    className="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div className="news_hidden_details">
                                                    <div className="news_popup_informations">
                                                        <div className="text">
                                                            <p>
                                                                Kura is a
                                                                leading web
                                                                design agency
                                                                with an
                                                                award-winning
                                                                design team that
                                                                creates
                                                                innovative,
                                                                effective
                                                                websites that
                                                                capture your
                                                                brand, improve
                                                                your conversion
                                                                rates, and
                                                                maximize your
                                                                revenue to help
                                                                grow your
                                                                business and
                                                                achieve your
                                                                goals.
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
                                                        src="/img/apple_podcasts.png"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/apple_podcasts.png)",
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
                                                        src="/img/twitter_spaces.png"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/twitter_spaces.png)",
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
                            <div className="image center">
                                <img src="img/spotify.png" width="400" alt="" />
                                <img src="img/apple_podcasts.png"  width="400" alt="" />
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
