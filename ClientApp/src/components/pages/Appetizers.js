import React from "react";

export default function Appetizers() {

    const Menu = {
        width: '100%',
        height: '2450px',
        background: 'url(assets/bg-patt.png)'
    };

    const divImg = {
        width: '80%',
        height: 'auto',
        margin: '0 10%',
        padding: '50px 4%',
        background: '#dad0d0',
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
        height: '245px',
        paddingTop: '20px',
        color: '#940000',
        fontFamily: 'Arial, Helvetica, sans - serif',
        fontSize: '1.1rem',
        fontWeight: '600',
        textAlign: 'center'
    };

    return (
        <div style={Menu}>
            <div style={divImg}>
                <h1 style={h1}>Appetizers</h1>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers3.png" alt=""/>
                    <h2 style={h2}>Enchiladas</h2>
                    <p style={parag}>
                        Enchiladas are found throughout Honduras, they are normally sold and consumed
                        at noon and in some places at night. But, Honduran enchiladas are different
                        than the popular Mexican enchiladas. They are layered with different flavors
                        and textures, making them a delicious snack or main meal.   
                    </p>
                    <h3 style={h3}>$ 3.00</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers2.png" alt=""/>
                    <h2 style={h2}>Deep Fried Platains</h2>
                    <p style={parag}>
                        Fried plantains with beans and butter are a delicious typical Central American
                        appetizer. They are consumed at dinner or breakfast, they are also usually
                        accompanied with a cup of coffee or orange juice.
                    </p>
                    <h3 style={h3}>$ 5.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers4.jpg" alt=""/>
                    <h2 style={h2}>Fried or Cooked Yucca</h2>
                    <p style={parag}>
                        Yuca con chicharrón refers to one of the popular foods in Honduras, as well
                        as El Salvador, which is made of yuca (cassava) served with raw cabbage with lemon,
                        then topped with chicharrones, tomato hot sauce and mojo, made with a mixture of oil,
                        garlic, onion, spices such as oregano and bitter orange or lime juice.
                    </p>
                    <h3 style={h3}>$ 0.00</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers6.jpg" alt="" />
                    <h2 style={h2}>Flautas</h2>
                    <p style={parag}>
                        Corn tortilla flauta filled with seasoned chicken, topped with a pickled
                        cabbage relish or lettuce, pico de gallo, home made tomato sauce.
                    </p>
                    <h3 style={h3}>$ 7.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers7.jpg" alt="" />
                    <h2 style={h2}>Burritos</h2>
                    <p style={parag}>
                        Beef fajitas, ground beef or chicken, refried beans, cheese, lettuce, pico
                        de gallo, & sour cream wrapped in a flour tortilla.
                    </p>
                    <h3 style={h3}>$ 7.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers5.jpg" alt="" />
                    <h2 style={h2}>Nachos</h2>
                    <p style={parag}>
                        Nachos are popular from Honduras to New York, they are special in these days of
                        quarantine, when we spend time in front of the television with our family. For
                        our topping, The most popular are beans accompanied with guacamole.
                    </p>
                    <h3 style={h3}>$ 12.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers8.jpg" alt="" />
                    <h2 style={h2}>Quesadilla</h2>
                    <p style={parag}>
                        Chicken or pork, cheese & pico de gallo.
                    </p>
                    <h3 style={h3}>$ 6.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers9.jpg" alt="" />
                    <h2 style={h2}>Tortas</h2>
                    <p style={parag}>
                        Chicken or pork, jam, cheddar cheese, lettuce, tomato, onion, house dressing
                        served with incurtido.
                    </p>
                    <h3 style={h3}>$ 4.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/appetizers10.jpg" alt="" />
                    <h2 style={h2}>Tostadas</h2>
                    <p style={parag}>
                        Crispy corn tortilla with meat of your choice (pastor, chicken or ground beef).
                        It is served with pico de gallo, house dressing and guacamole.
                    </p>
                    <h3 style={h3}>$ 3.00</h3>
                </figure>
            </div>
        </div>
    );

};


