import { RiStarFill } from "@remixicon/react"
import imageBoy from "../assets/avatars/boy3.png"
import imageGirl2 from "../assets/avatars/girl2.png"
import girlImage from "../assets/avatars/girl1.png"

const TestimonialSection = () => {

    const customersReviews = [
    {
      index: 1,
      name: "Jason Smith",
      image: imageBoy,
      review: "The Bookstore is the best place to buy books. I'm so happy with my purchase!",
      stars: 5,
    },
    {
      index: 2,
      name: "Sarah Johnson",
      image: imageGirl2,
      review: "Great selection and fast delivery. Highly recommended!",
      stars: 4,
    },
    {
      index: 3,
      name: "Alex Lee",
      image: girlImage,
      review: "Impressed by the quality and service. Will order again!",
      stars: 5,
    },
  ];



  return (
    <section className="testimonial section" id="testimonial">
        <h2 className="section__title">
            Testimonials From Customers
        </h2>

        <div className="testimonial__container container">
            <div className="testimonial__swiper">
                <div>
                    {customersReviews.map((customer) => {
                        return (
                        <article className="testimonial__card" key={customer.index}>
                        <img src={customer.image} alt="image of person" className="testimonial__img"/>

                        <h2 className="testimonial__title">{customer.name}</h2>
                        <p className="testimonial_description">{customer.review}</p>

                        <div className="testimonial__stars">
                            {Array.from({ length: customer.stars }).map((_, i) => (
                                <RiStarFill key={i} />
                            ))}
                        </div>
                    </article>)
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection