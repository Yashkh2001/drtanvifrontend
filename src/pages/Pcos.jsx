import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import diabetes from '../assets/diabetes.jpg'

const Pcos = () => {
  return (

    <>
      <Navbar />
      <div className='diseaseColor'>
        <div className="container1 m-t-70 topgrid">
          <div >
            <h1 style={{marginBottom:'20px'}}>What is PCOS?</h1>
            <p>
              Polycystic ovary syndrome (PCOS) is a hormonal problem that occurs during the reproductive period. If you have PCOS, your period may not come often. Or you have a <a className='pinkColor' href="https://www.youtube.com/watch?v=BUJBnReICiM&list=PLRHAhkJkxARUo-4DFkmsXX9OF7RGNOqXW&index=7" target='_blank'>period</a> that lasts for days. Sometimes there are too many hormones called androgens in the body.
            </p>
            <p>
              {/* <span style={{ fontWeight: 600 }}>
                There are two main types of diabetes, type 1 and type 2.
              </span> <br /> */}
              <span style={{ position: 'relative', top: '5px' }}>
                In PCOS, many small fluid sacs develop on the outer edge of the ovaries. These are called cysts. Small, fluid-filled cysts contain immature eggs. These are called hair follicles. Follicles do not release eggs on a regular basis.

                The exact cause of PCOS is unknown. Early diagnosis and treatment, along with <a className='pinkColor' href="https://www.youtube.com/watch?v=u2xhBdw2lNE&list=PLRHAhkJkxARUo-4DFkmsXX9OF7RGNOqXW&index=7" target='_blank'>weight loss</a>, may reduce the risk of long-term complications such as type 2 diabetes and heart disease
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
            <iframe width="600" height="400" autoplay src="https://www.youtube.com/embed/HZmWKCJTb-E?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="videoSection videoSectionwhite m-t-50">
          <h1 className='color-pink textcenter'>More About PCOS</h1>
          <div class="container1 m-b-30 ">
            <div class="row m-t-30 ">
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/HwXVwD6gKUQ" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">

                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8R0r_tQ-OT0" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/m0sbn_l94yU" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7gMyPHb9b1M" allowfullscreen="true"></iframe> </div>

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

export default Pcos