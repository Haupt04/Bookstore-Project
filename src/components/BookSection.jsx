import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import bookCover1 from '../assets/Book Covers/1.png';
import bookCover2 from '../assets/Book Covers/2.png';
import bookCover3 from '../assets/Book Covers/3.png';
import bookCover4 from '../assets/Book Covers/4.png';
import bookCover5 from '../assets/Book Covers/5.png';
import bookCover6 from '../assets/Book Covers/6.png';



const BookSection = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">Browse & Select Books</h1>
            <p className="home__description">
              Find the best books from your favorite writers, explore hundreds of books with all possible categories
            </p>
            <a href="#" className="button">Explore Now</a>
          </div>
        </div>

        <div className="home__images">
          <div className="home__swiper swiper">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              centeredSlides={true} 
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              grabCursor={true}
            >
              {[bookCover1, bookCover2, bookCover3, bookCover4, bookCover5, bookCover6].map((cover, index) => (
                <SwiperSlide key={index} className="home__article">
                  <img src={cover} alt={`Book Cover ${index + 1}`} className="home__img" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
  )
}

export default BookSection