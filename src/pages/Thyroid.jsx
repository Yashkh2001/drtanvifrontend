import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import diabetes from '../assets/diabetes.jpg'

const Thyroid = () => {
  return (
    <>
      <Navbar />
      <div className='diseaseColor'>
        <div className="container1 m-t-70 topgrid">
          <div >
            <h1 style={{ marginBottom: '20px' }}>Types of Thyroid</h1>
            <p>
              The thyroid gland is a small organ that’s located in the front of the neck, wrapped around the windpipe (trachea). It’s shaped like a butterfly, smaller in the middle with two wide wings that extend around the side of your throat. The thyroid is a gland. You have <a className='pinkColor' href="https://www.youtube.com/watch?v=_PUty7synhc" target='_blank'>glands</a> throughout your body, where they create and release substances that help your body do a specific thing. Your thyroid makes hormones that help control many vital functions of your body.

            </p>
            <p>
              {/* <span style={{ fontWeight: 600 }}>
                There are two main types of diabetes, type 1 and type 2.
              </span> <br /> */}
              <span style={{ position: 'relative', top: '5px' }}>
                A malfunctioning thyroid gland can affect the whole body. When the body produces too much thyroid hormone, a condition called <a className='pinkColor' href="https://www.youtube.com/watch?v=09mGsRviiII" target='_blank'>hyperthyroidism</a> can occur. Too little thyroid hormone is called hypothyroidism.
              </span>

              {/* <p style={{ position: 'relative', top: '20px',marginBottom:'30px' }}>
                <a className='pinkColor' href="https://www.youtube.com/watch?v=Z7DH9Y36euI&list=PLRHAhkJkxARUo-4DFkmsXX9OF7RGNOqXW&index=10" target='_blank'>How to check if you have PCOS or not?</a>
              </p> */}

            </p>
            <a href="https://wa.me/919987829999?text=Hello Dr.Tanvi I want to book an appointment." target="_blank">
            <button className='bookAppointment'>Book your Appointment</button>
            </a>
          </div>
          <div className='ml50'>
            <iframe width="600" height="400" autoplay src="https://www.youtube.com/embed/gCzsGoRqy-E?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="videoSection videoSectionwhite m-t-50">
          <h1 className='color-pink textcenter'>More About Thyroid</h1>
          <div class="container1 m-b-30 ">
            <div class="row m-t-30 ">
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gCzsGoRqy-E" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">

                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/NPdLliT5foY" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/rgj7Xg-D80s" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/OYAb0aqsWrU" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
            </div>
            {/* <div className='exploremore'>
                        <span>Explore More</span>
                   </div> */}

            {/* <MyOwlCarousel/> */}

          </div>


        </div>
      </div>
      <div className="m-t-20"></div>
      <Footer />
    </>
  )
}

export default Thyroid