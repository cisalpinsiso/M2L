import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Carrousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1 className="titre">Thefireball</h1>
          <img
            src="https://www.lepoint.fr/images/2020/06/08/20424820lpw-20424870-article-jpg_7157566_1250x625.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="titre">hello</h1>
          <img
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt754ce6f5c70880f8/6410d978b1253f15447c8def/Haaland_Manchester_City_Lipsia.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="titre">hello</h1>
          <img
            src="https://maville.com/photosmvi/2022/09/20/P31512924D5420966G.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="titre">hello</h1>
          <img
            src="https://www.lepoint.fr/images/2020/06/08/20424820lpw-20424870-article-jpg_7157566_1250x625.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="titre">hello</h1>
          <img
            src="https://www.lepoint.fr/images/2020/06/08/20424820lpw-20424870-article-jpg_7157566_1250x625.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="titre">hello</h1>
          <img
            src="https://www.lepoint.fr/images/2020/06/08/20424820lpw-20424870-article-jpg_7157566_1250x625.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="titre">hello</h1>
          <img
            src="https://www.lepoint.fr/images/2020/06/08/20424820lpw-20424870-article-jpg_7157566_1250x625.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="titre">hello</h1>
          <img
            src="https://www.lepoint.fr/images/2020/06/08/20424820lpw-20424870-article-jpg_7157566_1250x625.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="titre">Equipe 2</h1>
          <img
            src="https://www.lepoint.fr/images/2020/06/08/20424820lpw-20424870-article-jpg_7157566_1250x625.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
