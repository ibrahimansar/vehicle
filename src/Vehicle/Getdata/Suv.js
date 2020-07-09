import React, {Component} from 'react';
import Modal from '../../UI/Modal/Modal';
import classes from '../../UI/Modal/Modal.module.css';
import Suvdatasearch from '../../Getting/Suvdatasearch';


class Suv extends Component {
    state = { show: false };
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    render() {
      return (
        <main>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <Suvdatasearch />
          </Modal>
          <button className={classes.veh} onClick={this.showModal}>SUV</button>
        </main>
      );
    }
  }
  
  export default Suv;