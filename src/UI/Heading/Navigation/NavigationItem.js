  
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../../UI/Modal/Modal.module.css';

const navigationItem = ( props ) => (
    <div className={classes.veh}>
        <NavLink 
            to={props.link}
            exact={props.exact}>{props.children}</NavLink>
    </div>
);

export default navigationItem;