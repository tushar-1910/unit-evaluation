import React from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { isAuth, setIsAuth } = React.useContext(AuthContext)
    if(isAuth)
    {
        return (
            <div>
                <Link to="/">HOME</Link>
                <Link to="/bookings">BOOKINGS</Link>
                <Link to="/login">LOGIN</Link>
            </div>
        )
    }
    else{
        return (
                <div>
                    <Link to="/login">LOGIN</Link>
                </div>
    
        )
    }
}

export default Navbar;
