import React from 'react'
import "./Carousel.css";


function Carousel() {
    return (
        <div>
            <div
            style={{display: "flex",justifyContent: "center",alignItems: "center", width: "100%",backgroundColor: "black",height: "70px"}}>
            <h3 style={{fontVariant:"small-caps",color: "white"}} className="tag">A Glimpse from Past Conference</h3>
        </div>
        <div className="container my-4">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img loading="lazy" src="img/Carousel1.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="img/Carousel2.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div> */}
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="img/Carousel3.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div> */}
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="img/Carousel4.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div> */}
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </div>
    )
}

export default Carousel
