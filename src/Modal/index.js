import React from 'react';
import  ReactDOM  from 'react-dom';
import './Modal.css';



function Modal({ children }){
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            <div className='container-modal'>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};