/* eslint-disable no-unused-vars */
// *Hooks*
import React, { useEffect, useState, Suspense } from 'react'; //? React for the react fragment
// import { Link } from 'react-router-dom';

// *CSS*
import './Timer.css';
import Loading from './Loading';

//! let btnAllow = false;
let btnAllow = true;

//! Date Format : Year, Month(0-11), Date, Hrs, Mins, Secs, Millisecs
let timeTo = new Date(2020, 9, 16, 0, 0, 0, 0);

let timeLimit = Math.floor(timeTo / 1000);

//? Days is left as 100 for 2 digit days
const timeIntervals = [60, 60, 24, 100],
	timeIntervalName = ['Days', 'Hrs', 'Mins', 'Secs']; //? In reverse order from timeIntervals

// *Countdown Timer Function*
function countdown() {
	/*
	 * timeNow is calculated every time countdown() is run, and difference is found.
	 * Time left for each interval is found using forEach and timeIntervals
	 */

	let timerDisplay = [0, 0, 0, 0]; //! Format: Days, Hrs, Mins, Secs

	const timeNow = Math.floor(Date.now() / 1000);
	let timeDiff = timeLimit - timeNow;

	if (timeDiff < 0) {
		timerDisplay = ['Event Coming Soon!'];
		//! btnAllow = false;
	} else {
		btnAllow = true;
		timeIntervals.forEach((interval, index) => {
			timerDisplay[index] = `${timeDiff % interval}`.padStart(2, '0');
			timeDiff = Math.floor(timeDiff / interval);
		});
	}

	return timerDisplay;
}

// *Timer Component*
const Timer = () => {
	// *Use State variables*
	let [display, setDisplay] = useState([0, 0, 0, 0]);

	useEffect(() => {
		const timerInt = setInterval(() => {
			let displayList = countdown();

			setDisplay(displayList.reverse());
			// ?Reverse since in countdown(), secs is first, and so on

			if (displayList.length === 1) clearInterval(timerInt); // *Stop interval when EXPIRED*
		}, 1000);

		return () => clearInterval(timerInt);
	}, []);

	return (
		<Suspense fallback={Loading}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					backgroundColor: 'var(--theme1-100)',
					// height: '70px',
				}}>
				<h2
					style={{
						fontVariant: 'small-caps',
						color: 'white',
						fontFamily: 'var(--font2)',
						fontWeight: 'bold',
						padding: '2vh 1vh 0.5vh 1vh',
						textAlign: 'center',
					}}>
					Workshop and Junior MUN Applications out now!
				</h2>
				{btnAllow && (
					<a
						href='https://linktr.ee/nitsmun'
						target='_blank'
						rel='noreferrer'
						className='applyNowBtn'>
						Apply now
					</a>
				)}
			</div>
			{/* <div id='timer'> */}
			{/* {display.length === 4 && <div className="timer-limit">NITS Junior MUN starts on <span className="bold">{timeTo.toLocaleString().substring(0, 10) }</span> !</div>} */}
			{/* If display.length = 4 => Display Timer
              If display.length = 1 => Display Coming Soon */}
			{/* {display.length === 4 &&
					display.map((interval, index) => {
						return (
							<React.Fragment key={index}>
								<div className='timer-int'>
									<div className='timer-int-value'>
										<tt>{interval}</tt>
									</div>{' '} */}
			{/* Time left in interval */}
			{/* <div className='timer-int-label'>
										{timeIntervalName[index]}
									</div>{' '} */}
			{/* Interval name */}
			{/* </div>
								{index < display.length - 1 &&
									((window.innerWidth < 1000 && index !== 1) ||
										window.innerWidth >= 1000) && (
										<div className='timer-int-colon'>:</div>
									)}
							</React.Fragment>
						);
					})} */}

			{/* {display.length === 1 && (
					<div className='coming-soon' style={{ textAlign: 'center' }}>
						Ambassador and Delegate Applications for NITS Junior MUN out Now!
					</div>
				)}
			</div> */}

			{/* <div className="apply-now">Application for delegates and the free workshop open now!</div> */}

			{/* {btnAllow && <Link
          to="/events/mun-u18#apply"
          className="btn apply-btn"
        >Apply Now</Link>} */}
		</Suspense>
	);
};

export default Timer;
