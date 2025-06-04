import { RiEyeLine, RiHeart3Line, RiSearchLine } from '@remixicon/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import bookCover1 from "../assets/Book Covers/14.png";
import bookCover2 from "../assets/Book Covers/13.png";
import bookCover3 from "../assets/Book Covers/12.png";
import bookCover4 from "../assets/Book Covers/11.png";
import bookCover5 from "../assets/Book Covers/10.png";
import bookCover6 from "../assets/Book Covers/9.png";
import bookCover7 from "../assets/Book Covers/8.png";
import bookCover8 from "../assets/Book Covers/7.png";
import bookCover9 from "../assets/Book Covers/6.png";
import bookCover10 from "../assets/Book Covers/5.png";
import bookCover11 from "../assets/Book Covers/4.png";
import bookCover12 from "../assets/Book Covers/3.png";



const FeaturedSection = () => {
  return (
    <section className='featured section' id='featured'>
        <h2 className='section__title'>
            Featured Books
        </h2>

        <div className='featured__container container'>
            <div className='featured__swiper'>
                <div>
                <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                centeredSlides={true} 
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                grabCursor={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                >
              {[bookCover1, bookCover2, bookCover3, bookCover4, bookCover5, bookCover6, bookCover7, bookCover8, bookCover9,bookCover10, bookCover11, bookCover12].map((cover, index) => (
                <SwiperSlide key={index}>
                    <article className="featured__card">
                        <img src={cover} alt={`Book Cover ${index + 1}`} className="featured__img" />
                        <h2 className='featured__title'>Featured Book</h2>
                        <div className='featured__prices'>
                        <span className='featured__discount'>R300</span>
                        <span className='featured__price'>R199</span>
                        </div>

                        <button className='button'>Add to Cart</button>

                        <div className='featured__actions'>
                        <button><RiSearchLine /></button>
                        <button><RiHeart3Line /></button>
                        <button><RiEyeLine /></button>
                        </div>
                    </article>
                </SwiperSlide>
                 ))}
                </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedSection