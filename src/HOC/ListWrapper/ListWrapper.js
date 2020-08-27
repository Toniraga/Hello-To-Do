import React from 'react'
import classes from './ListWrapper.module.css';

const ListWrapper = (props) => {
    return (
			<table className={classes.Wrapper}>
				<thead>
					<tr>
						<th>NAME</th>
						<th>DESCRIPTION</th>
						<th>ISBM</th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</table>
		);
}

export default ListWrapper