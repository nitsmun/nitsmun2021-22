import React from 'react'
import "./Article.css";

function Article() {

    function Expand(){
        let element = document.querySelector("#Expand")
        let btn = document.getElementById("btn1")
        btn.style.visibility = "hidden"
        element.style.display = ""
    }

    function Srink(){
        let element = document.querySelector("#Expand")
        let btn = document.getElementById("btn1")
        btn.style.visibility = "visible"
        element.style.display = "none"
    }

return (
<div>
    <div className="container-fluid p-0" style={{overflowX: "hidden"}}>
        <div className="separator">
            <div className="line"></div>
            <h2>Read our Article</h2>
            <div className="line"></div>
        </div>
        <div className="row no-gutters">
            <div className="col-md-1"></div>
            <div className="col-md-10" style={{textAlign:"center",overflowX:"hidden"}}>
                <div style={{padding: "30px"}}>
                <h3 style={{borderBottom: "2px solid black",fontVariant: "small-caps"}}>Heading for the article</h3>
                <p style={{textAlign:"justify",fontSize:"1.1rem"}}>
                    Date : 15th July 2021
                    <br></br>
                    <br></br>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, veritatis. Deleniti tenetur
                    cupiditate dolor, tempora veniam necessitatibus eius reprehenderit numquam nam libero? Recusandae
                    magni,
                    sapiente voluptatibus error repudiandae officia voluptas totam repellat vel mollitia perspiciatis
                    commodi debitis iste ipsam aspernatur doloremque dolor quod saepe adipisci voluptate odio
                    praesentium
                    perferendis! Natus totam id illo aspernatur nihil fugit labore molestias dolorem delectus.
                    Perspiciatis
                    fugit ad accusantium eligendi incidunt maiores soluta officia fugiat repudiandae tempora, eum atque
                    sint
                    sit est, officiis rem cumque eaque architecto minus voluptate ab a rerum. Harum quisquam officia
                    adipisci autem aperiam labore qui necessitatibus nihil cum sequi, amet, odio id laborum voluptatum
                    ea
                </p>
                <button id="btn1" type="button" className="btn btn-outline-dark mt-3" onClick={Expand} style={{width: "150px"}}>Read more</button>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
        <div className="row no-gutters" id="Expand" style={{display: "none"}}>
            <div className="col-md-1"></div>
            <div className="col-md-10" style={{textAlign:"center",overflowX:"hidden"}}>
                <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem"}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor praesentium veniam minus iste
                    asperiores, fugit, tempore libero quod voluptate obcaecati, unde ab aperiam. Asperiores ratione
                    harum vitae excepturi ipsam natus perspiciatis? Cupiditate quae error atque recusandae reiciendis
                    vero minima consequuntur natus sed temporibus, magni exercitationem ea impedit consequatur facere
                    iure? Blanditiis, alias ipsum. Neque, non. Dolore dolorum voluptate maxime quod minus ullam
                    doloribus voluptates praesentium similique cum at neque recusandae sed veritatis ex molestias
                    dignissimos, eaque autem numquam cupiditate repellendus soluta! Repellat rerum earum molestias
                    quaerat. Praesentium necessitatibus placeat beatae nihil vero laborum maxime mollitia sint, eum esse
                    est assumenda optio voluptatem odit distinctio iste cumque quos cupiditate obcaecati quod molestias,
                    architecto laudantium rem! Commodi ut tempora doloribus facere officia perferendis hic repudiandae,
                    amet dicta pariatur molestias similique, unde totam accusamus qui delectus repellendus accusantium
                    ea numquam culpa iste voluptatem expedita debitis. Explicabo ab mollitia animi laudantium
                    praesentium facilis maiores, non ipsam quaerat ad, deleniti in officia! Reiciendis tenetur dolore
                    nobis expedita ab iste perspiciatis laboriosam accusamus cum officiis saepe facilis doloribus
                    repellat sunt porro excepturi consequatur provident tempora, dolorem minima asperiores laborum nihil
                    quo aliquam! Ullam, totam debitis soluta, dignissimos enim doloremque cupiditate, expedita veniam
                    officiis dolorum a? Voluptatibus maiores accusamus unde eaque dolore voluptas architecto, facere
                    praesentium, velit incidunt corporis provident ex amet officia? Dignissimos explicabo corrupti iure
                    ratione possimus odit minus. Commodi obcaecati corporis minus, iure sunt officiis quidem rem ut
                    beatae ipsam quo nihil maiores asperiores a distinctio! Tempore, voluptatibus aspernatur incidunt
                    asperiores laborum et corrupti saepe id distinctio. Ullam, laborum animi fugit vel optio quisquam
                    possimus qui non reiciendis autem nisi? Quaerat corporis nam dolorum, autem dolores at temporibus ab
                    sed nobis, aliquid laboriosam, magni facilis. Velit, recusandae perferendis iste corrupti quis
                    incidunt harum laudantium similique corporis quae vel, maiores numquam veniam pariatur facere illo
                    laborum soluta autem ad quod! Deserunt eos ut ea tempora animi repellat porro, quia saepe non magni,
                    inventore ex optio! Magnam totam asperiores aliquam, vitae alias optio aperiam ducimus tenetur
                    impedit nulla, a neque necessitatibus consectetur recusandae. Delectus ad odio vero consequatur
                    beatae sequi accusamus hic praesentium, dicta animi laboriosam sapiente, eveniet ab perferendis.
                    Officiis quisquam similique velit nulla debitis perferendis, a ullam tenetur quis deleniti corporis
                    nostrum voluptatum sapiente in ipsum! Repellat perferendis quis quos quam architecto mollitia, ex
                    modi magnam hic optio repudiandae id impedit. Perspiciatis cum, eveniet obcaecati non veritatis
                    quidem! Corporis sequi vel atque! Nihil nesciunt adipisci rem suscipit quos? Voluptatem corrupti
                    beatae sint? Consequatur, laudantium odio culpa molestiae commodi deserunt eaque aliquam rem dolore
                    aperiam, natus placeat soluta doloremque expedita reiciendis possimus similique ipsam aspernatur
                    beatae magnam incidunt facere recusandae. Quia ratione dicta consequuntur numquam fugit, iste nihil,
                    ducimus quaerat fuga molestias pariatur unde illum odit harum commodi aperiam voluptatibus animi
                    quibusdam repellendus? Quidem voluptas accusantium fugit. Animi illo numquam cum vel. Facilis quam
                    magnam voluptatum molestias tempora sunt ipsa harum. Quia, blanditiis suscipit. Nobis quas quo sit
                    nesciunt alias tempora, velit rerum? Tempora ullam quia qui animi ratione et repellendus veritatis
                    culpa ea! Molestiae!
                </p>
                <button id="btn2" type="button" className="btn btn-outline-dark" onClick={Srink} style={{width: "150px"}}>Show less</button>
            </div>
            <div className="col-md-1"></div>
        </div>
        <div className="separator" style={{marginTop: "50px"}}>
            <div className="line"></div>
            <h2>Our Socials</h2>
            <div className="line"></div>
        </div>
        <div className="row no-gutters" style={{padding: "50px"}}>
            <div className="col-md-6" style={{marginTop: "2vh",display: "flex",justifyContent: "center",alignItems: "center"}}>
                <img src="img/dummy_img.png" className="img-fluid" alt="" style={{borderRadius: "5%"}}/>
            </div>
            <div className="col-md-6" style={{marginTop: "2vh",display: "flex",justifyContent: "center",alignItems: "center"}}>
                <img src="img/dummy_img.png" className="img-fluid" alt="" style={{borderRadius: "5%"}}/>
            </div>
        </div>
    </div>
</div>
)
}

export default Article