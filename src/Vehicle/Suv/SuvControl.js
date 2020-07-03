import React from 'react';
import classes from '../Bike/BikeControl.module.css';
import Button from '../../UI/Button/Button';

const Suv = () => {
    return(
        <div className={classes.Suv}>
            <Button btnType="Veh"> SUV </Button>
        </div>
    )
}

export default Suv;