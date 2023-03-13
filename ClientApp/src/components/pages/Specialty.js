import React from "react";

export default function Meals() {

    const Menu = {
        width: '100%',
        //height: 'auto',
        height: '1705px',
        background: 'url(assets/bg-patt.png)'
    };

    const divImg = {
        width: '80%',
        height: 'auto',
        margin: '0 10%',
        padding: '50px 4%',
        background: '#bfc5c6',
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
        height: '250px',
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
                <h1 style={h1}>House Specialty</h1>
                <figure style={fig}>
                    <img style={img} src="assets/housespec5.jpg" alt="" />
                    <h2 style={h2}>Pollo Chuco</h2>
                    <p style={parag}>
                        Pollo chuco or chicken with fried plantain slices is a traditional
                        dish which is consumed mainly on the north coast of the country. It
                        is one of the most common meals to see them served on the tables of
                        Hondurans, and its low cost has placed it as a one of the most viable
                        options for a high-altitude lunch.
                    </p>
                    <h3 style={h3}>$ 0.00</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/housespec6.jpg" alt="" />
                    <h2 style={h2}>Pupusas</h2>
                    <p style={parag}>
                        The pupusa is a thick corn or rice dough-based tortilla filled with one or more
                        ingredients, such as cheese, chicharrón, squash, refried beans, loroco, etc.
                        Due to its tradition, versatility and low cost, it is one of the most widespread
                        foods in El Salvador and Honduras, countries that dispute their patrimonial origin.
                    </p>
                    <h3 style={h3}>$ 3.00</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/housespec2.jpg" alt="" />
                    <h2 style={h2}>Baleadas</h2>
                    <p style={parag}>
                        The baleada is one of the most traditional and representative typical
                        dishes of Honduran gastronomy, originating in northern Honduras in the
                        mid-20th century. The exact demographic and name origin is unknown.
                        Homemade flour tortilla. Normal with refried bean, sour cream & cheese.
                    </p>
                    <h3 style={h3}>$ 2.50</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/housespec1.jpg" alt="" />
                    <h2 style={h2}>Beans Tamales</h2>
                    <p style={parag}>
                        Bean tamales are one of the traditional foods that Hondurans enjoy the
                        most and that require little budget. Adding a little pickle gives it a
                        spicy and tastier touch, they are also delicious if we accompany them
                        with a cup of hot coffee.
                    </p>
                    <h3 style={h3}>$ 2.50</h3>
                </figure>
            </div>
        </div>
    );

};


