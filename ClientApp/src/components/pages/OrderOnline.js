import React, { useRef, useState, useEffect } from "react";
import ReactModal from 'react-modal';
import Popup from './PopupOrderOL';

export default function OrderOnline() {

    const Order = {
        width: '100%',
        height: 'auto',
        //background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        backgroundSize: 'content',
        paddingTop: '20px',
        color: '#fff',
        fontSize: '1.5rem'
    };

    const ButList = {
        position: 'fixed',
        width: '28.5%',
        background: '#333',
        float: 'left',
    };

    const ProdList = {
        width: '70%',
        padding: '20px 8%',
        //background: '#333',
        float: 'right',
    };

    const ImgCont = {
        width: '30%',
        height: '320px',
        marginRight: '3%',
        marginBottom: '20px',
        padding: '5px 0',
        //background: '#e3e3e3',
        textAlign: 'center',
        border: '2px solid #e2e2e2',
        display: 'inline-block',
        cursor: 'pointer',
    }

    const Img = {
        width: '80%',
        height: '150px',
        marginTop:'10px',
        borderRadius: '10px',
        //float: 'left'
    };

    const Name = {
        //position: 'absolute',
        //top: '10px',
        width: '100%',
        height: '35px',
        paddingTop: '30px',
        //background: 'rgba(228, 227, 227, 0.7)',
        color:'#940000',
        fontSize: '1rem',
        fontWeight: '700',
        outline: 'none',
        border: '0',
        //float: 'left',
        //display: 'flex',
        //alignItems: 'center',
        //textAlign: 'center',
        
        //left: '10px'
     
    };

    const Detail = {
        width: '48%',
        height: '160px',
        background: '#e3e3e3',
        overflow: 'auto',
        display: 'flex',
        //alignItems: 'center',
        //textOverflow: 'ellipsis',
        float: 'left',
    };

    const Price = {
        width: '30%',
        height: '60px',
        paddingTop: '20%',
        paddingRight: '30%',
        //background: '#e3e3e3',
        textAlign: 'right',
        fontSize: '1.2rem',
        fontWeight: '600',
        border: '0',
        float: 'right',
    };

    const Buttons = {
        position: 'relative',
        width: '10%',
        height: '160px',
        padding: '5px 0',
        background: '#940000',
        display: 'inline-block',
        textAlign: 'center',
        float: 'left',
    };

    const AddButton = {
        width: '60%',
        height: '35%',
        margin: '5px 8px',
        //marginBottom: '20px',
        fontSize: '1.5rem',
        borderRadius: '50px',
        //float: 'left',
        AlignItems: 'center',
        justifyContent: 'center',
    };

    const CountLabel = {
        width: '60%',
        height: '25%',
        background: '#1e8336',
        color: '#fff',
    };

    /*---Setup actions for filling up the product list and calling a Popup form(PopupOrderOL)---*/
    const [prodArray, setProdArray] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const getCat = async () => {
            const res = await fetch('http://localhost/ws-login/productList.php');
            const getData = await res.json();
            setProdArray(getData);
            console.log(getData);
        }
        getCat();
        setIsOpen(true);
    }, []);

    /**For creating a login form*/
    const c = {
        position: 'fixed',
        width: '50%',
        height: '400px',
        color: '#940000',
        float: 'left',
    }

    const b = () => {
        //alert('Holaaaa')
        (<div style={c}>Holaaaaaaa</div>)
    }

    return (
        <div style={Order}>
            <Popup open={isOpen} close={() => setIsOpen(false)}>
                <h2>ORDER ONLINE</h2>
                <h4>TakeOut / Delivery</h4>
                By logging in as a customer you can get points
                for purchases, promotions, discounts and much more.
            </Popup>
            <div style={ButList} >
                <h1>Left side</h1>
                <button href='' onClick=''>APPETIZERS</button>
                <button href='' onClick=''>MEALS</button>
                <button href='' onClick=''>SPECIALTY</button>
                <button href='' onClick=''>COMBOS</button>
                <button href='' onClick=''>BEBERAGES</button>
            </div>
            <div style={ProdList} >
                {prodArray.map((getProd) =>
                    
                    <div style={ImgCont} >
                        
                        <img src={'../assets/' + getProd.PROD_IMG} style={Img} />
                        <span className='form-control' type='text' style={Name}>{getProd.PROD_NAME}</span>
                        <label className='form-control' type='text' style={Price}>{'$' + getProd.PROD_PRICE}</label>
                        <button onClick={b}>boton</button>
                    </div>
                )}
                
            </div>
            
        </div>
    );

};




/*
 * <Popup open={isOpen} close={() => setIsOpen(false)}>There are empty fields. Records
                            won't be saved in the DB.</Popup>
 
 * <Popup open={isOpen} close={() => setIsOpen(false)}>
    <h2>ORDER ONLINE</h2>
    <h4>TakeOut / Delivery</h4>
    By logging in as a customer you can get points
    for purchases, promotions, discounts and much more.
</Popup>*/



/*---creating a counter to increment a variable that stores the amount of items added 
    to the shopping car-- -
    const [counter, setCounter] = useState(0);

    const handleSubmit = (butt) => {
        if (butt == 'IncreaseBut' && counter >= 0) {
            setCounter(counter + 1);
        }
        if (butt == 'DecreaseBut' && counter >= 0) {
            setCounter(counter - 1);
        }
        alert(counter);
    };*/


/*  Usando otra forma sencilla de una ventana modal(popup)
 
<ReactModal isOpen={isOpen} contentLabel="Example Modal"
//onRequestClose={() => setIsOpen(false)}}
>
    <h1>This is the content of the modal.</h1>
    <div>
        <button className='btn btn-info btn-lg btn-block' onClick={() => setIsOpen(true)}
            style={AddButton}>LOG IN / REGISTER </button>
    </div>
    <div>
        <button className='btn btn-info btn-lg btn-block' onClick={() => setIsOpen(false)} style={AddButton}>
            ENTER AS A GUEST </button>
    </div>
</ReactModal>
*/








/*<p className='form-control' type='text' style={Detail} >{getProd.PROD_DETAIL}</p>

<div style={Buttons}>
                            <button href='/' className='btn btn-success' onClick={() => handleSubmit('IncreaseBut')}
                                style={AddButton}> + </button>
                            <label style={CountLabel}>{counter}</label>
                            <button href='/' className='btn btn-success' onClick={() => handleSubmit('DecreaseBut')}
                                style={AddButton}> - </button>
                        </div>*/

/*
const imgGallery = [
        { src: 'assets/appetizers2.png', title: 'img2' },
        { src: 'assets/appetizers3.png', title: 'img3' },
        { src: 'assets/appetizers4.jpg', title: 'img4' },
        { src: 'assets/appetizers5.jpg', title: 'img5' },
        { src: 'assets/appetizers6.jpg', title: 'img5' },
        { src: 'assets/appetizers7.jpg', title: 'img5' },
    ];
  
  {
    imgGallery.map((index) =>
        <img src={index.src} title={index.title} alt='Images' height='250' width='250' style={{ border: 'solid', backgroundColor: 'gray' }} />
    )
}
*/


