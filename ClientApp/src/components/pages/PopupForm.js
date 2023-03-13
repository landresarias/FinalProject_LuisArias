import React from "react";

export default function PopupForm({ children, open, close }) {

    const DIV_MODAL_STYLE = {
        position: 'fixed',
        zIndex: '3',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: '#fff',
        color: '#ff0000',
        fontFamily: 'sans-serif',
        fontWeight: '700',
        padding: '50px',
        borderRadius: '10px',
    }

    const Button = {
        width: '30%',
        height: '50px',
        marginLeft: '35%',
        marginBottom: '20px',
        padding: '10px 30px',
        background: '#0b7e57',
        color: '#fff',
        fontWeight: '700',
        borderRadius: '10px',
    };

    const DIV_OVERLAY_STYLE = {
        position: 'fixed',
        zIndex: '2',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.7)',
    }

    if (!open) return null

    return (
        <div>
            <div style={DIV_OVERLAY_STYLE} />
            <div style={DIV_MODAL_STYLE}>
                {children}
                <br /><br />

                <div><button className='btn btn-info btn-lg btn-block' onClick={close} style={Button}> AGREE </button></div>
                
            </div>
        </div>
    )
};


