import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ handleClose, show, children }) => {

    const showHideClassName = show ? [classes.modal, classes.displayblock] : [classes.modal, classes.displaynone];
  
    return (
      <div className={showHideClassName.join(' ')}>
        <section className= {classes.modalmain}>
          {children}
             <div>
                   <button className={classes.close} onClick={handleClose}>close</button>
             </div>        
         </section>     
      </div>
    );
  };

  export default Modal;