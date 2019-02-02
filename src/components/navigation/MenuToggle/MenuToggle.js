import React from 'react';
import classes from './MenuToggle.scss';

const MenuToggle = props => {

    return (
        <i
            className={`fa
            ${classes.MenuToggle}
            ${props.isOpen ?  'fa-times' : 'fa-bars'}
            ${props.isOpen ? classes.open : null}
            `}
            onClick={props.onToggle}
        />
    )
};

export default MenuToggle;