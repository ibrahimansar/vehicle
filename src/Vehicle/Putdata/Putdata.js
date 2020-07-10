import React, {Component} from 'react';
import classes from '../Vehicle.module.css';
import Car from './Car';
import Bike from './Bike';
import Suv from './Suv';
import Get from '../../UI/Heading/Navigation/Get';
import PutHeading from '../../UI/Heading/PutHeading';
import Aux from '../../HOC/Auxiliary';


class Getdata extends Component {
    render(){
        return(
            <Aux>
          <div className= {classes.main}>    
            <div className = {classes.head}>
                    <PutHeading />
                </div>
            <div className =  {classes.veh}>
                <Car />
                <Bike />
                <Suv />
                <Get />
            </div>
          </div>    
            </Aux>
        )
    }
}

export default Getdata;