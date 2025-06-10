import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import books from '../data/bookdata.json'



const BookSection = () => {

  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">Browse & Select Books</h1>
            <p className="home__description">
              Find the best books from your favorite writers, explore hundreds of books with all possible categories
            </p>
            <Link to={"/all-products"} className='button'>
              Explore Now
            </Link>
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
              {books.map(book => (
                <SwiperSlide key={book.id} className="home__article">
                  <img src={book.cover} alt={book.title} className="home__img" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
  )
}

export default BookSection