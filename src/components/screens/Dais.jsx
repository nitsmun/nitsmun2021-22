// *Hooks*
import React, { Suspense, useEffect } from 'react';

import Loading from '../Loading';

// *CSS*
import '../Events.css';
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
			<div style={{marginTop:"var(--navbar-height-pc)"}}><Workshops/></div>
		</Suspense>
	);
};

export default GlobalVoicesMun;
