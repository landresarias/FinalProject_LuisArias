import React from "react";

export default function Menu() {

    const Menu = {
        width: '100%',
        height: 'auto',
        background: 'url(assets/bg-patt.png)'
    };

    const divImg = {
        width: '80%',
        height: 'auto',
        margin: '50px 10%',
        background: '#fff',
        //border: '2px solid #7b7b7b',
        borderRadius: '10px',
        float: 'left'
    };

    const h1 = {
        width: '90%',
        height: '80px',
        margin: '50px 5%',
        background: '#940000',
        border: '2px solid',
        borderRadius: '5px',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: '2.5rem',
        fontWeight: '600',
        alignItems: 'center',
        lineHeight: '80px',
        textAlign: 'center',
        textShadow: '1px 1px 2px #fff, 0 0 25px rgb(180, 122, 180), 0 0 5px rgb(256, 256, 256)',
        textTransform: 'uppercase',
        opacity: '0.76',
    };

    const fig = {
        padding: '0 3%',
        float: 'left'
    };

    const img = {
        width: '350px',
        height: '300px',
        background: '#666',
        marginTop: '60px',
        marginLeft: '6%',
        borderRadius: '50px',
        boxShadow: '#999 5px 5px 10px',
    };

    const h2 = {
        width: '350px',
        paddingTop: '30px',
        marginLeft: '6%',
        color: '#940000',
        fontFamily: 'Arial, Helvetica, sans - serif',
        fontSize: '1.5rem',
        fontWeight: '800',
        textAlign: 'center',
        textTransform: 'uppercase'
    };

    return (
        <div style={Menu}>
            <div style={divImg}>
                <h1 style={h1}>Appetizers</h1>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers3.png" alt=""/>
                    <h2 style={h2}>Enchiladas</h2>
                        
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers2.png" alt=""/>
                    <h2 style={h2}>Deep Fried Platains</h2>
                        
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers4.jpg" alt=""/>
                    <h2 style={h2}>Fried or Cooked Yucca</h2>
                        
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers6.jpg" alt="" />
                    <h2 style={h2}>Flautas</h2>
                        
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers7.jpg" alt="" />
                    <h2 style={h2}>Burritos</h2>
                        
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers5.jpg" alt="" />
                    <h2 style={h2}>Nachos</h2>
                        
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers8.jpg" alt="" />
                    <h2 style={h2}>Quesadilla</h2>
                        
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers9.jpg" alt="" />
                    <h2 style={h2}>Tortas</h2>
                        
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers10.jpg" alt="" />
                    <h2 style={h2}>Tostadas</h2>
                        
                </figure>
            </div>
            <div style={divImg}>
                <h1 style={h1}>Meals</h1>
                <figure style={fig}>
                    <img style={img} src="assets/meals3.jpg" alt="" />
                    <h2 style={h2}>Breakfast and Dinner</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals10.jpg" alt="" />
                    <h2 style={h2}>Garlic Shrimp (Lunch & Dinner)</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals11.jpg" alt="" />
                    <h2 style={h2}>Pork Chop (Lunch & Dinner)</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals12.jpg" alt="" />
                    <h2 style={h2}>Grilled Sirloin (Lunch & Dinner)</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals13.jpg" alt="" />
                    <h2 style={h2}>Beef Fajitas (Lunch & Dinner)</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals14.jpg" alt="" />
                    <h2 style={h2}>BBQ Chicken (Lunch & Dinner)</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals9.jpg" alt="" />
                    <h2 style={h2}>Typical Dish</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals7.jpg" alt="" />
                    <h2 style={h2}>Meexican Tacos(Corn Tortilla)</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals8.jpg" alt="" />
                    <h2 style={h2}>Meexican Tacos(Flour Tortilla)</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals4.jpg" alt="" />
                    <h2 style={h2}>Seafood Soup</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals5.jpg" alt="" />
                    <h2 style={h2}>Beef Soup</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals6.jpg" alt="" />
                    <h2 style={h2}>Tripe Soup</h2>
                </figure>
            </div>
            <div style={divImg}>
                <h1 style={h1}>House Specialty</h1>
                <figure style={fig}>
                    <img style={img} src="assets/housespec5.jpg" alt="" />
                    <h2 style={h2}>Pollo Chuco</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/housespec6.jpg" alt="" />
                    <h2 style={h2}>Pupusas</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/housespec2.jpg" alt="" />
                    <h2 style={h2}>Baleadas</h2>

                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/housespec1.jpg" alt="" />
                    <h2 style={h2}>Beans Tamales</h2>
                </figure>
            </div>
            <div style={divImg}>
                <h1 style={h1}>Combos</h1>
                <figure style={fig}>
                    <img style={img} src="assets/meals7.jpg" alt="" />
                    <h2 style={h2}>Mexican Tacos</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals8.jpg" alt="" />
                    <h2 style={h2}>Mexican Tacos</h2>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals1.jpg" alt="" />
                    <h2 style={h2}>Typical Dish (For 4 people)</h2>
                </figure>
            </div>
        </div>
    );

};


