import React, {Component} from 'react';
import Modal from '../../UI/Modal/Modal';
import classes from '../../UI/Modal/Modal.module.css';
import PutcarData from '../../Putting/PutcarData';


class Car extends Component {
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
            <PutcarData />
          </Modal>
          <button className={classes.veh} onClick={this.showModal}>Car</button>
        </main>
      );
    }
  }
  
  export default Car;