import React from "react";

export default function Meals() {

    const Menu = {
        width: '100%',
        height: '2610px',
        background: 'url(assets/bg-patt.png)'
    };

    const divImg = {
        width: '80%',
        height: 'auto',
        margin: '0 10%',
        padding: '50px 4%',
        background: '#d0cad3',
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
        height: '300px',
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
                <h1 style={h1}>Meals</h1>
                <figure style={fig}>
                    <img style={img} src="assets/meals3.jpg" alt="" />
                    <h2 style={h2}>Breakfast and Dinner</h2>
                    <p style={parag}>
                        It served with two eggs, plantain, refried beans, sausage or bacon, fresh
                        cheese, sour cream and two tortillas.
                    </p>
                    <h3 style={h3}>$ 7.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals9.jpg" alt="" />
                    <h2 style={h2}>Typical Dish</h2>
                    <p style={parag}>
                        Beef, BBQ chicken, pork chop, sausage, plantain, pico de gallo, avocado, tortilla
                        chips, fresh cheese.
                    </p>
                    <h3 style={h3}>$ 16.00</h3>
                </figure>
                
                <figure style={fig}>
                    <img style={img} src="assets/meals10.jpg" alt="" />
                    <h2 style={h2}>Garlic Shrimp (Lunch & Dinner)</h2>
                    <p style={parag}>
                        Garlic Shrimp (6) served with rice, lettuce salad, pico de gallo, avocado and
                        two tortillas.
                    </p>
                    <h3 style={h3}>$ 9.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals11.jpg" alt="" />
                    <h2 style={h2}>Pork Chop (Lunch & Dinner)</h2>
                    <p style={parag}>
                        Pork Chop (2 pieces) served with rice, lettuce salad, pico de gallo, avocado and
                        two tortillas.
                    </p>
                    <h3 style={h3}>$ 8.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals12.jpg" alt="" />
                    <h2 style={h2}>Grilled Sirloin (Lunch & Dinner)</h2>
                    <p style={parag}>
                        Grilled Sirloin served with rice, lettuce salad, pico de gallo, avocado and
                        two tortillas.
                    </p>
                    <h3 style={h3}>$ 7.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals13.jpg" alt="" />
                    <h2 style={h2}>Beef Fajitas (Lunch & Dinner)</h2>
                    <p style={parag}>
                        Beef Fajitas (Sirloin beef with green pepper, red pepper, yellow pepper
                        and onions) served with rice, lettuce salad, pico de gallo, avocado and
                        two tortillas.
                    </p>
                    <h3 style={h3}>$ 7.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals14.jpg" alt="" />
                    <h2 style={h2}>BBQ Chicken (Lunch & Dinner)</h2>
                    <p style={parag}>
                        BBQ Chicken served with rice, lettuce salad, pico de gallo, avocado and
                        two tortillas.
                    </p>
                    <h3 style={h3}>$ 6.99</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals7.jpg" alt="" />
                    <h2 style={h2}>Mexican Tacos (Corn Tortilla)</h2>
                    <p style={parag}>
                        Three options to select:<br />
                        1.- Chicken,<br />
                        2.- Ground Beef,<br />
                        3.- Pastor,<br />
                        This specialty is served with pico de gallo and spicy sauce.
                    </p>
                    <h3 style={h3}>$ 3.50</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals8.jpg" alt="" />
                    <h2 style={h2}>Mexican Tacos (Flour Tortilla)</h2>
                    <p style={parag}>
                        Three options to select:<br />
                        1.- Chicken,<br />
                        2.- Ground Beef,<br />
                        3.- Pastor,<br />
                        This specialty is served with lettuce, pico de gallo, cheese and
                        sour cream.<br />
                    </p>
                    <h3 style={h3}>$ 4.00</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals4.jpg" alt="" />
                    <h2 style={h2}>Seafood Soup</h2>
                    <p style={parag}>
                        (Weekend Specialty)
                        The seafood soup is a delicious and traditional dish that is widely prepared in the
                        coastal areas of Honduras thanks to the high quality of its seafood, but its
                        preparation has become very famous in many other parts of the country. This dish is
                        extremely nutritious and has a flavor irresistible, it is perfect for a special
                        occasion or for a lunch to share with others.
                    </p>
                    <h3 style={h3}>$ 0.00</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals5.jpg" alt="" />
                    <h2 style={h2}>Beef Soup</h2>
                    <p style={parag}>
                        (Weekend Specialty)
                        Due to the culinary diversity that exists in Honduras, this beef broth recipe may
                        probably be different from the one you know. Depending on the region where you are,
                        it is likely that they serve it with or without cabbage and with or without color.
                    </p>
                    <h3 style={h3}>$ 0.00</h3>
                </figure>
                <figure style={fig}>
                    <img style={img} src="assets/meals6.jpg" alt="" />
                    <h2 style={h2}>Tripe Soup</h2>
                    <p style={parag}>
                        (Weekend Specialty)
                        The tripe soup or better known as "Sunday soup" is an ideal combination for demanding
                        palates, since this dish provides a delicious seasoning. It is an ideal soup to share
                        with the family at noon, Hondurans really enjoy soups, but one of our favorites is
                        this magnificent mondongo soup.
                    </p>
                    <h3 style={h3}>$ 0.00</h3>
                </figure>
            </div>
        </div>
    );

};


