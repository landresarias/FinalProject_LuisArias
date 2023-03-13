import React, { useRef, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ReactModal from 'react-modal';
import Popup from './PopupOrderOL';

export default function OrderOnline2() {

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

    const Form1 = {
        position: 'fixed',
        zIndex: '2',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.7)',
    };

    const Form2 = {
        position: 'fixed',
        zIndex: '3',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: '#fff',
        color: '#666',
        fontFamily: 'sans-serif',
        fontWeight: '700',
        padding: '50px',
        borderRadius: '10px',
    };

    //**For filling up an array list div*//
    //***********************************//
    const [prodArray, setProdArray] = useState([]);
    const [isOpen, setIsOpen] = useState('false');

    useEffect(() => {
        const getCat = async () => {
            const res = await fetch('http://localhost/ws-login/product_list.php');
            const getData = await res.json();
            setProdArray(getData);
            console.log(getData);
        }
        getCat();
        setIsOpen('true');
    }, []);

    //**For creating a login form*//
    //****************************//
    const URL_LOGIN = 'http://localhost/ws-login/login.php';
    const [authMode, setAuthMode] = useState('false');
    const refUser = useRef(null);
    const refPassword = useRef(null);

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
    };

    const Login = (e) => {
        e.preventDefault();
        changeAuthMode()
        setIsOpen('false')
    }

    const handleSignin = async (e) => {
        e.preventDefault();
        const data = {
            'user': refUser.current.value,
            'password': refPassword.current.value
        };
        const responseJson = await getData(URL_LOGIN, data);
        console.log('event response: ', responseJson.connected);
        if (responseJson.connected) {
            //alert("You are login now - " + responseJson.user + " - " + responseJson.password);
            setIsOpen('false');
            setAuthMode('false');
        }
        else {
            alert("User or password not found");
        }
    };

    const getData = async (url, data) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'aplication/json'
            }
        });
        const json = await resp.json();
        return json;
    };

    //**For creating a client register form*//
    //**************************************//
    const URL_CLIENTREG = 'http://localhost/ws-login/client_regis.php';
    const refNameCR = useRef(null);
    const refPhoneCR = useRef(null);
    const refAddressCR = useRef(null);
    const refUserCR = useRef(null);
    const refPasswordCR = useRef(null);
    
    const onSubmitCR = () => {
        const data1 = {
            'name': refNameCR.current.value,
            'phone': refPhoneCR.current.value,
            'address': refAddressCR.current.value,
            'user': refUserCR.current.value,
            'password': refPasswordCR.current.value,
        };
        if (data1.name === "" || data1.phone === "" || data1.address === "" || data1.user === ""
            || data1.password === "") {
            alert('There are empty text fields');
        }
        else {
            //  I need to add a restriction (if) email already exist......
            //....
            //....
            getData(URL_CLIENTREG, data1);
            setIsOpen('false');
            setAuthMode('signin');
        }
    };

    const ClientRegData = async (url, data2) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data2),
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'aplication/json'
            }
        });
        const json = await resp.json();
        return json;
    };

    //**For creating a product detail form*//
    //**************************************//
    const URL_PRODDET = 'http://localhost/ws-login/product_detail.php';
    const refID = useRef(null);
    const [prodDet, setProdDet] = useState([]);

    const onSubmitPD = async () => {
        alert('ajaaaaaaaa')
        const data = {
            'id': refID.current.value,
            //'id': getProd.PROD_ID,
        };
        const responseJson = await getData(URL_PRODDET, data);
        if (responseJson.connected) {
            //alert("You are login now - " + responseJson.name + " - " + responseJson.price)
            setProdDet(responseJson);
        }
        else {
            alert("User or password not found")
        }
    };

    const getData1 = async (url, data2) => {
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
        <div style={Order}>

            <div style={ProdList} >
                { prodArray.map((getProd) =>
                    <div style={ImgCont} >
                        <img src={'../assets/' + getProd.PROD_IMG} style={Img} onClick={ onSubmitPD} />
                        <span className='form-control' type='text' style={Name}>{getProd.PROD_NAME}</span>
                        <label className='form-control' type='text' style={Price}>{'$' + getProd.PROD_PRICE}</label>
                        <label ref={refID} className='form-control' type='text' style={{marginTop: '80px',color: '#fff', fontSize:'0.5rem',border: '0'}}>{getProd.PROD_ID}</label>
                    </div>
                )};
            </div>

            <div className="col-sm-7" >
                {isOpen === "true" && (
                    <div className="card" style={Form1}>
                        <div className="card-bod" style={Form2}>
                            <h3>Order Online</h3>
                            <h5>TakeOut / Delivery</h5>
                            <p style={{fontSize: '1rem'}}>
                                By logging in as a customer you can get points<br/>
                                for purchases, promotions, discounts and much more.
                            </p>
                            <button className='btn btn-info btn-lg btn-block' onClick={Login} style={{
                                margin: '10px',background: '#000094', color: '#fff'}}>LOG IN / REGISTER </button>
                            <button className='btn btn-info btn-lg btn-block' onClick={() => setIsOpen('false')}
                                style={{margin: '10px', background: '#009400', color: '#fff'}}>
                                ENTER AS A GUEST </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="col-sm-7">
                {authMode === "signin" && (
                    <div className="Auth-form-container" style={Form1}>
                        <form className="Auth-form" style={Form2}>
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign In</h3>
                                <div className="text-center" style={{fontSize: '1.3rem'}}>Not registered yet?{" "}
                                    <span className="link-primary" onClick={changeAuthMode}> - Sign Up</span>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="email" className="form-control mt-1" placeholder="Enter email"
                                        ref={refUser} required />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="password" className="form-control mt-1" placeholder="Enter password"
                                        ref={refPassword} required />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary" onClick={handleSignin}>Submit</button>
                                </div>
                                <p className="text-center mt-2" style={{ fontSize: '1.3rem' }}>Forgot <a href="#">password?</a></p>
                            </div>
                        </form>
                    </div>
                )}
            </div>

            <div className="col-sm-7">
                {authMode === "signup" && (
                    <div className="Auth-form-container" style={Form1}>
                        <form className="Auth-form" style={Form2}>
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign Up</h3>
                                <div className="text-center">Already registered?{" "}
                                    <span className="link-primary" onClick={changeAuthMode}>Sign In</span>
                                </div>
                                <div className="form-group mt-3">
                                    <input className="form-control mt-1" type="text" ref={refNameCR} placeholder="Full Name" required/>
                                    <input className="form-control mt-1" type="text" ref={refPhoneCR} placeholder="Phone" required/>
                                    <input className="form-control mt-1" type="text" ref={refAddressCR} placeholder="Address" required/>
                                    <input className="form-control mt-1" type="email" ref={refUserCR} placeholder="Email Address" required/>
                                    <input className="form-control mt-1" type="password" ref={refPasswordCR} placeholder="Password" required/>
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary" onClick={onSubmitCR}>Submit</button>
                                </div>
                                <p className="text-center mt-2">
                                    Forgot <a href="#">password?</a>
                                </p>
                            </div>
                        </form>
                    </div>
                )}
            </div>

            <div className="col-sm-7">
                
                {/*<div className="Auth-form-container" style={Form1}>
                        <form className="Auth-form" style={Form2}>
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign Up</h3>
                                <div className="text-center">Already registered?{" "}
                                    <span className="link-primary" onClick={changeAuthMode}>Sign In</span>
                                </div>
                                <div className="form-group mt-3">
                                    <img src={'../assets/' + prodDet.image} style={Img} />
                                    <span className='form-control' type='text' style={Name}>{prodDet.name}</span>
                                    <label className='form-control' type='text' style={Price}>{prodDet.price}</label>
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary" onClick={''}>Submit</button>
                                </div>
                                <p className="text-center mt-2">
                                    Forgot <a href="#">password?</a>
                                </p>
                            </div>
                        </form>
                    </div>*/}
               
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


