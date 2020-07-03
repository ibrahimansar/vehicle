import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary';
import BikeControl from './BikeControl';
import Modal from '../../UI/Modal/Modal';
import BikeList from './BikeList';

class Bike extends Component {
    state = {
        ListOpen: true
    }
    ListOnHandler = () => {
        this.setState( {ListOpen: true} );
    }
    ListOffHandler = () => {
        this.setState( {ListOpen: false});
    }
    

    render () {
        return (
            <Aux>
                <Modal show = {this.state.ListOpen} modalClosed = {this.ListOffHandler}>
                    <BikeList />
                </Modal>
                <BikeControl 
                ListOpen={this.ListOnHandler}/>
            </Aux>
        )
    }
}