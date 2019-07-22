import React from "react";
import { PropTypes } from "prop-types";
import ReactDOM from "react-dom";

export default function Counter(props) {
	return (
		<div className="secondsParent row">
			<div className="second col bg-dark rounded ">
				<h1>{props.last % 10}</h1>
			</div>
			<div className="second col bg-dark rounded ">
				<h1>{props.secondLast % 10}</h1>
			</div>
			<div className="second col bg-dark rounded ">
				<h1>{props.thirdLast % 10}</h1>
			</div>
			<div className="second col bg-dark rounded ">
				<h1>{props.fourthLast % 10}</h1>
			</div>
			<div className="second col bg-dark rounded ">
				<h1>{props.fifthLast % 10}</h1>
			</div>
		</div>
	);
}

Counter.propTypes = {
	last: PropTypes.number,
	secondLast: PropTypes.number,
	thirdLast: PropTypes.number,
	fourthLast: PropTypes.number,
	fifthLast: PropTypes.number
};

let counter = 0;
setInterval(() => {
	let last = Math.floor(counter / 10000);
	let secondLast = Math.floor(counter / 1000);
	let thirdLast = Math.floor(counter / 100);
	let fourthLast = Math.floor(counter / 10);
	let fifthLast = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<Counter
			last={last}
			secondLast={secondLast}
			thirdLast={thirdLast}
			fourthLast={fourthLast}
			fifthLast={fifthLast}
		/>,
		document.querySelector("#app")
	);
}, 1000);
