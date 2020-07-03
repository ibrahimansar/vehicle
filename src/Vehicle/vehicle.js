import React, {Component} from 'react';
import classes from './Vehicle.module.css';
import Car from './Car/Car';
import Bike from './Bike/Bike';
import Suv from './Suv/Suv';
import Heading from '../Heading/Heading';
import Aux from '../HOC/Auxiliary';


class Vehicle extends Component {
    render(){
        return(
            <Aux>
          <div className= {classes.main}>    
            <div className = {classes.head}>
                    <Heading />
                </div>
            <div className =  {classes.veh}>
                <Car />
                <Bike />
                <Suv />
            </div>
          </div>    
            </Aux>
        )
    }
}

export default Vehicle;