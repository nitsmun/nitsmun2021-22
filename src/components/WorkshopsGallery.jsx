import React from 'react'
import './WorkshopsGallery.css';


function WorkshopsGallery() {

  const poster_list = [
    {
      index: "1",
      image: "/img/WorkshopsSession1_Poster2.jpg"
    },
    {
      index: "2",
      image: "/img/WorkshopsSession1_Poster3.jpg"
    },
    {
      index: "3",
      image: "/img/WorkshopsSession1_Poster4.jpg"
    },
    {
      index: "4",
      image: "/img/WorkshopsSession1_Poster5.jpg"
    },
    {
      index: "5",
      image: "/img/WorkshopsSession2_Poster2.jpg"
    },
    {
      index: "6",
      image: "/img/WorkshopsSession2_Poster4.jpg"
    },
    {
      index: "7",
      image: "/img/WorkshopsSession2_Poster5.jpg"
    },
    {
      index: "8",
      image: "/img/WorkshopsSession2_Poster6.jpg"
    },
    {
      index: "9",
      image: "/img/WorkshopsSession3_Poster2.jpg"
    },
    {
      index: "10",
      image: "/img/WorkshopsSession3_Poster3.jpg"
    }
  ]


  return (
    <div className="container gallery-container">

      <h1>Gallery</h1>
      <div className="tz-gallery">

        <div className="row">

          <div className="col-sm-12 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
              <img src="/img/WorkshopsSession1_Poster2.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
              <img src="/img/WorkshopsSession1_Poster3.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
              <img src="/img/WorkshopsSession1_Poster4.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-12 col-md-8">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
              <img src="/img/WorkshopsSession1_Poster1.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
              <img src="/img/WorkshopsSession1_Poster5.jpg" alt="nitsmun" />
            </a>
          </div>
        </div>
      </div>

      <div className="tz-gallery">

        <div className="row">

          <div className="col-sm-12 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
              <img src="/img/WorkshopsSession2_Poster2.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
              <img src="/img/WorkshopsSession2_Poster3.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
              <img src="/img/WorkshopsSession2_Poster4.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-12 col-md-8">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
              <img src="/img/WorkshopsSession2_Poster1.jpg" alt="nitsmun" />
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="row"><img src="/img/WorkshopsSession2_Poster5.jpg" alt="nitsmun" /></div>
            <div class="row mt-1"><img src="/img/WorkshopsSession2_Poster6.jpg" alt="nitsmun" /></div>
          </div>
        </div>
      </div>

      <div className="tz-gallery">

        <div className="row">

          <div className="col-sm-12 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
              <img src="/img/WorkshopsSession3_Poster2.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
              <img src="/img/WorkshopsSession3_Poster3.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
              <img src="/img/WorkshopsSession2_Poster2.jpg" alt="nitsmun" />
            </a>
          </div>
          <div className="col-sm-12 col-md-8">
            <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
              <img src="/img/WorkshopsSession3_Poster1.jpg" alt="nitsmun" />
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="row"><img src="/img/WorkshopsSession2_Poster4.jpg" alt="nitsmun" /></div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default WorkshopsGallery
