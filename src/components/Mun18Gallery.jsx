import React from 'react'
import "./Mun18Gallery.css";

function Mun18Gallery() {
    return (
        <div className="container">
            <hr />
            <h1 className="text-center m-3">Gallery</h1>
            <div className="r">
                <img src="../img/jmun_ss1.jpg" alt='nitsmun' />
                <img src="../img/jmun_ss2.jpg" alt='nitsmun' />
            </div>
            <div className="r">
                <img src="../img/jmun_ss3.jpg" alt='nitsmun' />
                <img src="../img/jmun_ss4.jpg" alt='nitsmun' />
                <img src="../img/jmun_ss5.jpg" alt='nitsmun' />
            </div>
            <div className="r">
                <img src="../img/jmun_ss6.jpg" alt='nitsmun' />
                <img src="../img/jmun_ss7.jpg" alt='nitsmun' />
            </div>
        </div>
    )
}

export default Mun18Gallery
