import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import diabetes from '../assets/diabetes.jpg'
import Footer from '../components/Footer'




const Diabetes = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div className='diseaseColor'>
        <div className="container1 m-t-70 topgrid">
          <div >
            <h1 style={{marginBottom:'20px'}}>Everything you need to know <br /> about Diabetes</h1>
            <p>
              Diabetes is a serious condition in which blood sugar levels are too high. This can occur when the body does not produce enough insulin or the insulin produced is not effective. Or if your body can't produce insulin at all.
            </p>
            <p>
              <span style={{ fontWeight: 600 }}>
                There are two main types of diabetes, type 1 and type 2.
              </span> <br />
              <span style={{ position: 'relative', top: '5px' }}>
                Type 1 diabetes is completely unable to produce <a className='pinkColor' href="https://www.youtube.com/watch?v=bwWXd35K4Zo&list=PLRHAhkJkxARVqQwXTzjhgStJSLxPXOnpM&index=32&ab_channel=DrTanviMayurPatel" target='_blank'>insulin</a>. It's a little different with type 2 diabetes. The insulin you make either can't work effectively or you can't make enough.The words are different, but both are serious.
                Other types of diabetes include <a className='pinkColor' href="https://www.youtube.com/watch?v=EcZdYkYSVYw&list=PLRHAhkJkxARU8gkpE5taiYZBIaXO9sJBc&index=11" target='_blank'>gestational diabetes</a>, which can develop during pregnancy. There are also many other rare types of diabetes, such as type 3c and latent autoimmune diabetes of adults (LADA).
                In all types of diabetes, glucose accumulates in the blood because it cannot be properly taken up by the cells. Also, too much glucose in the blood causes various problems. First, it leads to the <a className='pinkColor' href="https://www.youtube.com/watch?v=hXkVo_F_Iac&list=PLRHAhkJkxARVqQwXTzjhgStJSLxPXOnpM&index=16" target='_blank'>symptoms of diabetes</a>.
              </span>
            </p>
            <a href="https://wa.me/919987829999?text=Hello Dr.Tanvi I want to book an appointment." target="_blank">
            <button className='bookAppointment'>Book your Appointment</button>
            </a>
          </div>
          <div className='ml50'>
            <iframe width="600" height="400" autoplay src="https://www.youtube.com/embed/DgSr0dDjdeQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="videoSection videoSectionwhite m-t-50">
          <h1 className='color-pink textcenter'>More About Diabetes</h1>
          <div class="container1 m-b-30 ">
            <div class="row m-t-30 ">
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_DGHygP_bbk" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">

                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/z1EQqG2YlEY" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8tDZBoOTG0c" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/BBckT5dSmKI" allowfullscreen="true"></iframe> </div>

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

export default Diabetes