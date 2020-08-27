import React, { Fragment } from 'react'
import classes from './Modal.module.css';
import DarkOverlay from '../../HOC/DarkOverlay/DarkOverlay';

const Modal = (props) => {
    return (
			<Fragment>
				<DarkOverlay closeModal={props.closeModal} />
				<div className={classes.Modal}>
					<div className={classes.header}>
						<button className={classes.btn} onClick={() => props.closeModal()}>
							x
						</button>
						<h3> Frequently Asked Questions </h3>
					</div>
					<div className={classes.main}>
						<div>
							<strong>What is this?</strong>
							<p>It is a to do list app. It does a whole lot!</p>
						</div>
						<div>
							<strong>Who made this?</strong>
							<p>My name is Eraga Tony!</p>
							<p>Im a React novice!</p>
						</div>
						<div>
							<strong>How do I use this?</strong>
							<p>
								If you've been having issues keeping track of your to-do's then
								this will help you do that!{" "}
							</p>
							<strong>Try it out! Don't be shy</strong>
						</div>
					</div>
				</div>
			</Fragment>
		);
}

export default Modal
