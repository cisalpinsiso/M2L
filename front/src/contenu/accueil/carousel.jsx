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
  const equipes = [
    {
      "name": "Purple Crown",
      "logo": "/purplecrown.png",
      "players": "https://cdn.britannica.com/39/239139-050-49A950D1/French-soccer-player-Kylian-Mbappe-FIFA-World-Cup-December-10-2022.jpg"
    },
    {
      "name": "Maze Dragon",
      "logo": "/mazedragon.png",
      "players": "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8f189ff0c52f9885/63af578868ce201ffcda00c0/Ronny_cover(1).jpg"
    },
    {
      "name": "Imperial Tiger",
      "logo": "/imperialtiger.png",
      "players": "https://s.france24.com/media/display/0737f0d8-f628-11eb-8a9b-005056bfb2b6/w:1280/p:1x1/1916ffb4fe5874d2d332ae652632f986453c6f0c.jpg"
    },
    {
      "name": "Horse Riders",
      "logo": "/horseriders.png",
      "players": "https://i.insider.com/5fd350fae00bce00188bab82?width=1000&format=jpeg&auto=webp"
    },
    {
      "name": "Blue Tail",
      "logo": "/bluetail.png",
      "players": "https://deshpee.com/wp-content/uploads/2023/08/image-1.png"
    },
    {
      "name": "Black Pirates",
      "logo": "/blackpirates.png",
      "players": "https://cdn.images.express.co.uk/img/dynamic/67/590x/400172_1.jpg?r=1686998680160"
    }
  ]
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
        {
          equipes.map((equipe) => {
            return (
              <SwiperSlide>
                <img className="joueur" src={equipe.players} alt="" />
                <div className="team">
                  <img
                    src={"/equipes" + equipe.logo}
                    alt=""
                    className="logo"
                  />
                  <h1 className="titre">{equipe.name}</h1>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
