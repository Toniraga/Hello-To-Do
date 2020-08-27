import React from 'react'
import classes from './Nav.module.css';

import Links from './Links/Links';

const Nav = (props) => {
    return (
        <nav className={classes.Nav}>
            <div>LOGO</div>
            <div className={classes.Name}>TO DO LIST</div>
            <Links open={props.modalOpen} />
        </nav>
    )
}

export default Nav
