import { RiBook3Line } from '@remixicon/react'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container grid'>
            <div>
                <a href='#' className='footer__logo'>
                    <RiBook3Line /> The Bookstore
                </a>

                <p className='footer__description'>
                    Find books to match anybody taste at The Bookstore. With 100s of books to choose from. 
                </p>
            </div>

            <div className='footer__data grid'>
                <div>
                    <h3 className='footer__title'>About</h3>

                    <ul className='footer__links'>
                        <li>
                            <a href='#' className='footer__link'>Shipping Options</a>
                        </li>
                        <li>
                            <a href='#' className='footer__link'>FAQ</a>
                        </li>
                        <li>
                            <a href='#' className='footer__link'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='#' className='footer__link'>Newsletters & Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer