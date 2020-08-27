import React from 'react'
import classes from './AddToDo.module.css';


import ToDoInputs from './ToDoInputs/ToDoInputs';

const AddToDo = (props) => {
    return (
        <form 
            className={classes.AddToDo}
            onSubmit={e => props.submitted(e)} >
            <ToDoInputs 
                name={props.name}
                description={props.description}
                isbm={props.isbm}
                changed={props.changed} />
        </form>
    )
}

export default AddToDo;
