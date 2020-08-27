import React from 'react'
import classes from './ListToDo.module.css';


const ListToDo = (props) => {
    return (
        <tr className={classes.ListToDo}>
            <th>{props.name.toLowerCase()}</th>
            <th>{props.description.toLowerCase()}</th>
            <th>{props.isbm.toLowerCase()}</th>
            <th 
            className={classes.Delete}
            onClick={(e) => props.clicked(e, props.index)}
            >X</th>
        </tr>
		);
}

export default ListToDo
