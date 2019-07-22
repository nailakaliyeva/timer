import React from "react";
import { PropTypes } from "prop-types";
import ReactDOM from "react-dom";

export default function Counter(props) {
	return (
		<div className="secondsParent row d-flex justify-content-center mx-5 mt-5 rounded">
			<i className="far fa-clock fa-4x m-3 my-auto" />
			<div className="second col-2 bg-dark rounded m-1 my-5">
				<h1 className="text-warning">{props.last % 10}</h1>
			</div>
			<div className="second col-2 bg-dark rounded m-1 my-5">
				<h1 className="text-warning">{props.secondLast % 10}</h1>
			</div>
			<div className="second col-2 bg-dark rounded m-1 my-5">
				<h1 className="text-warning">{props.thirdLast % 10}</h1>
			</div>
			<div className="second col-2 bg-dark rounded m-1 my-5">
				<h1 className="text-warning">{props.fourthLast % 10}</h1>
			</div>
			<div className="second col-2 bg-dark rounded m-1 my-5">
				<h1 className="text-warning">{props.fifthLast % 10}</h1>
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
