// import { useEffect, useState } from "react";
import { Navigation, Pagination,EffectFade, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import  {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const Slidder = () => {
    
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
                    <img src="https://i.postimg.cc/vTBpPBpV/product-school-d-JICd7b-Ll-E-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/NGRZ9VwZ/people-working-tech-brand-together.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/SRz9R85p/pexels-pixabay-433452.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/T39vFsPZ/pexels-bertellifotografia-3321793.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slidder;
