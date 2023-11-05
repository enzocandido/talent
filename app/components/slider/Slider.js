import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './slider.module.scss';

export default function Slider() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className={styles.slider}
                style={{
                    "--swiper-pagination-color": "#EEEE",
                }}
            >
                {/* images for test */}
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsbsON2MWNC_M-ikI0ahBoz8IaspHxppSJUhe_wjRokJGRnKbKWCezl75KEc1Fxmcbfo&usqp=CAU" alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsbsON2MWNC_M-ikI0ahBoz8IaspHxppSJUhe_wjRokJGRnKbKWCezl75KEc1Fxmcbfo&usqp=CAU" alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsbsON2MWNC_M-ikI0ahBoz8IaspHxppSJUhe_wjRokJGRnKbKWCezl75KEc1Fxmcbfo&usqp=CAU" alt="1" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}