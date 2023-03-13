import React from "react";
import { NavLink } from "react-router-dom";
import './NavMenu.css';
/*import latinrest from '../assets/Latin-Restaurant-3.png';*/
/*import latinrest from '.../LuisLogo52.png';*/

export default function NavMenu() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src='assets/LuisLogo52.png' alt="logo" />
                    { /*<img src='assets/Latin-Restaurant-3.png' alt="logo" />*/}
                </div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li className="dropdown" >
                        <NavLink to="/Menu">Menu &nbsp;
                            <i className="fa fa-caret-down"></i>
                        </NavLink>
                        <div className="subBar">
                            <div className="up_arrow"></div>
                            <ul>
                                <li><NavLink to="/Appetizers">Appetizers</NavLink></li>
                                <li><NavLink to="Meals/">Meals</NavLink></li>
                                <li><NavLink to="/Specialty">House_Specialty</NavLink></li>
                                <li><NavLink to="/Combos">Combos</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li><NavLink to="/OrderOnline">Order Online</NavLink></li>
                    <li><NavLink to="/Reservation">Reservation</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/Login">Login</NavLink></li>
                    <li><NavLink to="/Borrar">Prod_Detail</NavLink></li>
                </ul>    
            </nav>
        </div>
    );
};



//<li><NavLink to="/Login">LOGIN</NavLink></li>
/*<div className="subBar">
    <div className="up_arrow"></div>
    <ul>
        <li><NavLink to="/OrderOnline">ORDER_ONLINE</NavLink></li>
        <li><NavLink to="/Reservation">RESERVATION</NavLink></li>
    </ul>
</div>

 
 <li><NavLink to="/Email">Email</NavLink></li>

*/



