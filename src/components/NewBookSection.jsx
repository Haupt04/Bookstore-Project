import { RiStarFill, RiStarHalfFill } from "@remixicon/react";
import bookCover10 from '../assets/images/10.png'
import bookCover12 from '../assets/images/3.png'
import { Link } from "react-router-dom";

const NewBookSection = () => {
  return (
    <section className='new section' id='new'>
        <h2 className='section__title'>
            New Books Released
        </h2>

        <div className='new__container container'>
            <div className='new__swiper'>
                <div className="item">
                    <Link to="/book/10" className='new__card'>
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
                    </Link>
                </div>

                <div className="item">
                    <Link to="/book/3" className='new__card'>
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
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewBookSection