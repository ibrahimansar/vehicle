import React from 'react';
import classes from './Bike.module.css';
import Button from '../../UI/Button/Button';


const Bike = () => {
    return(
        <div className={classes.Bike}>
            <Button btnType="Veh"> BIKE </Button>
        </div>
    )
}

export default Bike;