import { RiCloseLine } from "@remixicon/react"


const Login = ({onClose}) => {
  return (
    <div className="login grid" id="login-content">
        <form action="" className="login__form grid">
            <h3 className="login__title">Log In</h3>

            <div className="login__group grid">
                <div>
                    <label htmlFor="login-email" className="login__label">Email</label>
                    <input type="email" placeholder="Write your email" className="login__input" id="login-email" />
                </div>
                <div>
                    <label htmlFor="login-pass" className="login__label">Password</label>
                    <input type="password" placeholder="Enter your password" className="login__input" id="login-pass" />
                </div>
            </div>
            <div>
                <span className="login__signup">
                    You do not have an account? <a href="#">Sign up</a>
                </span>

                <a href="#" className="login__forgot">
                    You forgot your password
                </a>

                <button type="submit" href="#" className="login__button button"> Log In</button>
            </div> 
        </form>

        <RiCloseLine className="login__close" id="login-close" onClick={onClose}/> 
    </div>
  )
}

export default Login