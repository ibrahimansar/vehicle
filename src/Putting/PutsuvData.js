import React, {Component} from 'react';
import axios from '../axios-orders';
import classes from './Putting.module.css';

class PutsuvData extends Component {
    state = {
        name: '', 
        modal: '',
        power: ''
    }

    postDataHandler = () => {
        const info = {
            name: this.state.name,
            modal: this.state.modal,
            power: this.state.power
        }
        axios.post('/suv.json', info)
        .then(response => {
            console.log(response);
        });
    }

render () {
    return (
        <div className={classes.NewPost}>
            <h1>Add Suv Data</h1>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={( event ) => this.setState( { name: event.target.value } )} />
            <label>Modal</label>
            <input type="text" value={this.state.modal} onChange={( event ) => this.setState( { modal: event.target.value } )} />
            <label>Power</label>
            <input type="text" value={this.state.power} onChange={( event ) => this.setState( { power: event.target.value } )} />
            <button onClick={this.postDataHandler}>Add user</button>
        </div>
    );
}
}



export default PutsuvData;