import React from 'react';
import Button from './Button';
import Card from './Card';
import './UI.css';

const Modal = (props) => {
  return (
    <div className="Modal">
      <div 
        className="modal-shadow" 
        onClick={props.close}
      />
      <Card className="modal-box">
        <div className="title">
          <h2>{props.data.title}</h2>
        </div>
        <div className="message">
          <p>{props.data.message}</p>
          <Button 
            className="modal-btn"
            onClick={props.close}>
            Cancel
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Modal;