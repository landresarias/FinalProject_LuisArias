import React, { useRef, useState, useEffect } from "react";
import Popup from './PopupForm';

export default function Reservation() {

    const Reserv = {
        width: '100%',
        height: '750px',
        paddingTop: '20px',
        background: 'url(assets/bg-patt.png)',
        //background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        backgroundSize: 'content',
        color: '#000',
        fontSize: '1.5rem',
    };

    const Form = {
        width: '40%',
        margin: '30px auto',
        padding: '30px 1%',
        background: '#000',
        border: 'solid',
        textAlign: 'center',
        borderRadius: '10px',
    }

    const h2 = {
        color: '#fff'
    };

    const Inputs = {
        width: '100%',
        paddingTop: '30px',
        fontSize: '1.2rem',
        border: '0px',
        borderBottom: '1px solid'
    }

    const But = {
        position: 'relative',
        zIndex: 1,
        width: '50%',
        margin: '20px auto',
    };

    const Buttons = {
        width: '47%',
        marginLeft: '27%',
        padding: '20px 10%',
        background: '#0b7e57',
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: '700',
        borderRadius: '10px',
    };

    //--------- Sending data to Mysql DB ----------//
    const URL_LOGIN = 'http://localhost/ws-login/reservation.php';
    const refPartysize = useRef(null);
    const refDate = useRef(null);
    const refTime = useRef(null);
    const refOccasion = useRef(null);
    const refName = useRef(null);
    const refPhone = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        refPartysize.current.focus();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const data1 = {
            'partysize': refPartysize.current.value,
            'date': refDate.current.value,
            'time': refTime.current.value,
            'occasion': refOccasion.current.value,
            'name': refName.current.value,
            'phone': refPhone.current.value,
        };
        if (data1.partysize === "" || data1.date === "" || data1.time === "" || data1.occasion === ""
            || data1.name === "" || data1.phone === "") {
            setIsOpen(true);
        }
        else {
            sendingData(URL_LOGIN, data1);
            refPartysize.current.value = '';
            refDate.current.value = '';
            refTime.current.value = '';
            refOccasion.current.value = '';
            refName.current.value = '';
            refPhone.current.value = '';
            refPartysize.current.focus();
        
        }    
    };
    
    const sendingData = async (url, data2) => {
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

    return (
        <div style={Reserv}>
            <form className='input-group mb-3' style={Form}>
                <h2 className='card-header text-center card pt-4 col-sm-12 offset-0 mt-8' 
                    style={h2}>Make a Reservation</h2>
                <div className='form-control input-group mb-3 input-group-prepend'>
                    <input className='form-control' style={Inputs} name='partySize' type='text'
                        ref={refPartysize} placeholder='Party size' />
                    <input className='form-control' style={Inputs} name='date' type='date'
                        ref={refDate} placeholder='Reservation date' />
                    <select className='form-control' style={Inputs} name='time' type='text'
                        ref={refTime} placeholder='Reservation time' >
                        <option value="">Choose a time</option>
                        <option value="12:00">12:00</option>
                        <option value="1:00">1:00</option>
                        <option value="2:00">2:00</option>
                        <option value="3:00">3:00</option>
                        <option value="4:00">4:00</option>
                        <option value="5:00">5:00</option>
                        <option value="6:00">6:00</option>
                        <option value="7:00">7:00</option>
                        <option value="8:00">8:00</option>
                        <option value="9:00">9:00</option>
                    </select>
                    <select className='form-control' style={Inputs} name='occasion' type='text'
                        ref={refOccasion} placeholder='Special Occasion' >
                        <option value="">Choose an occasion</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Other">Other</option>
                    </select>
                    <input className='form-control' style={Inputs} name='name' type='text'
                        ref={refName} placeholder="Name" />
                    <input className='form-control' style={Inputs} name='phone' type='text'
                        ref={refPhone} placeholder='Phone number' />
                </div>
            </form>  
            <Popup open={isOpen} close={() => setIsOpen(false)}>There are empty fields. Records
                won't be saved in the DB.</Popup>
            <div style={But}>
                <button className='btn btn-info btn-lg btn-block' type='submit' style={Buttons}
                    onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );       
};












/*import React, { useState } from "react";
import Popup from './PopupForm'

export default function Reservation() {

    const Reserv = {
        width: '100%',
        height: '750px',
        background: 'url(assets/bg-patt.png)',
        //background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        backgroundSize: 'content',
        paddingTop: '20px',
        color: '#000',
        fontSize: '1.5rem',
    };

    const Form = {
        width: '40%',
        margin: '30px auto',
        padding: '30px 1%',
        background: '#000',
        border: 'solid',
        textAlign: 'center',
        borderRadius: '10px',
    }

    const h2 = {
        color: '#fff'
    };

    const Inputs = {
        width: '100%',
        paddingTop: '30px',
        fontSize: '1.2rem',
        border: '0px',
        borderBottom: '1px solid'
    }

    const But = {
        //position: 'relative',
        //zIndex: 1,
        width: '40%',
        margin: '20px auto'
    };

    const Buttons = {
        width: '47%',
        marginLeft: '27%',
        padding: '20px 30px',
        background: '#0b7e57',
        color: '#000',
        borderRadius: '10px',
    };

    //--------- Sending data to Mysql DB ----------//
    const URL_LOGIN = 'http://localhost/ws-login/insert.php';
    const [Party, setParty] = useState('');
    const [Date, setDate] = useState('');
    const [Time, setTime] = useState('');
    const [Occasion, setOccasion] = useState('');
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState(''); 

    const partyHandleChange = (e) => { setParty(e.target.value); };
    const dateHandleChange = (e) => { setDate(e.target.value); };
    const timeHandleChange = (e) => { setTime(e.target.value); };
    const occasionHandleChange = (e) => { setOccasion(e.target.value); };
    const nameHandleChange = (e) => { setName(e.target.value); };
    const phoneHandleChange = (e) => { setPhone(e.target.value); };
    
    const onSubmit = () => {
        const data1 = {
            'partysize': Party,
            'date': Date,
            'time': Time,
            'occasion': Occasion,
            'name': Name,
            'phone': Phone,
        };
        if (data1.partysize === "" || data1.date === "" || data1.time === "" || data1.occasion === "" ||
            data1.name === "" || data1.phone === "" ) {
            alert("There are empty fields. Records won't be saved in the DB.");
        }
        else {
            sendingData(URL_LOGIN, data1);
            setParty('');
            setDate('');
            setTime('');
            setOccasion('');
            setName('');
            setPhone('');
        }
        *data1.partysize === "" || data1.date === "" || data1.time === "" || data1.name === "" ||
            data1.phone === "" || data1.table === "" ? alert("There are empty fields. Records won't be saved in the DB.") :
            sendingData(URL_LOGIN, data1);*
        console.log("Recibe del formulario y lo envia al metodo sendingData: ");
        console.log(data1.name);
    };

    const sendingData = async (url, data2) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data2),
            headers: { 'Content-Type': 'aplication/json' }
        });
        const json = await resp.json();
        console.log("Recibe del metodo onSubmit y lo envia a la BD: ")
        console.log(json);
    };

    const cancelRes = () => {
        setParty('');
        setDate('');
        setTime('');
        setName('');
        setPhone('');
        setOccasion('');
    };

    return (
        <div style={Reserv}>
            <div className='input-group mb-3' style={Form}>
                <h2 className='card-header text-center card pt-4 col-sm-12 offset-0 mt-8' style={h2}>Make a Reservation</h2>
                <div className='form-control input-group mb-3 input-group-prepend'>
                    <input className='form-control' style={Inputs} name='partySize' type='text'
                        onChange={partyHandleChange} value={Party} placeholder='Party size' />
                    <input className='form-control' style={Inputs} name='date' type='date'
                        onChange={dateHandleChange} value={Date} placeholder='Reservation date' />
                    <select className='form-control' style={Inputs} name='time' type='text'
                        onChange={timeHandleChange} value={Time} placeholder='Reservation time' >
                        <option value="">Choose a time</option>
                        <option value="12:00">12:00</option>
                        <option value="1:00">1:00</option>
                        <option value="2:00">2:00</option>
                        <option value="3:00">3:00</option>
                        <option value="4:00">4:00</option>
                        <option value="5:00">5:00</option>
                        <option value="6:00">6:00</option>
                        <option value="7:00">7:00</option>
                        <option value="8:00">8:00</option>
                        <option value="9:00">9:00</option>
                    </select>
                    <select className='form-control' style={Inputs} name='occasion' type='text'
                        onChange={occasionHandleChange} value={Occasion} placeholder='Special Occasion' >
                        <option value="">Choose an occasion</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Other">Other</option>
                    </select>
                    <input className='form-control' style={Inputs} name='name' type='text'
                        onChange={nameHandleChange} value={Name} placeholder="Name" />
                    <input className='form-control' style={Inputs} name='phone' type='text'
                        onChange={phoneHandleChange} value={Phone} placeholder='Phone number' />
                </div>
            </div>
            <div style={But}>
                <button className='btn btn-info btn-lg btn-block' style={Buttons} onClick={onSubmit} type='submit'>Submit</button>
                <button className='btn btn-info btn-lg btn-block' style={Buttons} onClick={cancelRes} >Cancel</button>
            </div>
        </div>
    );

};*/


/*export default function Reservation() {

    const Reserv = {
        width: '100%',
        height: '750px',
        background: 'url(assets/bg-patt.png)',
        //background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        backgroundSize: 'content',
        paddingTop: '20px',
        color: '#000',
        fontSize: '1.5rem'
    };

    const Form = {
        width: '40%',
        margin: '30px auto',
        padding: '30px 1%',
        background: '#000',
        border: 'solid',
        textAlign: 'center',
        borderRadius: '10px'
    }

    const h2 = {
        color: '#fff'
    };

    const Inputs = {
        width: '100%',
        paddingTop: '30px',
        fontSize: '1.2rem',
        border: '0px',
        borderBottom: '1px solid'
    }

    const But = {
        width: '40%',
        margin: '20px auto'
    };

    const Buttons = {
        width: '47%',
        margin: '0 10px',
        padding: '20px 30px',
        background: '#0b7e57',
        color: '#000',
        borderRadius: '10px'

    };

    //--------- Sending data to Mysql DB ----------//
    const URL_LOGIN = 'http://localhost/ws-login/insert.php';
    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const data1 = {
            'partysize': inputs.PartySize,
            'date': inputs.Date,
            'time': inputs.Time,
            'name': inputs.Name,
            'phone': inputs.Phone,
            'occasion': inputs.Occasion,
        };

        if (data1.partysize === undefined || data1.partysize === "" || data1.date === undefined || data1.date === "" ||
            data1.time === undefined || data1.time === "" || data1.name === undefined || data1.name === "" ||
            data1.phone === undefined || data1.phone === "" || data1.occasion === undefined || data1.occasion === "") {
            alert("There are empty fields. Records won't be saved in the DB.");
        }
        else { 
            alert("Holaaaaaaaa");
            //sendingData(URL_LOGIN, data1);
            setInputs('');
          
        }
        **data1.partysize === "" || data1.date === "" || data1.time === "" || data1.name === "" ||
             data1.phone === "" || data1.table === "" ? alert("There are empty fields. Records won't be saved in the DB.") :
            sendingData(URL_LOGIN, data1);**
        console.log("Recibe del formulario y lo envia al metodo sendingData: ");
        console.log(data1.name);
    };

    const sendingData = async (url, data2) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data2),
            headers: { 'Content-Type': 'aplication/json' }
        });
        const json = await resp.json();
        console.log("Recibe del metodo onSubmit y lo envia a la BD: ")
        console.log(json);
    };

    const cancelRes = () => {
        setInputs('');
    };

    return (
        <form style={Reserv}>
            <div className='input-group mb-3' style={Form}>
                <h2 className='card-header text-center card pt-4 col-sm-12 offset-0 mt-8' style={h2}>Make a Reservation</h2>
                <div className='form-control input-group mb-3 input-group-prepend'>
                    <input className='form-control' style={Inputs} name='PartySize' type='number'
                        onChange={handleChange} value={inputs.PartySize} placeholder='Party size' />
                    <input className='form-control' style={Inputs} name='Date' type='date'
                        onChange={handleChange} value={inputs.Date} placeholder='Reservation date' />
                    <select className='form-control' style={Inputs} name='Time' type='text'
                        onChange={handleChange} value={inputs.Time} placeholder='Reservation time' >
                        <option value="">Choose a time</option>
                        <option value="12:00">12:00</option>
                        <option value="1:00">1:00</option>
                        <option value="2:00">2:00</option>
                        <option value="3:00">3:00</option>
                        <option value="4:00">4:00</option>
                        <option value="5:00">5:00</option>
                        <option value="6:00">6:00</option>
                        <option value="7:00">7:00</option>
                        <option value="8:00">8:00</option>
                        <option value="9:00">9:00</option>
                    </select>
                    <input className='form-control' style={Inputs} name='Name' type='text'
                        onChange={handleChange} value={inputs.Name} placeholder="Name" />
                    <input className='form-control' style={Inputs} name='Phone' type='text'
                        onChange={handleChange} value={inputs.Phone} placeholder='Phone number' />
                    <select className='form-control' style={Inputs} name='Occasion' type='text'
                        onChange={handleChange} value={inputs.Occasion} placeholder='Special Occasion' >
                        <option value="">Choose an occasion</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>  
            <div style={But}>
                <button className='btn btn-info btn-lg btn-block' style={Buttons} onClick={onSubmit} type='submit'>Submit</button>
                <button className='btn btn-info btn-lg btn-block' style={Buttons} onClick={cancelRes} >Cancel</button>
            </div>
        </form>
    );*/


