import React, {useRef } from "react";
import { useState } from "react";

export default function Borrar() {

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

    const URL_PRODDET = 'http://localhost/ws-login/product_detail.php';
    const refID = useRef(null);
    const [prodArray, setProdArray] = useState([]);

    const onSubmit = async () => {
        const data = {
            'id': refID.current.value,
        };
        const responseJson = await getData(URL_PRODDET, data);
        if (responseJson.connected) {
            //alert("You are login now - " + responseJson.name + " - " + responseJson.price)
            setProdArray(responseJson);
        }
        else {
            alert("User or password not found")
        }
    };

    const getData = async (url, data2) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data2),
            headers: {
                'Content-Type': 'aplication/json'
            }
        });
        const json = await resp.json();
        return json;
    };

    return (
        <div style={Menu}>
            <div>
                <input type='text' ref={refID} placeholder='Enter product id'></input>
                <button type="submit" onClick={onSubmit}>Enter</button>
            </div>
            <div >
                <img src={'../assets/' + prodArray.image} style={img} />
                <span className='form-control' type='text' style={h2}>{prodArray.name}</span>
                <label className='form-control' type='text' style={h3}>{prodArray.price}</label>
            </div>
        </div>
    )
};













/*const onSubmit = async () => {
       const getData = async () => {
           const res = await fetch('http://localhost/ws-login/product_list.php');
           const getAllData = await res.json();
           setProd(getAllData);
           console.log(getAllData);
       }
       getData();
   };

   return (
       
       <div style={Menu}>
           <div>
               
               <button type="submit" onClick={onSubmit}>Enter</button>
           </div>
           <div >
               {prod.map((getProd) =>
                   <div style={divImg} >
                       <img src={'../assets/' + getProd.PROD_IMG} style={img} />
                       <span className='form-control' type='text' style={h2}>{getProd.PROD_NAME}</span>
                       <label className='form-control' type='text' style={h3}>{'$' + getProd.PROD_PRICE}</label>
                   </div>
               )};
           </div>
       </div>
   );*/

