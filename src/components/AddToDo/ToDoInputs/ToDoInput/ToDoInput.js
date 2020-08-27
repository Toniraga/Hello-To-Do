import React from 'react'
import classes from './ToDoInput.module.css'; 

const ToDoInput = (props) => {
    return (
			<div className={classes.ToDo}>
				<label> {props.for.toUpperCase()} </label>
				<input
					type="text"
                    value={props.value.toUpperCase()}
                    onChange={(event) => props.changed(event)}
                    name={props.name}
				/>
			</div>
		);
}

export default ToDoInput
