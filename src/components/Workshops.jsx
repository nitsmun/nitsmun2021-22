import React from 'react';
import './Workshops.css';

function Workshops() {
	return (
		<>
			<div
				className='container-fluid px-0 mb-3'
				style={{ overflowX: 'hidden' }}>
				<div className='row no-gutters'>
					<div className='col-md-1'></div>
					<div
						className='col-md-10'
						style={{
							textAlign: 'center',
							paddingTop: '5vh',
							overflowX: 'hidden',
						}}>
						<div style={{ padding: '0 30px' }}>
							<h3
								style={{
									borderBottom: '2px solid var(--theme4-100)',
									fontVariant: 'small-caps',
									color: 'var(--theme4-100)',
								}}>
								NITSMUN x THE DAIS presents Workshops
							</h3>
						</div>
					</div>
					<div className='col-md-1'></div>
				</div>
				<div className='row no-gutters'>
					<div className='col-md-1'></div>
					<div
						className='col-md-4 d-flex justify-content-center align-items-center'
						style={{ textAlign: 'center', padding: '30px' }}>
						<img
							className='img-fluid'
							style={{ borderRadius: '5%' }}
							src='/img/workshops.jpg'
							alt='NITSMUN'
						/>
					</div>
					<div
						className='col-md-6 mt-lg-3 mt-0'
						style={{
							textAlign: 'center',
							overflowX: 'hidden',
							alignSelf: 'center',
						}}>
						<button
							type='button'
							className='custom'
							style={{ width: '150px' }}
							onClick={() => {
								window.open(
									'https://docs.google.com/forms/d/e/1FAIpQLSc4Q_EA6OezM_1Jmfd3MPuR0cVAEYNktO3ifG-ROkYXD7Fw2g/viewform',
									'_blank'
								);
							}}>
							Apply now
						</button>
					</div>
					<div className='col-md-1'></div>
				</div>
			</div>
		</>
	);
}

export default Workshops;
