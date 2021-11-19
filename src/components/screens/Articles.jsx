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
            heading: "Groovy Sundries: The Best Weapon",
            date: "29th June, 2021",
            image: "img/groovy_war_and_peace.jpg",
            short: <>“The best weapon is to sit and talk”- NELSON MANDELA. <br /><br /> The aforementioned quote was an absolute idea for world peace and an inspiration for architecture firm Snøhheta, which gave shape to a piece of Architecture with deep Engrossed meaning, THE BEST WEAPON. <br /><br /> A six-and-half metre long arc, made of anodized aluminium for it’s durability is installed at UN Headquarters’ Plaza in NYC. The arc touches ground at its lowest point pulling the people closer to each other because of it’s curve and imparts a subtle message to promote the effectiveness of dialogues between two opposite thought processes.</>,
            long: <>Since it’s installation, it has been a sign of Dialogue and Diplomacy and a tribute to all the Noble Peace Prize laureates and their efforts to make this world a better place. According to sources, it shall be later on shifted to Nobel Peace Centre at Oslo City Hall but, right now it is located at the main entry of UN Headquarters Plaza, right beside another jaw-dropping sculpture resembling Non-violence, "The Knotted Gun".<br /><br /> An exquisite quote lead to an inspiring Idea which gave birth to a symbolic sculpture for promoting dialogue and Peace.</>,
        },
        {
            index: "2",
            heading: "International Day of Cooperatives",
            date: "3rd July, 2021",
            image: "img/day_of_cooperatives.jpg",
            short: <>“Coming together is a beginning, keeping together is progress, working together is success" - Henry Ford. <br /><br />Cooperatives have always been an integral part in bringing people together in a democratic and equal way contributing to the eradication of poverty and promoting economic and social progress.</>,
            long: <>To increase awareness and to promote the Cooperative Movement's ideals of international solidarity, economic efficiency, equality and world peace, The International Day of Cooperatives (#coopsday) is celebrated on the first Saturday of July every year. Since 1995,the United Nations and the International Cooperative Alliance have been setting the theme for International Coops Day. <br /><br />This year, 3rd July will be celebrated as International Day of Cooperatives with the theme “Rebuild Better Together". The theme aims at unitedly building back better and stronger tomorrow overcoming the social and economic impact the COVID-19 pandemic had on different strata of the society. <br /><br />On this day, Cooperatives in different spheres of work all across the globe will showcase the strength of togetherness and how with the sustained values of self-help and solidarity, the world can overcome the immediate impacts of the pandemic. <br /><br />NITSMUN urges everyone to actively participate with the Cooperatives to build a better world for all of us.</>,
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
            heading: "World Population Day",
            date: "11th July, 2021",
            image: "img/day_world_population.jpg",
            short: <>"Rights and choices are the answer: Whether baby boom or bust, the solution to shifting fertility rates lies in prioritizing the reproductive health and rights of all people."<br /><br /> With the above-given theme, the 32nd World population Day is celebrated this year. Established by the Governing Council of the United Nations Development Program on 11th July 1989, the event was first observed on 11th July 1990, in more than 90 countries. World Population Day is an annual event, with an aim to raise awareness of global population issues.</>,
            long: <>The Covid-19 pandemic and its control measures have impacted health care systems particularly in sexual and reproductive health and reproductive behavior globally. It has also marked an increase in gender-based violence, and the risk of child marriage and female genital mutilation, as programs to abolish the harmful practices were disrupted. <br /><br /> Thus, World Population Day is the celebration of awareness, people are encouraged to learn about issues like the importance of family planning, gender equality, poverty, human rights, maternal and baby health, right to health, sexuality education, use of contraceptives, and safety measures, reproductive health, adolescent pregnancy, girl child education, child marriage, sexually transmitted infections, etc. <br /><br />NITSMUN reminds everyone that collective efforts to control population will help to ensure resources for all!</>,
        },
        {
            index: "5",
            heading: "Groovy Sundries: War and Peace",
            date: "13th July, 2021",
            image: "img/groovy_war_and_peace.jpg",
            short: <>"War and Peace are more than magnificent works of art. They are Portinari’s call to action. Thanks to him, all leaders who enter the United Nations see the terrible toll of war and the universal dream for peace."<br /><br />Quoted by Ban Ki-moon during the inauguration of War and Peace, in the United Nations Headquarters on September 8, 2015, the above lines were dedicated to Candido Portinari, a Brazilian painter.</>,
            long: <>His masterpiece War and Peace, made between 1952 and 1956, consists of a set of two paintings that work together as a representation of the atrocity of war and the suffering of victims and the importance of maintaining peace and the attempts to end violent conflicts in the world. <br /><br /> Recognised as a gift from the Brazilian government for the United Nations Headquarters, these paintings are about 14.32 metres tall and 10.66 metres large each.<br /><br /> War and peace were marked as Portinari’s last work and the reason for the artist’s death on February 6, 1962. Despite being warned by the doctors about being intoxicated due to long term inhalation of the paint he used, Portinari was dedicated to finishing his masterpieces and thus, sacrificed his own health in the hope to send an important message to the world.</>,
        },
        {
            index: "6",
            heading: "World Youth Skills Day",
            date: "15th July, 2021",
            image: "img/youth_skills_day.jpg",
            short: <>The COVID-19 Pandemic has enveloped the world population and has had its toll on various sectors of society, leaving the economy crippled. With institutions of learning coming to a closure, work from home being the sole retreat from avoiding the spread of infection, the developing countries with lack of accessibility to technological instruments of communication have suffered staggering unemployment in a world practising social distancing. For the creation of a better world economy that promotes employment through the development of skills, World Youth Skills Day is observed. The objective of the day is to direct the youth towards making informed choices in matters of employment and focus on the development of strategies for equipping the youth with skills for entrepreneurship and decent work.</>,
            long: <>15th July was first recognised as world Youth Skills Day in the year 2014 by the United Nations General Assembly. The UNESCO and the UNEVOC, working under the United Nations, contribute towards the promotion of the activities associated with the day. Furthermore, to realise the objective behind the observance of this day, the India Skills Competition is held every two years.<br/>With the aim to celebrate the creativity and resilience of youth through the pandemic, the theme for this year has been decided to be “Reimagining youth skills post-pandemic”. It devotes attention to areas of skill development in various fields including Technical and Vocal education and training (TVEC), which would help in realising the goal of Education 2030.<br/><br/>Recognising the importance of acquiring skills in creating sustainable economic growth, the NITSMUN fraternity wishes everyone a happy World Youth Skills Day. Start training in a new skill today!</>,
        }, 
        {
            index: "7",
            heading: "International Nelson Mandela Day",
            date: "18th July, 2021",
            image: "img/nelson_mandela_day.jpg",
            short: <>AS WE LET OUR OWN LIGHT SHINE, WE UNCONSIOUSLY GIVE OTHER PEOPLE PERMISSION TO DO THE SAME” - Nelson Mandela<br/><br/>When we think of great personalities who have affected lives of millions around the world and have been the source of inspiration for generations. One name that comes up in everyone’s mind is Nelson Mandela. He was a former president of south Africa from 1994 to 1999. he was the country’s first black head of state and the first elected in a fully representative democratic election. His enormous contributions towards laying the foundation of democratic south Africa with peaceful termination of the Apartheid regime led him to win the Nobel Peace Prize in 1993.</>,
            long: <>The United Nations General Assembly (UNGA) declared 18 July as “The Nelson Mandela International Day” on November 2009. Resolution A/RES/64/13 recognises and acknowledges his struggle and contributions for promoting a culture of peace internationally.<br/><br/>The theme for this year is “Take action, inspire change”. It signifies the importance of working together in this tough time of pandemic to bring change in the upcoming days.<br/><br/>This year on Nelson Mandela’s birthday, NITSMUN urges everyone to put a step forward to help those who are in need, inspire them and collectively pass through this fight against COVID-19 and move toward a healthy and peaceful world.</>,
        },
        {
            index: "8",
            heading: "Groovy Sundries: Bust of Polish astronomer Nicolaus Copernicus",
            date: "19th July, 2021",
            image: "img/groovy_bust_of_polish_astronomer.jpg",
            short: <>“To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge”— Nicolaus Copernicus<br/><br/>Nicolaus Copernicus (1473-1543) was a renaissance polymath, an active mathematician and astronomer, who formulated a model of the universe that proved that in the middle of everything is the sun rather than the Earth. His books “De revolutionibus orbium Coelestium” had led to the end of the heliocentric theory of the sun’s motion and instead suggested the movement of planets around the sun.</>,
            long: <>Copernicus’ Bust was carved out from a block of Finnish granite. Secretary General U Thant in his presentation of this gift in 1970 said “Copernicus was one of those rare brilliant individuals who extend the frontiers of knowledge for mankind. All of us at the United Nations will draw inspiration from the universal message which he brings to us. Having laid the foundation of modern planetary astronomy, Copernicus can take credit for having launched our twentieth century astronauts and cosmonauts on their adventurous journey into the universe." Nicolaus Copernicus had truly revolutionised the world of Mathematics and Astronomy. The Bust is located at the Dag Hammarskjöld Library, New York.</>,
        },
        {
            index: "9",
            heading: "Groovy Sundries: La Freccia(The Arrow)",
            date: "27th July, 2021",
            image: "img/groovy_arnaldo_pomodoro.jpg",
            short: <>Arnaldo Pomodoro, the author of 'La Freccia" was born in Italy, on June 23, 1926. Everyone is surprised by his work because he deeply takes care into geometrical importance of the sculpture as well as inside material.Firstly he will work on the drawing and later he creates it for life-size plaster preparation. Pomodoro stated that "artistic deformation occurs here when the 'freccia' splits into two open segments in space."</>,
            long: <>Carlo Azeglio Ciampi, The president of Italian Republic, donated the sculpture to UNESCO during 31st General Conference of UNESCO. At first it was placed at Fontenoy Piazza but later it was shifted to the Bonvin Piazza.Actually the bronze "La Freccia" gives the impression of having been open, leaving the cracks as signifying the fragility of the material.The Italian State Secretary for Cultural Assets and Activities clearly explained during the inauguration that the two wings in the Sculpture represents 'Culture and Education' that elevates the man like this arrow towards their noble goals.</>,
        }, 
        {
            index: "10",
            heading: "Groovy Sundries: Peace monument",
            date: "25th October, 2021",
            image: "img/peace_monument.jpg",
            short: <>Popularly known as the statue of “Mir”(Peace), one of the renowned works of Croation sculptor Antun Augustinčić, it is one of the symbols of the United Nations Headquarters in New York.</>,
            long: <><br/>The statue symbolising a female equestrian leading the Nations of the World towards peace, was cast in bronze in Zagreb in 1954 while the 33 feet high pedestal, on which she stands, was made of marble from the Croatian Island of Brač. The statue shows the equestrian carrying an olive branch in one hand while a globe on the other, with her cloak fluttering on her back and the stance of the horse that suggests powerful forward movement.<br/><br/>The construction of the statue was completed in Rijeka, after which, it was transported to New York. Originally a gift of the Government of the former Yugoslavia, it is placed on the North Lawn of the United Nations Headquarters.</>,
        },
        {
            index: "11",
            heading: "International Day to End Impunity for Crimes against Journalists",
            date: "2nd November, 2021",
            image: "img/crime_against_journalists.jpg",
            short: <>Reporting the news is often a risky job if one is up against the powerful, and statistics tell us an equivalent. It has been found that one journalist has been murdered every 4 days within the last decade, on an average. Countries with no armed conflict had a higher ratio of these crimes. More than 12,000 journalists were assassinated between 2006 and 2020 for just doing their job. The killers walk free in 9 out of 10 cases, says the UNESCO observatory for killed journalists. These stats paint a dark picture for freedom of the press.</>,
            long: <>To raise awareness and formulate ways to counter these incidents, the United Nations General Assembly declared November 2 as the International Day to End Impunity for Crimes against Journalists. The resolution passed within the General Assembly in 2013 not only condemns all such attacks on journalists but also urges all member nations to guard journalists from threats to their lives and make sure that the victims get access to the specified remedies. In addition, it appeals to counties to empower journalists by giving them a secure atmosphere to try to do their job with no interference.<br/><br/>The key aspect of prosecutorial services is the primary focus of this year’s International Day to end Impunity for Crimes against Journalists. This includes a deep check out investigating and prosecuting not just assassinations but all types of threats of violence towards journalists.<br/><br/>This day just doesn’t address the sole issue of murdering journalists, but goes beyond and also incorporate talks about threats of violence, kidnapping, torture, harassment, and online harassment. Women journalists are the foremost common targets of online harassment.<br/><br/>These dangers lead to an environment where ideas and speech cannot travel freely. This is the rationale that such each day is required to guard and empower media professionals across the planet.</>,
        },
        {
            index: "12",
            heading: "Groovy Sundries: Zun of Peace",
            date: "3rd November, 2021",
            image: "img/zun_of_peace.jpg",
            short: <>Modelled after Zun, a bronze ritual object in China, the sculpture Zun of Peace is a gift to United Nations from China.<br/><br/>The word “Zun” means reverence in Chinese. China’s high regar and the wishes of 1.3 billion Chinese people to the United Nations is represented by this sculpture.</>,
            long: <>The sculpture is coloured in “Chinese Red” with dragons on top which represent the guardians of peace. Prosperity across the whole wide world is represented by the elephants and phoenixes on  both sides. Traditional elements on the whole work represent the Silk Road, representative of China’s vision of peace and development. China’s high regard for 70 years of the United Nation’s dedication to world peace is symbolized by 7 flying doves.</>,
        },
        {
            index: "13",
            heading: "International Day for Preventing the Exploitation of the Environment in War and Armed Conflict",
            date: "6th November, 2021",
            image: "img/exploitation_of_env_in_war.jpg",
            short: <>Even though humanity has always counted its war casualties in terms of dead and wounded soldiers and civilians, destroyed cities and livelihoods, the environment has often remained the unpublicized victim of war. Water wells have been polluted, crops torched, forests cut down, soils poisoned, and animals killed to gain military advantage.<br/><br/>Then United Nations attaches great importance to ensuring that action on the environment is part of conflict prevention and peacekeeping  strategies, because there can be no durable peace if the natural resources that sustain livelihoods and ecosystems are destroyed.</>,
            long: <>On 27 May 2016, the United Nations Environment Assembly adopted resolution UNEP/EA.2/Res.15, which recognized the role of healthy ecosystems and sustainably managed resources in reducing the risk of armed conflict, and reaffirmed its strong commitment to the full implementation of the Sustainable Development Goals listed in General Assembly resolution 70/1, entitled “Transforming our world: the 2030 Agenda for Sustainable Development”.<br/><br/>Therefore, the United Nations Environment Programme (UNEP) has found that over the last 60 years, at least 40% of all internal conflicts have been linked to the exploitation of natural resources.<br/><br/>So, on 5 November 2001, the UN General Assembly declared 6 November of each year as the International Day for Preventing the Exploitation of the Environment in War and Armed Conflict.</>,
        },
        {
            index: "14",
            heading: "World Science Day for Peace and Development",
            date: "10th November, 2021",
            image: "img/science_day.jpg",
            short: <>Every year since 2002, UNESCO observes 10 November as World Science Day for Peace and Development. The day emphasises the importance of science in society and the importance of involving the common people in growing scientific challenges. It aims to ensure that citizens are informed and up-to-date about the developments in science. The day sheds light on the vital contributions of scientists on the daily lives of humans.</>,
            long: <>COVID 19 pandemic made the world realize the importance of science. Although society wasn’t completely oblivious to the existence of science, the importance of science in society was rejuvenated in the pandemic.<br/><br/>The main purpose of this day is to make the common public aware of the role of science for peaceful and sustainable societies. Promoting national and international solidarity for shared science and renewing commitments for the use of science for benefit of societies is also a purpose of this day. It also strives to call attention to the different hurdles that science faces in its pursuit of knowledge.<br/><br/>"Building Climate-Ready Communities" is the theme of World Science Day for Peace and Development for 2021. Now that the pandemic induced wounds are healing, the theme targets the bigger evil, Climate change. The objective is to bring science closer to society and highlight scientific and technological solutions to some of society's major global challenges today.</>,
        },
        {
            index: "15",
            heading: "Good defeats Evil",
            date: "15th November, 2021",
            image: "img/good_defeats_evil.jpg",
            short: <>"I don't think good and evil are polarised".<br/>– Sam Mendes<br/><br/>The Sculpture was created by the Russian painter and sculptor, Zurab Tsereteli. It remembers  the 1987 signing of the Treaty on the Elimination of Intermediate - Range and Shorter - Range Nuclear Missiles (INF Treaty), and is in celebration of the 45 Session of the General Assembly. It was created as a monument to peace, the sculpture consists of several parts of actual US and Soviet missiles. The work actually depicts an allegorical St. George, one arm raised person, as he drives a lance through a double headed dragon.</>,
            long: <>But really,the dragon in the sculpture is not the important mythological beast of the first Christian tradition.It's the specter of nuclear war vanquished by the historic treaties between the Soviet Union and the United States. Therefore the dragon in the sculpture is shown as lying down amid the broken pieces of Soviet SS-20 and U.S. Pershing missiles. Hence actual fragments of that weapons are utilized in the sculpture.</>,
        },
        {
            index: "16",
            heading: "nternational Day for Tolerance",
            date: "16th November, 2021",
            image: "img/int_day_for_tolerance.jpg",
            short: <>“In the practice of tolerance, one’s enemy is his best teacher”<br/>–  Dalai Lama XIV<br/><br/>International Day for Tolerance is commemorated every year on November 16 to strengthen the mutual understanding among different cultures and promote tolerance among people. The day began as an initiative to affirm that tolerance is an appreciation of the world’s diversity which recognises human rights and the freedom of others. The wide diversity of culture, mindset, ethnicity around the globe requires only tolerance to ensure the peaceful survival of mixed communities.</>,
            long: <>The United Nations declared November 16 as the International Day for tolerance in 1995 because it was the day when the UNESCO(United Nations Educational, Scientific and Cultural Organization) formulated the Declaration of Principles on Tolerance. The Declaration signifies tolerance not only as a moral duty, but also as a political and legal requirement for Individuals, Groups and States. In 1995, to mark the UN year for tolerance and 125th birth anniversary of Mahatma Gandhi ji, UNESCO created a prize (The UNESCO-Madanjeet Singh Prize for the Promotion of Tolerance and Non-Violence) to reward those who have made significant contributions in the field of science, art, culture and communication with the aim of promoting the spirit of tolerance and non violence. The prize is awarded to institutions/organisations or individuals every two year on this day.<br/><br/>To celebrate the day, various events are organised around the globe at educational institutions to generate awareness about the importance of tolerance among cultures and socio-economic groups. This imperative lies at the core of the United Nations Charter, as well as the Universal Declaration of Human Rights. The true virtue of tolerance is more important than ever in this era of rising and violent extremism and widening conflicts that are characterized by a fundamental disregard for human life.<br/><br/>NITSMUN urges everyone to develop a feeling of respect, acceptance and appreciation for the rich diversity of our world’s culture and expressions and to lead the world towards a peaceful future.</>,
        },
        
        
    ]

    articles_list.reverse()
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
                                article.index !== "1" && <hr />
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
                        backgroundColor: "var(--theme4-060)",
                        marginTop: "10px"
                    }}
                >
                    <h3 style={{ color: "white", fontVariant: "small-caps", textAlign: "center" }}>
                        Check out <a href="https://www.instagram.com/nitsmun/" style={{textDecoration:"none",color:"blue"}}>@nitsmun</a> for all our articles!
                    </h3>
                </div>

            </div>

        </Suspense>
    )
}

export default Articles;
