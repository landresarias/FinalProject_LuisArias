
import React from "react";
import './Footer.css';

export default function Footer() {
    let date = new Date().getFullYear();
    return (
        <div className="Footer">
            <p>
                &copy; {date} triOS College &trade;
            </p>
        </div>
    );
};


