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
              Diabetes, also known as diabetes mellitus, 
              is a group of metabolic disorders characterized by a high blood sugar level (hyperglycemia) over a prolonged period of time.[12][13] Symptoms often include frequent urination, increased thirst and increased appetite.[2] If left untreated, diabetes can cause many health complications.[2] Acute complications can include diabetic ketoacidosis, hyperosmolar hyperglycemic state, or death.[3] Serious long-term complications include cardiovascular disease, stroke, chronic kidney disease, foot ulcers, damage to the nerves, damage to the eyes, and cognitive impairment.
               characterized by a high blood sugar level (hyperglycemia) over a prolonged period of time.[12][13] Symptoms often include frequent urination, increased thirst and increased appetite.[2] If left untreated, diabetes can cause many health complications.[2] Acute complications can include diabetic ketoacidosis, hyperosmolar hyperglycemic state, or death.[3] Serious long-term complications include cardiovascular disease, stroke, chronic kidney disease, foot ulcers, damage to the nerves, damage to the eyes, and cognitive impairment.
            </p>
            <button className='bookAppointment'>Book your Appointment</button>
          </div>
          <div>
            <img style={{marginLeft:'200px'}} className='wid-400' src={diabetes}  alt="" />
          </div>
        </div>

        <div className="videoSection videoSectionwhite m-t-50">
                <h1 className='color-pink textcenter'>Popular Uploads</h1>
                <div class="container1 m-b-30 ">
                    <div class="row m-t-30 ">
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                            <div class="card mb-4">

                                <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/rgj7Xg-D80s?rel=0" allowfullscreen="true"></iframe> </div>

                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">

                            <div class="card mb-4">

                                <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pYJZvFJri3Y?rel=0" allowfullscreen="true"></iframe> </div>

                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                            <div class="card mb-4">

                                <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wi9YTxKeR3Q?rel=0" allowfullscreen="true"></iframe> </div>

                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
                            <div class="card mb-4">

                                <div class="img">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zNx1QmLcq5A?rel=0" allowfullscreen="true"></iframe> </div>

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
      <Footer/>
    </>
  )
}

export default Obesity