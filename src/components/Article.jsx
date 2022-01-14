import { Suspense } from 'react';
import Loading from "./Loading";
import { useHistory } from "react-router-dom";
import "./Article.css";

function Article() {

    const history = useHistory();

    const route = () => {
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
            <hr />
            <section id="Article">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-1"></div>
                        <div className="col-md-10" style={{ textAlign: "center", paddingTop: "0px", overflowX: "hidden" }}>
                            <div style={{ padding: "30px" }}>
                                <h2 style={{ borderBottom: "2px solid black", fontVariant: "small-caps" }}>Check out <a href="https://www.instagram.com/nitsmun/" style={{ textDecorationLine: "none" }}>@nitsmun</a> for all our articles!</h2>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src="img/wrapup1.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Wrap up 2021</h5>
                                    <p className="card-text" style={{ textAlign: "justify", fontSize: "1rem" }}>
                                        The Year began with COVID-19 cases worldwide surpassing the mark of 100 million, and the WHO urging effective and fair use of covid vaccines. Developments in space included the USA’s plan to set up the first nuclear reactor on the moon by the end of 2026.</p>
                                    <button type="button" className="btn btn-outline-dark" onClick={route} >Read more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src="img/solidarity_day.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">International Human Solidarity day</h5>
                                    <p className="card-text" style={{ textAlign: "justify", fontSize: "1rem" }}>International Human Solidarity day is observed on 20 December every year to spread awareness among the populace about the significance of solidarity and to heave people out of poverty, hunger, and disease.</p>
                                    <button type="button" className="btn btn-outline-dark" onClick={route} >Read more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src="img/braille_day.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">World Braille Day</h5>
                                    <p className="card-text" style={{ textAlign: "justify", fontSize: "1rem" }}><br />Literacy is a right, which is, as much fundamental to the specially-abled as it is to the abled. January 4 marks an important day in the history of Human Rights. It celebrates awareness of braille as a means of communication.</p>
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
