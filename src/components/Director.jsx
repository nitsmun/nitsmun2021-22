import {Suspense} from 'react';
import Loading from './Loading';
import "./Director.css";

function Director() {
return (
<Suspense fallback={<Loading/>}>
<div className="font container-fluid px-0 Director" style={{overflowX: "hidden",backgroundColor: "#A1A2A3"}}>
    <div
        style={{display: "flex",justifyContent: "center",alignItems: "center", width: "100%",backgroundColor: "black",height: "70px"}}>
        <h2 style={{fontVariant:"small-caps",color: "white",fontFamily:"var(--font2)"}}>Message from the Director</h2>
    </div>
    <div className="row no-gutters small">
        <div className="col-md-1"></div>
        <div className="col-md-2 d-flex justify-content-center align-items-center" style={{textAlign:"center"}}>
            <img className="img-fluid aos-init aos-animate" src="img/director1.jpg" alt="nits mun logo"
                style={{width:"80%",borderRadius:"5%"}} data-aos="flip-down"/>
        </div>
        <div className="col-md-5" style={{textAlign:"center",overflowX:"hidden"}}>


            <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem",color:"white"}}>
                Kofi Annan has rightly said, “More than ever before in human history,
                we share a common destiny. We can master it only if we face it together.
                And that, my friends, is why we have the United Nations.”<br/>
                These words are proving to be more right everyday
                in this evolving 21st century. <br/><br/>

                Model United Nations (MUN) is an
                academic simulation of the United Nations
                which provides students or I should say
                “Future Leaders” of the world an environment to not only learn but
                also practice diplomacy and international relations. <br/><br/>

                It gives me immense pleasure to announce the Eighth edition
                of NIT Silchar Model United Nations is all set to take
                place in February at NIT Silchar campus in 2020.
                I would like to extend a warm welcome to all
                participants and hope to witness a great conference.
            </p>
        </div>
        <div className="col-md-1"></div>
    </div>
    <div className="row large no-gutters">
        <div className="col-md-1"></div>
        <div className="col-md-4 d-flex justify-content-center align-items-center"
            style={{textAlign:"center",minHeight:"100vh"}}>

            <img className="img-fluid" src="img/director1.jpg" alt="nits mun logo"  style={{borderRadius:"5%"}}/>
        </div>
        <div className="col-md-6" style={{textAlign:"center",paddingTop:"5vh",overflowX:"hidden"}}>

            <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem",color:"white"}}>
                Kofi Annan has rightly said, “More than ever before in human history,
                we share a common destiny. We can master it only if we face it together.
                And that, my friends, is why we have the United Nations.”
                These words are proving to be more right everyday
                in this evolving 21st century.<br/><br/>

                Model United Nations (MUN) is an
                academic simulation of the United Nations
                which provides students or I should say
                “Future Leaders” of the world an environment to not only learn but
                also practice diplomacy and international relations. <br/><br/>

                It gives me immense pleasure to announce the Eighth edition
                of NIT Silchar Model United Nations is all set to take
                place in February at NIT Silchar campus in 2020.
                I would like to extend a warm welcome to all
                participants and hope to witness a great conference.


                <br/><br/>
                Prof. SIVAJI BANDYOPADHYAY
                <br/>
                Director, NIT Silchar<br/>

            </p>

        </div>
        <div className="col-md-1"></div>
    </div>
</div>
</Suspense>
)
}

export default Director