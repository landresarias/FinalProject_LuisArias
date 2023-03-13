
import React from "react";

export default function Home() {

    const Text1 = {
        width: '100%',
        height: '200px',
        padding: '40px 12%',
        background: 'rgba(236, 194, 132, 0.2)',
        fontSize: '1.7rem',
        fontWeight: '900',
        fontFamily: "'Times New Roman', Times, serif",
        textAlign: 'center',
        color: 'rgb(107, 13, 13)'

    };

    const Text2 = {
        width: '100%',
        height: '800px',
        padding: '21% 20%',
        backgroundImage: `url(/assets/gastronomia5.png)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'rgba(236, 194, 132, 1)',
        textAlign: 'center',
        textShadow: '1px 1px 2px #000, 0 0 25px rgb(0, 122, 0), 0 0 5px rgb(0, 0, 0)',
        fontFamily: "'Comic Sans MS'",
        fontSize: '1.5rem',
        fontWeight: '700'
    };

    const Text3 = {
        width: '100%',
        height: '800px',
        padding: '13% 20%',
        backgroundImage: `url(/assets/housespec2.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'rgba(236, 194, 132, 1)',
        textAlign: 'center',
        textShadow: '1px 1px 2px #000, 0 0 25px rgb(0, 122, 0), 0 0 5px rgb(0, 0, 0)',
        fontFamily: "'Comic Sans MS'",
        fontSize: '1.5rem',
        fontWeight: '700',
        /*border: '10px solid #595f57',*/
    };

    const Text4 = {
        width: '100%',
        height: '800px',
        padding: '13% 20%',
        backgroundImage: `url(/assets/tamales.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'rgba(236, 194, 132, 1)',
        textAlign: 'center',
        textShadow: '1px 1px 2px #000, 0 0 25px rgb(0, 122, 0), 0 0 5px rgb(0, 0, 0)',
        fontFamily: "'Comic Sans MS'",
        fontSize: '1.5rem',
        fontWeight: '700',
        /*border: '10px solid #595f57'*/
        borderTop: '25px solid #2a4d15'
    };

    const Text5 = {
        width: '100%',
        height: '800px',
        padding: '13% 20%',
        backgroundImage: `url(/assets/horchata.png)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'rgba(236, 194, 132, 1)',
        textAlign: 'center',
        textShadow: '1px 1px 2px #000, 0 0 25px rgb(0, 122, 0), 0 0 5px rgb(0, 0, 0)',
        fontFamily: "'Comic Sans MS'",
        fontSize: '1.5rem',
        fontWeight: '700',
        /*border: '10px solid #595f57'*/
        borderTop: '25px solid #2a4d15'
    };

    const Text6 = {
        width: '100%',
        height: '800px',
        padding: '13% 20%',
        backgroundImage: `url(/assets/canecho.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'rgba(236, 194, 132, 1)',
        textAlign: 'center',
        textShadow: '1px 1px 2px #000, 0 0 25px rgb(0, 122, 0), 0 0 5px rgb(0, 0, 0)',
        fontFamily: "'Comic Sans MS'",
        fontSize: '1.5rem',
        fontWeight: '700',
        /*border: '10px solid #595f57',*/
        borderTop: '25px solid #2a4d15'
    };

    return (
        <div>
            <div style={Text1}>
                <p>We dedicate ourselves to provide out customers with quality food, great
                    service and an excellent atmosphere, leaving our customers with ZERO REGRET
                    on every visit.
                </p>
            </div>
            <div style={Text2}>
                <div>
                    <p>Our specialty is the most delicious typical Central American food.</p>

                </div>
            </div>
            <div style={Text1}>
                <p>
                    We are pride Ourselves in offering a combination of both delicious, authentic &
                    healthy Centroamerica foods with fast, friendly and reliable customer service.
                    We use the freshest ingredients and the best service to ensure your every visit
                    will never be forgotten.
                </p>
            </div>
            <div style={Text3}>
                <h1>BALEADAS</h1>
                <p>
                    This typical dish of Honduran cuisine is not suitable for coeliacs. It is a
                    wheat flour tortilla that is folded and filled with beans and other ingredients
                    of your choice, such as grated cheese, ham or sour cream. It is very typical at
                    breakfast time, although European customs coincide more with using this dish as
                    a pancake or taco-style dinner.
                </p>   
            </div>
            <div style={Text4}>
                <h2>NACATAMALES</h2>
                <p>
                    This typical dish Latin America cuisine is also made in Honduras. It consists
                    of wrapping a dough made with corn, meat, assorted vegetables and rice in banana
                    leaves. In addition, many more ingredients can be added to suit the consumer. It
                    is a dish consumed on special occasions, such as holidays, Christmas Day, etc.
                </p>
            </div>
            <div style={Text5}>
                <h2>HORCHATA</h2>
                <p>
                    In Honduras, a nectar is prepared that with its flavor is capable of enchanting
                    the palate of any person on the face of the earth and surely if aliens existed,
                    they too would fall in love with the magnificence of such a seductive drink. Its
                    perfect combination of ingredients make it almost irresistible; A sip of this elixir
                    is like holding the keys to heaven. Best of all, is that horchata is very nutritious
                    due to all the vitamins that its components have, ideal for a snack or to accompany
                    our favorite food, and although it takes a bit of a long process, the sensation of
                    having a drop in our mouth of her, well worth it.
                </p>
            </div>
            <div style={Text6}>
                <h2>CANECHO SOUP</h2>
                <p>
                    This dish is a delicatessen . It is a seafood soup . For its preparation, as many
                    fresh crabs as there are diners are used. The whole crab is added to a broth in
                    which vegetables and fish heads are boiled to give it more flavor of the sea, which
                    is also spiced.
                </p>
            </div>

        </div>
    );
};


