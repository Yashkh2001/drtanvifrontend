import React from 'react'
import Navbar from '../components/Navbar'
import diabetes from '../assets/diabetes.jpg'
import Footer from '../components/Footer'
const Obesity = () => {
  return (
    <>
      <Navbar />
      <div className='diseaseColor'>
        <div className="container1 m-t-70 topgrid">
          <div >
            <h1>Everything you need to know <br /> about Obesity</h1>
            <p>
              Obesity is a condition characterized by excess body fat, which increases the risk of various health problems. Some people say their body mass index (BMI) is 30 or higher. Obesity is a serious problem worldwide. Over 650 million adults and 340 million children and adolescents are considered obese.
            </p>
            <p style={{ marginBottom: '5px' }}>
              Causes of Obesity:

            </p>
            <ul>
              <li >Overeating: Eating more calories than your body burns leads to excess fat storage.</li>
              <li >Lack of exercise: Lack of physical activity can lead to weight gain.</li>
              <li >Genetics: Some people have a genetic predisposition to obesity.</li>
              <li >Medical Conditions: Certain medical conditions, such as hypothyroidism and Cushing's Syndrome, can lead to weight gain.</li>
            </ul>
            <a href="https://wa.me/919987829999?text=Hello Dr.Tanvi I want to book an appointment." target="_blank">
              <button className='bookAppointment'>Book your Appointment</button>
            </a>
          </div>
          <div className='ml50'>
            <iframe width="600" height="400" autoplay src="https://www.youtube.com/embed/cuek_nbKccc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="videoSection videoSectionwhite m-t-50">
          <h1 className='color-pink textcenter'>Popular Uploads</h1>
          <div class="container1 m-b-30 ">
            <div class="row m-t-30 ">
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/bAqe9pO6f-0?rel=0" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">

                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A1jXwEoLHkc?rel=0" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ykBDn7GXNMA?rel=0" allowfullscreen="true"></iframe> </div>

                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                <div class="card mb-4">

                  <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/el6zZUciFKw?rel=0" allowfullscreen="true"></iframe> </div>

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

export default Obesity