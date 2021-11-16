import React from 'react'
import "./Update.css";

function Partners() {
    return (
        <div className="container" style={{ fontFamily: "var(--font2)" }}>
            <h1 className="text-center">Our Partners</h1>
            <div className="sponser my-5" style={{ display: 'flex' }}>
                <div className="dias" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <a href='https://www.thedais.co.in/'><img src="../img/dias_logo.jpg" className="img-fluid" style={{ width: '100px', borderRadius: '50%' }} alt="thedias" /></a>
                    <div className="info my-auto mx-3">
                        <h3>The Dias</h3>
                        <p>Youth Partner</p>
                    </div>
                </div>
                <div className="dias" style={{ display: 'flex' }}>
                    <a href='https://ids-org.in/'><img src="../img/ids_logo.png" className="img-fluid" style={{ width: '100px', borderRadius: '50%' }} alt="ids" /></a>
                    <div className="info my-auto mx-3">
                        <h3>IDS</h3>
                        <p style={{ textAlign: 'left' }} >Social media Partner</p>
                    </div>
                </div>
            </div>
            {/* <h3 className='text-center'>Book Partner</h3> */}
            <div className="sponser my-5" style={{ display: 'flex' }}>
                <div className="dias author" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <img src="../img/Parinda Joshi.png" className="img-fluid" style={{ width: '100px', borderRadius: '50%' }} alt="thedias" />
                    <div className="info my-auto mx-3">
                        <h3>Parinda Joshi</h3>
                        <p>Book partner</p>
                    </div>
                </div>
                <div className="dias author" style={{ display: 'flex' }}>
                    <img src="../img/Photograph_MohitParikh.png" className="img-fluid" style={{ width: '100px', borderRadius: '50%' }} alt="ids" />
                    <div className="info my-auto mx-3">
                        <h3>Mohit Parikh</h3>
                        <p style={{ textAlign: 'left' }} >Book partner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
