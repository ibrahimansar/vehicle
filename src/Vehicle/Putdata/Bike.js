import React, {Component} from 'react';
import Modal from '../../UI/Modal/Modal';
import classes from '../../UI/Modal/Modal.module.css';
import PutbikeData from '../../Putting/PutbikeData';

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
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <PutbikeData />
          </Modal>
          <button className={classes.veh} onClick={this.showModal}>Bike</button>
        </main>
      );
    }
  }
  
  export default Bike;