import { RiBook2Line, RiHome2Line, RiBook3Line, RiBookmark2Line, RiMessage2Line, RiSearch2Line, RiUser3Line, RiMoonLine, RiPriceTag3Line, RiShoppingCartLine } from "@remixicon/react"
import { useEffect, useState } from "react";
import Search from "./Search";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";



const Header = () => {
    const [shadow, setShadow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const { cartItems } = useCart();
    const itemCount = cartItems.length;

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 10){
            setShadow(true);
        } else {
            setShadow(false)
        }
    };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)

    }, []);

  return (
    <>
        <header className={`header ${shadow ? 'shadow-header' : ''}`} id="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    <RiBook2Line  />
                    <span className="logo-text"> The Bookstore</span>
                </Link>

                <div className="nav__menu">
                    <ul className="nav__list">
                        {/* First item in menu */}
                        <li className="nav__item">
                            <Link to="/#home" className="nav__link">
                                <RiHome2Line /> 
                                <span>Home</span>
                            </Link>
                        </li>
                        {/* Second item in menu */}
                        <li className="nav__item">
                            <Link to="/#featured" className="nav__link">
                                <RiBook3Line />
                                <span>Featured</span>
                            </Link>
                        </li>
                        {/* Three item in menu */}
                        <li className="nav__item">
                            <Link to="/#discount" className="nav__link">
                                <RiPriceTag3Line /> 
                                <span>Discount</span>
                            </Link>
                        </li>
                        {/* Four item in menu */}
                        <li className="nav__item">
                            <Link to="/#new" className="nav__link">
                                <RiBookmark2Line  /> 
                                <span>New Books</span>
                            </Link>
                        </li>
                        {/* Firth item in menu */}
                        <li className="nav__item">
                            <Link to="/#testimonial" className="nav__link">
                                <RiMessage2Line /> 
                                <span>Testimonial</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="nav__actions">
                    {/* Search Button */}
                    <RiSearch2Line  className="search-button" id="search-button" onClick={() => setShowSearch(true)}/>

                    {/* Login Button */}
                    <RiUser3Line className="login-button" id="login-button" onClick={() => setShowLogin(true)}/>

                    {/* Cart Button */}
                    <Link to={'/cart'}>
                        <RiShoppingCartLine className="login-button" id="cart-button"/>
                        {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
                    </Link>
                    
                </div>
            </nav>
        </header>
        {showSearch && <Search onClose={() => setShowSearch(false)} />}
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Header