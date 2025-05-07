// import { useEffect, useState } from "react";
import { Navigation, Pagination,EffectFade, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import  {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const Banner = () => {
    
    return (
        <div className='mb-5'>
            <Swiper
                 modules={[Navigation,EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                 spaceBetween={50}
                 slidesPerView={3}
                 navigation
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
                 onSwiper={(swiper) => console.log(swiper)}
                 onSlideChange={() => console.log('slide change')}
                 autoplay={{ delay: 2000, disableOnInteraction: false }}
                //  effect='fade'
                //  fadeEffect={{ crossFade: true }}
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/RGYYc1q9/pexels-zhuhehuai-716276.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/RGYYc1q9/pexels-zhuhehuai-716276.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/9HNsckFh/pexels-wendywei-1190297.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/67wT47hh/pexels-wolfgang-1002140-2747449.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
