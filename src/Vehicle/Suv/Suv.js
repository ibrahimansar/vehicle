import React, {Component} from 'react';
import Modal from '../Modal/Modal';
import classes from '../Modal/Modal.module.css';


class Bike extends Component {
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
          <h1>React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>SUV LIST</p>
          </Modal>
          <button className={classes.veh} onClick={this.showModal}>SUV</button>
        </main>
      );
    }
  }
  
  export default Bike;