import React from "react";
import './Navigation.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
// import Home from "./Home";
// import Login from "./Login";
import {Link} from "react-router-dom"


function Navigation()
{
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>BidMyRide</h3>
            <nav ref={navRef}>
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About me
                </Link>
                {/* <a href="/#">About me</a> */}
                <Link to="/login">
                    Login
                </Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navigation;


//react-router-dom react-router