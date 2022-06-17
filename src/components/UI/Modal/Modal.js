import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (<div className={classes.backdrop}  onClick={props.onClose}/>);
}

const Overlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
}

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay-root'))}
        </React.Fragment>
        
    );
}

export default Modal;