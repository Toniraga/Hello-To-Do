import React from 'react';
import classes from './Links.module.css';

const Links = (props) => {
    return (
        <ul className={classes.Links}>
           <li onClick={() => props.open()}>FAQ</li> 
           <li>CONTACT</li>
        </ul>
    )
}

export default Links
