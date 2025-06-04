import joinPicture from "../assets/Others/maxim-ilyahov-0aRycsfH57A-unsplash.jpg"



const JoinSection = () => {
  return (
    <section className='join section'>
        <div className='join__container'>
            <img src={joinPicture} alt='' className='join__bg' />

            <div className='join__data container grid'>
                <h2 className='join__title section__title'>
                    Subscribe to our Newsletter
                </h2>

                <form action="" className="join__form">
                    <input type="email" placeholder="Enter email" className="join__input" /> 
                    <button type="submit" className="join__button button">Subscribe</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default JoinSection