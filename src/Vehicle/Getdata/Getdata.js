import React, {Component} from 'react';
import classes from '../Vehicle.module.css';
import Car from './Car';
import Bike from './Bike';
import Suv from './Suv';
import Post from '../../UI/Heading/Navigation/Post';
import GetHeading from '../../UI/Heading/GetHeading';
import Aux from '../../HOC/Auxiliary';


class Getdata extends Component {
    render(){
        return(
            <Aux>
          <div className= {classes.main}>    
            <div className = {classes.head}>
                    <GetHeading />
                </div>
            <div className =  {classes.veh}>
                <Car />
                <Bike />
                <Suv />
                <Post />
            </div>
          </div>    
            </Aux>
        )
    }
}

export default Getdata;