import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = ()=>{
    return true;
}

const Title = () =>(
    <a href='/'>
    <img 
    className='logo'
    alt='logo'
    src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    />
    </a>
)

const Header = () =>{
    const [isLoggedIn,setIsLoggedin] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items"  key="h3">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
           { isLoggedIn ? <button onClick={()=>setIsLoggedin(false)}>Login</button> 
           : <button onClick={()=>setIsLoggedin(true)}>Logout</button>}
        </div>
    )
}

export default Header;