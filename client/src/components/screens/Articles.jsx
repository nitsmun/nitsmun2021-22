import React from 'react'
import { useEffect } from "react";
import "./Articles.css";

function Articles(props) {
    function Expand(){
        var buttons = document.getElementsByClassName('expand');
        for(var i=0; i< buttons.length; i++){
        buttons[i].style.visibility = "hidden"
        }
        let element = document.querySelector("#Expand")
        element.style.display = ""
    }

    function Srink(){
        let element = document.querySelector("#Expand")
        var buttons = document.getElementsByClassName('expand');
        for(var i=0; i< buttons.length; i++){
        buttons[i].style.visibility = "visible"
        }
        element.style.display = "none"
    }

    useEffect(()=> {

        // *Setting Up Page Title*
        document.title = props.title;
      
      }, [props.title]);
    return (
    <div className="container-fluid p-0" style={{overflowX: "hidden"}}>
        <div id="intro"
            style={{display: "flex",justifyContent: "center",alignItems: "center", width: "100%",backgroundColor: "black",height: "70px"}}>
            <h1 style={{color: "white",fontVariant: "small-caps"}}>Articles</h1>
        </div>
        <div className="row no-gutters smallscreen-article">
            <h2 style={{fontVariant:"small-caps",textAlign:"center",paddingTop:"20px"}}>Heading for the article</h2>
            <div className="col-md-1"></div>
            <div className="col-md-2 d-flex justify-content-center align-items-center" style={{textAlign:"center"}}>
              <img className="img-fluid aos-init" src="img/dummy_img.png" alt="nits mun logo" style={{width:"80%",borderRadius:"5%"}}/>
            </div>
            <div className="col-md-3" style={{textAlign:"center",overflowX:"hidden"}}>
        
        
              <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem"}}>
                Date : 15th July 2021
                <br/>
                <br/>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure libero illum fugit, doloribus
                molestias asperiores ipsa eaque aliquid, deserunt harum veritatis minus, delectus necessitatibus
                reprehenderit. Ratione necessitatibus accusantium repellat illo inventore blanditiis, unde dolorum
                totam. Quas eaque odio pariatur tenetur quidem, dicta at consectetur officia similique illum alias
                delectus cum voluptatum voluptates obcaecati, placeat nisi enim nam numquam ratione veniam laborum,
                in fugiat. Ipsam officiis sit, aspernatur debitis, repellat nesciunt odio optio omnis ipsa, totam
                quam cupiditate reiciendis dolor obcaecati? Cumque doloribus, sequi modi id adipisci laudantium
                dolor consequatur atque tempora quod error. Perspiciatis vero necessitatibus iure exercitationem
                dolores! Ad?
              </p>
              <button id="btn1" type="button" className="btn btn-outline-dark expand" onClick={Expand} style={{width: "150px"}}>Read more</button>
            </div>
        
            <div className="col-md-1"></div>
          </div>
        <div className="row no-gutters largescreen-article">
            <div className="col-md-1"></div>
            <div className="col-md-4 d-flex justify-content-center align-items-center"
                style={{textAlign:"center",minHeight:"100vh"}}>
                <img className="img-fluid aos-init aos-animate" src="img/dummy_img.png" alt="nits mun"
                    style={{height:"60vh",borderRadius:"5%"}}/>
            </div>
            <div className="col-md-6" style={{textAlign:"center",paddingTop:"5vh",overflowX:"hidden"}}>
                <h2  style={{fontVariant: "small-caps"}}>Heading for the article</h2>

                <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem"}}>
                    Date : 15th July 2021
                    <br/>
                    <br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure libero illum fugit, doloribus
                    molestias asperiores ipsa eaque aliquid, deserunt harum veritatis minus, delectus necessitatibus
                    reprehenderit. Ratione necessitatibus accusantium repellat illo inventore blanditiis, unde dolorum
                    totam. Quas eaque odio pariatur tenetur quidem, dicta at consectetur officia similique illum alias
                    delectus cum voluptatum voluptates obcaecati, placeat nisi enim nam numquam ratione veniam laborum,
                    in fugiat. Ipsam officiis sit, aspernatur debitis, repellat nesciunt odio optio omnis ipsa, totam
                    quam cupiditate reiciendis dolor obcaecati? Cumque doloribus, sequi modi id adipisci laudantium
                    dolor consequatur atque tempora quod error. Perspiciatis vero necessitatibus iure exercitationem
                    dolores! Ad?
                </p>

                <button id="btn1" type="button" className="btn btn-outline-dark expand" onClick={Expand} style={{width: "150px"}}>Read more</button>

            </div>
            <div className="col-md-1"></div>
        </div>
        <div className="row no-gutters" id="Expand" style={{display: "none"}}>
            <div className="col-md-1"></div>
            <div className="col-md-10" style={{textAlign:"center",overflowX:"hidden"}}>
                <p style={{textAlign:"justify",fontSize:"1.1rem",padding:"0 30px"}}>
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
        <hr/>
    </div>
    )
}

export default Articles
