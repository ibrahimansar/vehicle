import React, {Component} from 'react';
import classes from './Vehicle.module.css';

class Vehicle extends Component {
    render(){
        return(
            <div className =  {classes.veh}>
                <Car />
                <Bike />
                <Suv />
            </div>
        )
    }
}