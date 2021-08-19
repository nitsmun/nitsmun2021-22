// *Hooks*
import React, { Suspense, useEffect } from 'react';

import Loading from '../Loading';

// *CSS*
import '../Events.css';
import '../Table.css';
import './Dais.css';
import Workshops from '../Workshops';

const GlobalVoicesMun = props => {
	useEffect(() => {
		// *Setting Up Page Title*
		document.title = props.title;
	}, [props.title]);

	return (
		<Suspense fallback={<Loading />}>
			{/* <div className='event'>The Dais</div> */}
			<div style={{ marginTop: 'var(--navbar-height-pc)' }}>
				<Workshops />
			</div>

			<table id='apply-table'>
				<thead>
					<tr>
						<td>Timings</td>
						<td>Topics</td>
					</tr>
				</thead>

				<tbody>
					<tr className='lower-border'>
						<td>18 September, 2021 (5PM-7PM)</td>
						<td>Empathy and Critical Thinking</td>
					</tr>

					<tr className='lower-border'>
						<td>19 September, 2021 (5PM-7PM)</td>
						<td>
							Importance of SDGs (implementing them at an individual level)
						</td>
					</tr>

					<tr className='lower-border'>
						<td>25 September, 2021 (4PM-7PM)</td>
						<td>Familiarization with MUN (general ROPs and jargons)</td>
					</tr>

					<tr className='lower-border'>
						<td>26 September, 2021 (4PM-7PM)</td>
						<td>A Mock MUN Session</td>
					</tr>
				</tbody>
			</table>
		</Suspense>
	);
};

export default GlobalVoicesMun;
