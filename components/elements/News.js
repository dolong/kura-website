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
                        <div>
                            <iframe src="./html/media.html"></iframe>
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
