import React from 'react';
import classes from '../Bike/BikeControl.module.css';
import Button from '../../UI/Button/Button';

const Car = () => {
    return(
        <div className= {classes.Car}>
            <Button btnType="Veh"> CAR </Button>
        </div>
    )
}

export default Car;