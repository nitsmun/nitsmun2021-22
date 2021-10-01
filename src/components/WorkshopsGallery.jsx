import React from 'react'
import './WorkshopsGallery.css';


function WorkshopsGallery(props) {


  return (
    <div className="container gallery-container">

      <h1 style={{fontVariant:"small-caps"}}>Gallery</h1>
      <div className={"tz-gallery" + (props.index === 0 ? " active-tz" : "")}>

        <div className="row">

          <div className="col-sm-12 col-md-4">
              <img src="/img/WorkshopsSession1_Poster2.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-4">
              <img src="/img/WorkshopsSession1_Poster3.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-4">
              <img src="/img/WorkshopsSession1_Poster4.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-12 col-md-8">
              <img src="/img/WorkshopsSession1_Poster1.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-4">
              <img src="/img/WorkshopsSession1_Poster5.jpg" alt="nitsmun" />
          </div>
        </div>
      </div>

      <div className={"tz-gallery" + (props.index === 1 ? " active-tz" : "")}>

        <div className="row">

          <div className="col-sm-12 col-md-4">
              <img src="/img/WorkshopsSession2_Poster2.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-4">
              <img src="/img/WorkshopsSession2_Poster3.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-4">
              <img src="/img/WorkshopsSession2_Poster4.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-12 col-md-8">
              <img src="/img/WorkshopsSession2_Poster1.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="row"><img src="/img/WorkshopsSession2_Poster5.jpg" alt="nitsmun" /></div>
            <div className="row mt-1"><img src="/img/WorkshopsSession2_Poster6.jpg" alt="nitsmun" /></div>
          </div>
        </div>
      </div>

      <div className={"tz-gallery" + (props.index === 2 ? " active-tz" : "")}>

        <div className="row">

          <div className="col-sm-12 col-md-4">
              <img src="/img/WorkshopsSession3_Poster2.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-4">
              <img src="/img/WorkshopsSession3_Poster3.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-4">
              <img src="/img/WorkshopsSession2_Poster2.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-12 col-md-8">
              <img src="/img/WorkshopsSession3_Poster1.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="row"><img src="/img/WorkshopsSession2_Poster4.jpg" alt="nitsmun" /></div>
          </div>
        </div>
      </div>

      <div className={"tz-gallery" + (props.index === 3 ? " active-tz" : "")}>

        <div className="row">
          <div className="col-sm-12 col-md-6">
              <img src="/img/MockMun_Poster1.jpg" alt="nitsmun" />
          </div>
          <div className="col-sm-6 col-md-6">
              <img src="/img/MockMun_Poster2.jpg" alt="nitsmun" />
          </div>
        </div>
      </div>

    </div>

  )
}

export default WorkshopsGallery
