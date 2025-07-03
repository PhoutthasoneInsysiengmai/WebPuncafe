import React, { useContext, useState } from "react";
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";

// Icon
import { HiMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("menu");

    const {getTotalCartAmount} = useContext(StoreContext);


    return (
        
        <div className="navbar">
            <div className="menu-icon">
                <Link to='/' onClick={() => setMenu("#")} className={menu === "#" ? "active" : ""}> <HiMenu /> </Link>
            </div>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}> Home </Link>
                <a href="#" onClick={() => setMenu("#")} className={menu === "#" ? "active" : ""}> Favourite </a>
                <a href="#" onClick={() => setMenu("#")} className={menu === "#" ? "active" : ""}> Message </a>
                <a href="#" onClick={() => setMenu("#")} className={menu === "#" ? "active" : ""}> Promotion </a>
                <a href="#" onClick={() => setMenu("#")} className={menu === "#" ? "active" : ""}> Profile </a>
            </ul>
            <div className="navbar-right">
                <IoSearch />
                <div className="navbar-search_icon">
                  <Link to='/cart'> <FaCartArrowDown /> </Link>  
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                
            </div>
        </div>
    )
}
export default Navbar