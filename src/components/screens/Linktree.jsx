import React from 'react'

import './Linktree.css';

function Linktree() {
    return (
        <div className="tree">
        <img src="/img/logoBigWhite.svg" className="img-fluid mt-2" alt="NITS MUN"/>
        <div className="links">
        <a href="https://forms.gle/Mve212QZRbDtjBsX9?ltclid=ba73abbd-c948-4a36-9e12-f2847445936b" className="button mt-3" target="blank">Executive Board Member Applications</a><br/>
        <a href="https://forms.gle/PAWFVNF5Tu3Chw1w9?ltclid=" className="button" target="blank">Register now for NITS Junior MUN workshops</a><br/>
        <a href="https://forms.gle/y9CypdKR2PBmZVrG9?ltclid=" className="button" target="blank">Link for Delegats Registration</a><br/>
        <a href="https://forms.gle/dNALB1mLhyhVwMtHA?ltclid=" className="button mb-3" target="blank">Register now for Zonal Ambassadors!</a><br/>
        </div>
        </div>
    )
}

export default Linktree
