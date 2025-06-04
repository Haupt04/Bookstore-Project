import { RiStarFill, RiStarHalfFill } from "@remixicon/react";
import bookCover10 from "../assets/Book Covers/10.png";
import bookCover12 from "../assets/Book Covers/3.png";

const NewBookSection = () => {
  return (
    <section className='new section' id='new'>
        <h2 className='section__title'>
            New Books Released
        </h2>

        <div className='new__container container'>
            <div className='new__swiper'>
                <div className="item">
                    <a href="#" className='new__card'>
                        <img src={bookCover10} alt="image" className="new__img" />
                        <div>
                        <h2 className="new__title">The Story of Two Lovers</h2>
                        <div className="new__prices">
                            <span className="new__discount">R199</span>
                            <span className="new__price">R300</span>
                        </div>

                        <div className="new__stars">
                            <RiStarFill /> 
                            <RiStarFill /> 
                            <RiStarFill /> 
                            <RiStarFill /> 
                            <RiStarFill /> 
                            
                        </div>
                        </div> 
                    </a>
                </div>

                <div className="item">
                    <a href="#" className='new__card'>
                        <img src={bookCover12} alt="image" className="new__img" />
                        <div>
                        <h2 className="new__title">The Cupid</h2>
                        <div className="new__prices">
                            <span className="new__discount">R199</span>
                            <span className="new__price">R300</span>
                        </div>

                        <div className="new__stars">
                            <RiStarFill /> 
                            <RiStarFill /> 
                            <RiStarFill /> 
                            <RiStarFill /> 
                            <RiStarHalfFill /> 
                            
                        </div>
                        </div> 
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewBookSection