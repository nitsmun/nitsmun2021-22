/*
CHANGES REQUIRED:
1. make one article(and the expand and shrink functions) a seperate component, 
    and pass article data as a prop from the parent component
    (instead of doing it in the for loop with iteration)
2. Get rid of the inline styling and bootstrap. 
*/

import { Suspense } from "react";
import Loading from "../Loading";
import "./Articles.css";

function Articles(props) {
    function Expand(article_index) {
        var buttons = document.getElementsByClassName("expand" + article_index)
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "hidden"
        }
        let element = document.getElementById("Expand" + article_index)
        element.style.display = ""
        //console.log(element)
    }

    function Shrink(article_index) {
        // let element = document.querySelector("#Expand")
        // var buttons = document.getElementsByClassName("expand")
        let element = document.getElementById("Expand" + article_index)
        var buttons = document.getElementsByClassName("expand" + article_index)
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "visible"
        }
        //console.log(element)
        element.style.display = "none"
    }
    // store the dates in a proper format
    const articles_list = [
        {
            index: "1",
            heading: "Groovy Sundries: War and Peace",
            date: "13th July, 2021",
            image: "img/groovy_war_and_peace.jpg",
            short: <>"War and Peace are more than magnificent works of art. They are Portinari’s call to action. Thanks to him, all leaders who enter the United Nations see the terrible toll of war and the universal dream for peace."<br /><br />Quoted by Ban Ki-moon during the inauguration of War and Peace, in the United Nations Headquarters on September 8, 2015, the above lines were dedicated to Candido Portinari, a Brazilian painter.</>,
            long: <>His masterpiece War and Peace, made between 1952 and 1956, consists of a set of two paintings that work together as a representation of the atrocity of war and the suffering of victims and the importance of maintaining peace and the attempts to end violent conflicts in the world. <br /><br /> Recognised as a gift from the Brazilian government for the United Nations Headquarters, these paintings are about 14.32 metres tall and 10.66 metres large each.<br /><br /> War and peace were marked as Portinari’s last work and the reason for the artist’s death on February 6, 1962. Despite being warned by the doctors about being intoxicated due to long term inhalation of the paint he used, Portinari was dedicated to finishing his masterpieces and thus, sacrificed his own health in the hope to send an important message to the world.</>,
        },
        {
            index: "2",
            heading: "World Population Day",
            date: "11th July, 2021",
            image: "img/day_world_population.jpg",
            short: <>"Rights and choices are the answer: Whether baby boom or bust, the solution to shifting fertility rates lies in prioritizing the reproductive health and rights of all people."<br /><br /> With the above-given theme, the 32nd World population Day is celebrated this year. Established by the Governing Council of the United Nations Development Program on 11th July 1989, the event was first observed on 11th July 1990, in more than 90 countries. World Population Day is an annual event, with an aim to raise awareness of global population issues.</>,
            long: <>The Covid-19 pandemic and its control measures have impacted health care systems particularly in sexual and reproductive health and reproductive behavior globally. It has also marked an increase in gender-based violence, and the risk of child marriage and female genital mutilation, as programs to abolish the harmful practices were disrupted. <br /><br /> Thus, World Population Day is the celebration of awareness, people are encouraged to learn about issues like the importance of family planning, gender equality, poverty, human rights, maternal and baby health, right to health, sexuality education, use of contraceptives, and safety measures, reproductive health, adolescent pregnancy, girl child education, child marriage, sexually transmitted infections, etc. <br /><br />NITSMUN reminds everyone that collective efforts to control population will help to ensure resources for all!</>,
        },
        {
            index: "3",
            heading: "Groovy Sundries: The Peace Window",
            date: "5th July, 2021",
            image: "img/groovy_the_peace_window.jpg",
            short: <>"A tous ceux qui ont servi les buts et principes de la Charte des Nations Unies et pour lesquels Dag Hammarskjöld a donné sa vie" ["To all who served the Purposes and Principles of the United Nations Charter, for which Dag Hammarskjöld gave his life."]. <br /><br />Inspired by A Biblical passage, Isaiah 9, 1–7, Russian-French artist Marc Chagall’s “The Peace Window”, was a gift from the United Nations staff members, as well as Marc Chagall himself. </>,
            long: <>The panel, whose full title is “The Window of Peace and Human Happiness”, is predominantly blue in color and full of whimsical figures and symbolism. It stands at 12 feet and 15 feet wide and contains several symbols of peace and love, such as the young child in the center being kissed by an angelic face which, emerges from a mass of flowers. On the left, below and above, motherhood and the people who are struggling for peace are depicted. Musical symbols in the panel evoke the thoughts of Beethoven's Ninth Symphony, which was a favorite of Mr. Hammarskjöld's.This beautiful, vibrant stained glass window was unveiled by Secretary-General U Thant on 17 September 1964.</>,
        },
        {
            index: "4",
            heading: "International Day of Cooperatives",
            date: "3rd July, 2021",
            image: "img/day_of_cooperatives.jpg",
            short: <>“Coming together is a beginning, keeping together is progress, working together is success" - Henry Ford. <br /><br />Cooperatives have always been an integral part in bringing people together in a democratic and equal way contributing to the eradication of poverty and promoting economic and social progress.</>,
            long: <>To increase awareness and to promote the Cooperative Movement's ideals of international solidarity, economic efficiency, equality and world peace, The International Day of Cooperatives (#coopsday) is celebrated on the first Saturday of July every year. Since 1995,the United Nations and the International Cooperative Alliance have been setting the theme for International Coops Day. <br /><br />This year, 3rd July will be celebrated as International Day of Cooperatives with the theme “Rebuild Better Together". The theme aims at unitedly building back better and stronger tomorrow overcoming the social and economic impact the COVID-19 pandemic had on different strata of the society. <br /><br />On this day, Cooperatives in different spheres of work all across the globe will showcase the strength of togetherness and how with the sustained values of self-help and solidarity, the world can overcome the immediate impacts of the pandemic. <br /><br />NITSMUN urges everyone to actively participate with the Cooperatives to build a better world for all of us.</>,
        },
        {
            index: "5",
            heading: "Groovy Sundries: The Best Weapon",
            date: "29th June, 2021",
            image: "img/groovy_war_and_peace.jpg",
            short: <>“The best weapon is to sit and talk”- NELSON MANDELA. <br /><br /> The aforementioned quote was an absolute idea for world peace and an inspiration for architecture firm Snøhheta, which gave shape to a piece of Architecture with deep Engrossed meaning, THE BEST WEAPON. <br /><br /> A six-and-half metre long arc, made of anodized aluminium for it’s durability is installed at UN Headquarters’ Plaza in NYC. The arc touches ground at its lowest point pulling the people closer to each other because of it’s curve and imparts a subtle message to promote the effectiveness of dialogues between two opposite thought processes.</>,
            long: <>Since it’s installation, it has been a sign of Dialogue and Diplomacy and a tribute to all the Noble Peace Prize laureates and their efforts to make this world a better place. According to sources, it shall be later on shifted to Nobel Peace Centre at Oslo City Hall but, right now it is located at the main entry of UN Headquarters Plaza, right beside another jaw-dropping sculpture resembling Non-violence, "The Knotted Gun".<br /><br /> An exquisite quote lead to an inspiring Idea which gave birth to a symbolic sculpture for promoting dialogue and Peace.</>,
        },
    ]


    // useEffect(()=> {

    //     // *Setting Up Page Title*
    //     document.title = props.title;

    //   }, [props.title]);
    return (

        // heading and stuff
        <Suspense fallback={<Loading />}>
            <div
                className="container-fluid p-0"
                style={{ overflowX: "hidden", fontFamily: "var(--font2)" }}
            >
                <div
                    id="intro"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "black",
                        height: "70px",
                    }}
                >
                    <h1 style={{ color: "white", fontVariant: "small-caps" , fontFamily: "var(--font2)",fontWeight:"bold"}}>
                        Articles
                    </h1>
                </div>

                {/* article starts here */}
                {articles_list.map(article => {
                    return (

                        <div key={"article-" + article.index}>
                            {/* mobile view here */}
                            <div className="row no-gutters smallscreen-article">
                                <h2
                                    style={{
                                        fontVariant: "small-caps",
                                        textAlign: "center",
                                        paddingTop: "20px",
                                    }}
                                >
                                    {article.heading}
                                </h2>
                                <div className="col-md-1"></div>
                                <div
                                    className="col-md-2 d-flex justify-content-center align-items-center"
                                    style={{ textAlign: "center" }}
                                >
                                    <img
                                        className="img-fluid aos-init"
                                        src={article.image}
                                        alt="nits mun logo"
                                        style={{ width: "70%", borderRadius: "5%" }}
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="col-md-3"
                                    style={{ textAlign: "center", overflowX: "hidden" }}
                                >
                                    <p
                                        style={{
                                            textAlign: "justify",
                                            padding: "30px",
                                            paddingBottom: "0px",
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        <p style={{ fontStyle: "italic", textAlign: "center", marginBottom: "0px", paddingTop: "0px" }} >Posted on: {article.date}</p>
                                        <br />

                                        {article.short}
                                    </p>
                                    <button
                                        id="btn1"
                                        type="button"
                                        className={"btn btn-outline-dark expand" + article.index}
                                        onClick={() => Expand(article.index)}
                                        style={{ width: "150px" }}
                                    >
                                        Read more
                                    </button>
                                </div>

                                <div className="col-md-1"></div>
                            </div>
                            <div className="row no-gutters largescreen-article">
                                <div className="col-md-1"></div>
                                <div
                                    className="col-md-4 d-flex justify-content-center align-items-center"
                                    style={{ textAlign: "center", minHeight: "200px" }}
                                >
                                    <img
                                        className="img-fluid aos-init aos-animate"
                                        src={article.image}
                                        alt="nits mun"
                                        style={{ height: "350px", borderRadius: "5%" }}
                                    />
                                </div>
                                <div
                                    className="col-md-6"
                                    style={{
                                        textAlign: "center",
                                        paddingTop: "5vh",
                                        overflowX: "hidden",
                                    }}
                                >
                                    <h2 style={{ fontVariant: "small-caps" }}>
                                        {article.heading}
                                    </h2>

                                    <p
                                        style={{
                                            textAlign: "justify",
                                            padding: "30px",
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        <p style={{ fontStyle: "italic", textAlign: "center", marginBottom: "0px", paddingTop: "0px" }} >Posted on: {article.date}</p>
                                        <br />
                                        {article.short}
                                    </p>

                                    <button
                                        id="btn1"
                                        type="button"
                                        className={"btn btn-outline-dark expand" + article.index}
                                        onClick={() => Expand(article.index)}
                                        style={{ width: "150px" }}
                                    >
                                        Read more
                                    </button>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div
                                className="row no-gutters"
                                id={"Expand" + article.index}
                                style={{ display: "none" }}
                            >
                                <div className="col-md-1"></div>
                                <div
                                    className="col-md-10"
                                    style={{ textAlign: "center", overflowX: "hidden" }}
                                >
                                    <p
                                        style={{
                                            textAlign: "justify",
                                            fontSize: "1.1rem",
                                            padding: "0 30px",
                                        }}
                                    >
                                        {article.long}
                                    </p>
                                    <button
                                        id="btn2"
                                        type="button"
                                        className="btn btn-outline-dark"
                                        onClick={() => Shrink(article.index)}
                                        style={{ width: "150px" }}
                                    >
                                        Show less
                                    </button>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            {
                                article.index !== "5" && <hr />
                            }




                        </div>
                    )
                })}


                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "black",
                        height: "70px",
                        marginTop: "10px"
                    }}
                >
                    <h1 style={{ color: "white", fontVariant: "small-caps", textAlign: "center" }}>
                        Check out <a href="https://www.instagram.com/nitsmun/">@nitsmun</a> for all our articles!
                    </h1>
                </div>

            </div>

        </Suspense>
    )
}

export default Articles;
