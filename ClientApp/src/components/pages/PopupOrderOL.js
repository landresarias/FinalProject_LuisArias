import React, { useState } from "react";
import ReactModal from 'react-modal';

export default function PopupOrderOL({ children, open, close }) {

    const DIV_OVERLAY_STYLE = {
        position: 'fixed',
        zIndex: '2',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.7)',
    };

    const DIV_MODAL_STYLE = {
        position: 'fixed',
        zIndex: '3',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '5%',
        backgroundColor: '#fff',
        color: '#333',
        //color: '#ff0000',
        fontFamily: 'sans-serif',
        fontSize: '1rem',
        fontWeight: '700',
        borderRadius: '10px',
    };

    const Button = {
        width: 'auto',
        height: '10%',
        margin: '10px 10%',
        marginBottom: '20px',
        padding: '10px 30px',
        background: '#0b7e57',
        color: '#fff',
        fontWeight: '700',
        borderRadius: '10px',
    };

    const [isOpen, setIsOpen] = useState(false);

    if (!open) return null

    const handleClick = () => {
        setIsOpen(true)
        {
            <ReactModal
                isOpen={isOpen}
                contentLabel="Example Modal"
                onRequestClose={() => setIsOpen(false)}>
                This is the content of the modal.
            </ReactModal>
        }
    };

    return (
        <div>
            <div style={DIV_OVERLAY_STYLE} />
            <div style={DIV_MODAL_STYLE}>
                {children}
                <br /><br />
                <div>
                    <button className='btn btn-info btn-lg btn-block' onClick={handleClick}
                        style={Button}>LOG IN / REGISTER </button>
                </div>
                {isOpen && (
                    <div>
                        <div >
                            This is the content of the pop-up.
                        </div>
                        <button onClick={() => setIsOpen(false)}>
                            Close Pop-up
                        </button>
                    </div>
                )}
                <div>
                    <button className='btn btn-info btn-lg btn-block' onClick={close} style={Button}>
                        ENTER AS A GUEST </button>
                </div>
                
            </div>
        </div>
    )
};


