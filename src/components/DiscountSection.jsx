import bookCover13 from "../assets/images/2.png";
import bookCover14 from "../assets/images/1.png";
import { Link } from "react-router-dom";

const DiscountSection = () => {
  return (
    <section className="discount section" id="discount">
        <div className="discount__container container grid">
            <div className="discount__data">
                <h2 className="discount__title section__title">
                    Enjoy Exclusive Savings on Your Next Read!
                </h2>

                <p className="discount__description">
                    Discover your next favorite book at an unbeatable price. For a limited time, enjoy up to 30% off selected titles across all genres. Whether you're into thrilling mysteries, heartwarming romances, or inspiring non-fiction, there's something for everyone. Don't miss out—grab your discounted books today and start your next reading adventure!
                </p>

                <Link to={"/all-products"} className="button">Shop Now</Link>
            </div>

            <div className="discount__images">
                <img src={bookCover13} alt="Book cover" className="discount__img-1" />
                <img src={bookCover14} alt="Book cover" className="discount__img-2" />
            </div>
        </div>
    </section>
  )
}

export default DiscountSection