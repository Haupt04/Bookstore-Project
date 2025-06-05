import { RiBook2Line, RiHome2Line, RiBook3Line, RiBookmark2Line, RiMessage2Line, RiSearch2Line, RiUser3Line, RiMoonLine, RiPriceTag3Line } from "@remixicon/react"
import { useEffect, useState } from "react";
import Search from "./Search";
import Login from "./Login";



const Header = () => {
    const [shadow, setShadow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

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
                <a href="#" className="nav__logo">
                    <RiBook2Line  />
                    <span className="logo-text"> The Bookstore</span>
                </a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        {/* First item in menu */}
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <RiHome2Line /> 
                                <span>Home</span>
                            </a>
                        </li>
                        {/* Second item in menu */}
                        <li className="nav__item">
                            <a href="#featured" className="nav__link">
                                <RiBook3Line />
                                <span>Featured</span>
                            </a>
                        </li>
                        {/* Three item in menu */}
                        <li className="nav__item">
                            <a href="#discount" className="nav__link">
                                <RiPriceTag3Line /> 
                                <span>Discount</span>
                            </a>
                        </li>
                        {/* Four item in menu */}
                        <li className="nav__item">
                            <a href="#new" className="nav__link">
                                <RiBookmark2Line  /> 
                                <span>New Books</span>
                            </a>
                        </li>
                        {/* Firth item in menu */}
                        <li className="nav__item">
                            <a href="#testimonial" className="nav__link">
                                <RiMessage2Line /> 
                                <span>Testimonial</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav__actions">
                    {/* Search Button */}
                    <RiSearch2Line  className="search-button" id="search-button" onClick={() => setShowSearch(true)}/>

                    {/* Login Button */}
                    <RiUser3Line className="login-button" id="login-button" onClick={() => setShowLogin(true)}/>
                </div>
            </nav>
        </header>
        {showSearch && <Search onClose={() => setShowSearch(false)} />}
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Header