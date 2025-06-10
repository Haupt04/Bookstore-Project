import { RiEyeLine, RiHeart3Line, RiSearchLine } from '@remixicon/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import books from '../data/bookdata.json'
import 'swiper/css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FeaturedSection = () => {
  const { addToCart } = useCart()

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
              {books.slice(0, 12).map(book => (
                <SwiperSlide key={book.id}>
                    <article className="featured__card">
                        <Link to={`/book/${book.id}`}>
                          <img src={book.cover} alt={`Book Cover ${book.id}`} className="featured__img" />
                        </Link>
                        
                        <h2 className='featured__title'>{book.title}</h2>
                        <div className='featured__prices'>
                        <span className='featured__discount'>R {(book.price + 100).toFixed(2)}</span>
                        <span className='featured__price'>R {book.price.toFixed(2)}</span>
                        </div>

                        <button className='button' onClick={() => addToCart(book)}>Add to Cart</button>

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