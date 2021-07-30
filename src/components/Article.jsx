import { Suspense } from 'react';
import Loading from "./Loading";
import { useHistory } from "react-router-dom";
import "./Article.css";

function Article() {

    const history = useHistory();

    const route = () =>{ 
        let path = '/articles'; 
        history.push(path);
    }


    // function Expand(){
    //     let element = document.querySelector("#Expand")
    //     let btn = document.getElementById("btn1")
    //     btn.style.visibility = "hidden"
    //     element.style.display = ""
    // }

    // function Srink(){
    //     let element = document.querySelector("#Expand")
    //     let btn = document.getElementById("btn1")
    //     btn.style.visibility = "visible"
    //     element.style.display = "none"
    // }

    return (
        <Suspense fallback={<Loading />}>
            <section id="Article">
                <div className="container">
                    <hr />
                    <div className="row no-gutters">
                        <div className="col-md-1"></div>
                        <div className="col-md-10" style={{ textAlign: "center", paddingTop: "0px", overflowX: "hidden" }}>
                            <div style={{ padding: "30px" }}>
                                <h2 style={{ borderBottom: "2px solid black", fontVariant: "small-caps" }}>Check out <a href="https://www.instagram.com/nitsmun/">@nitsmun</a> for all our articles!</h2>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src="img/groovy_war_and_peace.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Groovy Sundries: War and Peace</h5>
                                    <p className="card-text" style={{textAlign:"justify",fontSize:"0.9rem"}}>War and Peace are more than magnificent works of art. They are Portinari’s call to action. Thanks to him, all leaders who enter the United Nations see the terrible toll of war and the universal dream for peace.</p>
                                    <button type="button" className="btn btn-outline-dark" onClick={route} >Read more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src="img/day_world_population.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">World Population Day</h5>
                                    <p className="card-text" style={{textAlign:"justify",fontSize:"0.9rem"}}><br />Rights and choices are the answer: Whether baby boom or bust, the solution to shifting fertility rates lies in prioritizing the reproductive health and rights of all people.<br /></p>
                                    <button type="button" className="btn btn-outline-dark" onClick={route} >Read more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src="img/day_of_cooperatives.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">International Day of Cooperatives</h5>
                                    <p className="card-text" style={{textAlign:"justify",fontSize:"0.9rem"}}>Cooperatives have always been an integral part in bringing people together in a democratic and equal way contributing to the eradication of poverty and promoting economic and social progress.</p>
                                    <button type="button" className="btn btn-outline-dark" onClick={route} >Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Suspense>
    )
}

export default Article