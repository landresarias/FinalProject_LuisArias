
import React from "react";


export default function About() {

    const About = {
        width: '100%',
        margin: '0 auto',
        background: 'url("assets/bg-patt.png") repeat scroll 0 0 rgba(0,0,0,0.8)',
    };

    const About2 = {
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        boxShadow: '20px 0px 10px rgba(0, 0, 0, .5)'
    };

    const block1 = {
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '800px',
        margin: '0 auto',
        padding: '0',
        backgroundImage: 'url("assets/about1.jpg")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
        overflow: 'hidden'
    };

    const block2 = {
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '800px',
        margin: '0 auto',
        padding: '0',
        backgroundImage: 'url("assets/restaurantes.png")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
        overflow: 'hidden'
    };

    const block3 = {
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '800px',
        margin: '0 auto',
        padding: '0',
        backgroundImage: 'url("assets/latam-exotic-food.jpg")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no - repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        overflow: 'hidden'
    };

    const block4 = {
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '800px',
        margin: '0 auto',
        padding: '0',
        backgroundImage: 'url("assets/gastronomia7.jpg")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
        overflow: 'hidden'
    };

    const h1 = {
        width: '100%',
        marginTop: '300px',
        backgroundColor: '#02223a',
        color: 'rgba(255, 255, 255, .5)',
        fontSize: '5rem',
        fontWeight: '800',
        opacity: '0.76',
        textAlign: 'center',
        textShadow: '1px 1px 1px #666',
        textTransform: 'uppercase',
        display: 'block'
    };

    /*const h2 = {
        marginTop: '80px',
        color: '#fff',
        fontSize: '5rem',
        fontWeight: '800',
        textAlign: 'center',
        textShadow: '1px 1px 1px #ccc',
        textTransform: 'uppercase',
        opacity: '0.85'
    };*/

    const parag = {
        maxWidth: '80%',
        margin: '18% auto',
        padding: '30px 50px',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        color: '#000',
        fontSize: '1.5em',
        fontFamily: 'Comic Sans MS',
        borderRadius: '5px'
    };

    return (
        <div style={About}>
            <div style={About2 }>
                <section style={block1}>
                    <img id="logo" src="assets/Artboard.png" alt=""/>
                    <h1 style={h1}>ABOUT US</h1>
                </section>
                <section style={block2}>
                    <p style={parag}>
                        Delicias Latin Restaurant is a latin restaurant in the heart of downtown
                        London. Boasting London's most elegant dining room, we are thrilled to offer a community 
                        driven experience to our locals and tourist alike. Whether it is a quick lunch-in, weekend brunch 
                        or elevated dinner service. We are thrilled to bring menus that inspire and fuel every part of 
                        your day. With tipically driven dishes designed with sustainability and accessibility in mind, 
                        we pride ourselves on highlighting inspired menus with quality ingredients all year long. 
                    </p>
                </section>
                <section style={block3}>
                    <p style={parag}>
                        We are serving up delicious latin American food six days a week. Whether it be dinner for
                        family, an intimate date night, a gathering of friends, or a few appetizers and drinks. We are
                        happy to cater to any needs.
                    </p>
                </section>
                <section style={block4}>
                    <p style={parag}>
                        Our mission is to bring flavor to people's lives and give our employees personal and professional
                        development opportunities to get them closer to their career goals.We are always looking to add
                        talent to our restaurant teams-managers, line servers, cooks, and more to bring new ideas and
                        job skills to the table.
                    </p>
                </section>
            </div>
        </div>
    );
};


