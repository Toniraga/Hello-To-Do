import React from 'react'
import classes from './ToDoInputs.module.css';

import ToDoInput from './ToDoInput/ToDoInput';

const ToDoInputs = (props) => {
    return (
        <div className={classes.ToDoInputs}>
            <ToDoInput 
                for="name" 
                value={props.name}
                changed={props.changed}
                name='name' />

            <ToDoInput  
                for="description" 
                value={props.description}
                changed={props.changed}
                name="description" />

            <ToDoInput  
                for="isbm" 
                value={props.isbm}
                changed={props.changed}
                name="isbm" />

            <button>SUBMIT</button>
        </div>
		);
}

export default ToDoInputs
