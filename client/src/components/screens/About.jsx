import { useEffect } from "react";
import "./About.css";

function About(props) {
    useEffect(()=> {

        // *Setting Up Page Title*
        document.title = props.title;
      
      }, [props.title]);
return (
    
<div className="container-fluid p-0" style={{overflowX: "hidden", fontFamily: "var(--font2)"}}>
    <div id="intro"
        style={{display: "flex",justifyContent: "center",alignItems: "center", width: "100%",backgroundColor: "black",height: "70px"}}>
        <h1 style={{color: "white",fontVariant:"small-caps"}}>About Us</h1>
    </div>
    <div className="row no-gutters">
        <div className="col-md-1"></div>
        <div className="col-md-10" style={{textAlign:"center",paddingTop:"5vh",overflowX:"hidden"}}>
            <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem"}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, veritatis. Deleniti tenetur
                cupiditate dolor, tempora veniam necessitatibus eius reprehenderit numquam nam libero? Recusandae magni,
                sapiente voluptatibus error repudiandae officia voluptas totam repellat vel mollitia perspiciatis
                commodi debitis iste ipsam aspernatur doloremque dolor quod saepe adipisci voluptate odio praesentium
                perferendis! Natus totam id illo aspernatur nihil fugit labore molestias dolorem delectus. Perspiciatis
                fugit ad accusantium eligendi incidunt maiores soluta officia fugiat repudiandae tempora, eum atque sint
                sit est, officiis rem cumque eaque architecto minus voluptate ab a rerum. Harum quisquam officia
                adipisci autem aperiam labore qui necessitatibus nihil cum sequi, amet, odio id laborum voluptatum ea
                totam fugiat. Sit fugiat, dolor aut distinctio soluta repellat hic nisi id dignissimos tempore
                voluptatum iure, maxime veniam quaerat impedit! Est quam minima deserunt tempora, a corporis dignissimos
                laboriosam dolore deleniti voluptate officiis placeat ad perferendis magnam consequatur odit commodi
                expedita architecto? Totam blanditiis consectetur delectus repellendus mollitia ab consequatur non nam
                vel vero, unde odio architecto debitis temporibus asperiores, rem quod quae voluptas harum sequi neque
                ut. Quas quisquam quod doloremque nesciunt, incidunt veritatis nisi officiis. Ab eveniet beatae
                perferendis rerum, saepe minima inventore atque voluptatibus repudiandae maxime amet distinctio officia
                magnam reiciendis quo!
            </p>
        </div>
        <div className="col-md-1"></div>
    </div>
    <div className="row no-gutters smallscreen">
        <h2 style={{fontVariant:"small-caps",textAlign:"center",paddingTop:"20px"}}>Message from Secretary General</h2>
        <div className="col-md-1"></div>
        <div className="col-md-2 d-flex justify-content-center align-items-center" style={{textAlign:"center"}}>
            <img className="img-fluid aos-init" src="img/mayurakshi.jpg" alt="nits mun" style={{width:"80%",borderRadius:"5%"}}/>
        </div>
        <div className="col-md-3" style={{textAlign:"center",overflowX:"hidden"}}>


            <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem"}}>

                Dear Delegates,<br />

                It is with utmost honor and pride that I, Mayurakshi Chanda, Secretary General of NITSMUN 2021, welcome
                you to
                the annual NIT Silchar Model United Nations conference to be held on 26th - 28th February,
                2021.<br /><br />

                NIT Silchar Model United Nations has come far and has proved its excellence since its inception in 2014.
                Through
                the simulation of the annual conferences and year-round activity for the MUN enthusiasts, NITSMUN
                continues to
                uphold its passion and dedication to engage the youth in MUN culture and bring out the best in
                them.<br /><br />

                I highly encourage you to be a part of our upcoming conference for this will be a golden opportunity to
                expand
                your knowledge, utilize it in engaging debates and build your critical thinking as well as writing
                skills. You
                will be able to connect with talented people and learn immensely throughout the process, from the
                comfort of
                your home.<br /><br />

                On behalf of my team, I look forward to welcoming you and hope you will have a great
                experience!<br /><br />

                Best Regards,<br /><br />

                Mayurakshi Chanda,<br />

                Secretary General,<br />

                NIT Silchar Model United Nations
            </p>
        </div>

        <div className="col-md-1"></div>
    </div>
    <div className="row no-gutters largescreen" style={{backgroundColor: "gray"}}>
        <div className="col-md-1"></div>
        <div className="col-md-4 d-flex justify-content-center align-items-center"
            style={{textAlign:"center",minHeight:"100vh"}}>
            <img className="img-fluid aos-init aos-animate" src="img/mayurakshi.jpg" alt="nits mun logo"
                style={{height:"60vh",borderRadius:"5%"}} />
        </div>
        <div className="col-md-6" style={{textAlign:"center",paddingTop:"5vh",overflowX:"hidden"}}>
            <h2 style={{fontVariant: "small-caps",color: "white"}}>Message from Secretary General</h2>

            <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem", color: "white"}}>

                Dear Delegates,<br />

                It is with utmost honor and pride that I, Mayurakshi Chanda, Secretary General of NITSMUN 2021, welcome
                you to
                the annual NIT Silchar Model United Nations conference to be held on 26th - 28th February,
                2021.<br /><br />

                NIT Silchar Model United Nations has come far and has proved its excellence since its inception in 2014.
                Through
                the simulation of the annual conferences and year-round activity for the MUN enthusiasts, NITSMUN
                continues to
                uphold its passion and dedication to engage the youth in MUN culture and bring out the best in
                them.<br /><br />

                I highly encourage you to be a part of our upcoming conference for this will be a golden opportunity to
                expand
                your knowledge, utilize it in engaging debates and build your critical thinking as well as writing
                skills. You
                will be able to connect with talented people and learn immensely throughout the process, from the
                comfort of
                your home.<br /><br />

                On behalf of my team, I look forward to welcoming you and hope you will have a great
                experience!<br /><br />

                Best Regards,<br /><br />

                Mayurakshi Chanda,<br />

                Secretary General,<br />

                NIT Silchar Model United Nations

            </p>

        </div>
        <div className="col-md-1"></div>
    </div>
    <div className="row no-gutters">
        <div className="col-md-1"></div>
        <div className="col-md-10" style={{textAlign:"center",paddingTop:"5vh",overflowX:"hidden"}}>
            <div style={{padding : "30px"}}>
            <h2 style={{borderBottom: "2px solid black",fontVariant: "small-caps"}}>What is a MUN?</h2>
            <p style={{textAlign:"justify",fontSize:"1.1rem"}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, veritatis. Deleniti tenetur
                cupiditate dolor, tempora veniam necessitatibus eius reprehenderit numquam nam libero? Recusandae magni,
                sapiente voluptatibus error repudiandae officia voluptas totam repellat vel mollitia perspiciatis
                commodi debitis iste ipsam aspernatur doloremque dolor quod saepe adipisci voluptate odio praesentium
                perferendis! Natus totam id illo aspernatur nihil fugit labore molestias dolorem delectus. Perspiciatis
                fugit ad accusantium eligendi incidunt maiores soluta officia fugiat repudiandae tempora, eum atque sint
                sit est, officiis rem cumque eaque architecto minus voluptate ab a rerum. Harum quisquam officia
                adipisci autem aperiam labore qui necessitatibus nihil cum sequi, amet, odio id laborum voluptatum ea
                totam fugiat. Sit fugiat, dolor aut distinctio soluta repellat hic nisi id dignissimos tempore
                voluptatum iure, maxime veniam quaerat impedit! Est quam minima deserunt tempora, a corporis dignissimos
                laboriosam dolore deleniti voluptate officiis placeat ad perferendis magnam consequatur odit commodi
                expedita architecto? Totam blanditiis consectetur delectus repellendus mollitia ab consequatur non nam
                vel vero, unde odio architecto debitis temporibus asperiores, rem quod quae voluptas harum sequi neque
                ut. Quas quisquam quod doloremque nesciunt, incidunt veritatis nisi officiis. Ab eveniet beatae
                perferendis rerum, saepe minima inventore atque voluptatibus repudiandae maxime amet distinctio officia
                magnam reiciendis quo!
            </p>
            </div>
        </div>
        <div className="col-md-1"></div>
    </div>
    <hr />
    <div className="row no-gutters">
        <div className="col-md-1"></div>
        <div className="col-md-10" style={{textAlign:"center",overflowX:"hidden"}}>
            <div style={{padding: "30px"}}>
            <h2 style={{borderBottom: "2px solid black",fontVariant: "small-caps"}}>Our Vision</h2>
            <p style={{textAlign:"justify",fontSize:"1.1rem"}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, veritatis. Deleniti tenetur
                cupiditate dolor, tempora veniam necessitatibus eius reprehenderit numquam nam libero? Recusandae magni,
                sapiente voluptatibus error repudiandae officia voluptas totam repellat vel mollitia perspiciatis
                commodi debitis iste ipsam aspernatur doloremque dolor quod saepe adipisci voluptate odio praesentium
                perferendis! Natus totam id illo aspernatur nihil fugit labore molestias dolorem delectus. Perspiciatis
                fugit ad accusantium eligendi incidunt maiores soluta officia fugiat repudiandae tempora, eum atque sint
                sit est, officiis rem cumque eaque architecto minus voluptate ab a rerum. Harum quisquam officia
                adipisci autem aperiam labore qui necessitatibus nihil cum sequi, amet, odio id laborum voluptatum ea
                totam fugiat. Sit fugiat, dolor aut distinctio soluta repellat hic nisi id dignissimos tempore
                voluptatum iure, maxime veniam quaerat impedit! Est quam minima deserunt tempora, a corporis dignissimos
                laboriosam dolore deleniti voluptate officiis placeat ad perferendis magnam consequatur odit commodi
                expedita architecto? Totam blanditiis consectetur delectus repellendus mollitia ab consequatur non nam
                vel vero, unde odio architecto debitis temporibus asperiores, rem quod quae voluptas harum sequi neque
                ut. Quas quisquam quod doloremque nesciunt, incidunt veritatis nisi officiis. Ab eveniet beatae
                perferendis rerum, saepe minima inventore atque voluptatibus repudiandae maxime amet distinctio officia
                magnam reiciendis quo!
            </p>
            </div>
        </div>
        <div className="col-md-1"></div>
    </div>
    <hr/>
</div>
)
}

export default About