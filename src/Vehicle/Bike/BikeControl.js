import React from 'react';
import classes from './BikeControl.module.css';
import Button from '../../UI/Button/Button';
//import BikeList from './BikeList';


const Bike = (props) => {
    return(
        <div className={classes.Bike}>
            <Button btnType="Veh" onClick = {props.Listopen}> BIKE </Button>
            <p>test</p>
        </div>
    )
}

export default Bike;