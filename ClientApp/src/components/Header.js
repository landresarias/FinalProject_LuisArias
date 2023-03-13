
import React from "react";
import { useLocation } from "react-router-dom";
import './Header.css';
import './pages/About.js';
/*import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Instag from '../assets/Instag.png'*/

export default function Header() {
    const { pathname } = useLocation();
    return (
        <div id="Header" style={{ height: pathname === '/' ? '900px' : '200px' }}>
            <div>
                <div id='Welcome' style={{ fontSize: pathname === '/' ? '3rem' : '0rem' }}>
                    <big>Welcome to</big>
                </div>
                <div id='Delicias' style={{
                    top: pathname === '/' ? '45%' : '8%',fontSize: pathname === '/' ? '4rem' : '2.5rem' 
                   
                }}>
                    <sub>Delicias Latin Restaurant</sub>
                </div>
                <div id='TheMost' style={{ fontSize: pathname === '/' ? '2.5rem' : '0rem' } }>
                    <sub>The most delicious latin food in London</sub>
                </div>
                <div className="Text" style={{ top: pathname === '/' ? '15%' : '15%'}}>
                    <h6>Call us now:  </h6>
                    <h5>   519-701-0000</h5>
                </div>
            </div>
            
        </div>
    );
};



/*<div id="address">
    <h4>Delicias Latin Restaurant</h4>
    <h4>199 Queens Ave. </h4>
    <h4>London, ON N6A 1J1</h4>
    <h4>Local: (519) 701-0101</h4>
</div>*/
    
