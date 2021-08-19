// *Hooks*
import React, { Suspense, useEffect } from 'react';

import Loading from '../Loading';

// *CSS*
import '../Events.css';
import './Dais.css';

const GlobalVoicesMun = props => {
	useEffect(() => {
		// *Setting Up Page Title*
		document.title = props.title;
	}, [props.title]);

	return (
		<Suspense fallback={<Loading />}>
			<div className='event'>The Dais</div>
		</Suspense>
	);
};

export default GlobalVoicesMun;
