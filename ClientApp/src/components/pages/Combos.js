import React from "react";

export default function Combos() {

    const Menu = {
        width: '100%',
        height: '885px',
        background: 'url(assets/bg-patt.png)'
    };

    const divImg = {
        width: '80%',
        height: 'auto',
        margin: '0 10%',
        padding: '50px 4%',
        background: '#cbc2c2',
        float: 'left'
    };

    const h1 = {
        padding: '30px 0',
        background: '#02223a',
        fontSize: '2.5rem',
        fontWeight: '600',
        //opacity: '0.9',
        color: '#fff',
        textAlign: 'center',
        textShadow: '1px 1px 5px #940000',
        textTransform: 'uppercase',
        borderRadius: '5px',
        opacity: '0.76'
    };

    const fig = {
        margin: '10px 2.3%',
        padding: '0 2%',
        background: '#fff',
        borderRadius: '10px',
        float: 'left'
    };

    const img = {
        width: '300px',
        height: '300px',
        background: '#666',
        marginTop: '60px',
        borderRadius: '50px',
        boxShadow: '#999 5px 5px 10px',
    };

    const h2 = {
        width: '300px',
        paddingTop: '30px',
        color: '#940000',
        fontFamily: 'Arial, Helvetica, sans - serif',
        fontSize: '1.3rem',
        fontWeight: '800',
        textAlign: 'center',
        textTransform: 'uppercase'
    };

    const h3 = {
        width: '35%',
        background: '#000',
        color: '#fff',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const parag = {
        width: '300px',
        height: '210px',
        paddingTop: '20px',
        color: '#940000',
        fontFamily: 'Arial, Helvetica, sans - serif',
        fontSize: '1.1rem',
        fontWeight: '600',
        textAlign: 'left'
    };

    return (
        <div style={Menu}>
            <div style={divImg}>
                <h1 style={h1}>Combos</h1>
                <figure style={fig}>
                    <img style={img} src="assets/meals7.jpg" alt="" />
                    <h2 style={h2}>Meexican Tacos (Corn Tortilla)</h2>
                    <p style={parag}>
                        Three options to select:<br />
                        1.- Chicken,<br />
                        2.- Ground Beef,<br />
                        3.- Pastor,<br />
                        This specialty is served with pico de gallo and spicy sauce.
                    </p>
                    <h3 style={h3}>3 for $10.00</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals8.jpg" alt="" />
                    <h2 style={h2}>Meexican Tacos (Flour Tortilla)</h2>
                    <p style={parag}>
                        Three options to select:<br />
                        1.- Chicken,<br />
                        2.- Ground Beef,<br />
                        3.- Pastor,<br />
                        This specialty is served with lettuce, pico de gallo, cheese and
                        sour cream.<br />
                    </p>
                    <h3 style={h3}>3 for $11.50</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals1.jpg" alt="" />
                    <h2 style={h2}>Typical Dish (For 4 people)</h2>
                    <p style={parag}>
                        Beef, BBQ chicken, pork chop, sausage, plantain, pico de gallo, avocado, tortilla
                        chips, fresh cheese.
                    </p>
                    <h3 style={h3}>for 4 People $60.00</h3>
                </figure>
            </div>
        </div>
    );

};


