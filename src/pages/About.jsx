import React from 'react'
import Navbar from '../components/Navbar'
import DrTanvi from '../assets/drtanvi.svg'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="container1 m-t-30 ">

        <div>
          <div className='displaycenter'>
            <h1 className='pointerclass mtmobile' style={{ marginBottom: '30px' }}>About Dr. Tanvi Mayur Patel</h1>
          </div>


          <div className="griddisplay">

            <div>

              <p>
                Dr. Tanvi Mayur Patel is a Consultant Endocrinologist and Diabetologist practising in Prime location of Juhu.
              </p>




              <p>

                <a className='pinkColor' href="https://threebestrated.in/endocrinologists-in-mumbai-mh" target='_blank'>
                  <span >
                    Dr. Tanvi Mayur Patel is considered one of the Top 3 Endocrinologist doctor in Mumbai as per Top 3 Rated professional.
                  </span>
                </a>
              </p>
              <p>
                Dr. Tanvi Mayur Patel's areas of specialisation include Endocrinology, Diabetology, Obesity, Thyroid disorders, Osteoporosis, Reproductive Endocrinology, and Hormone Replacement Therapy.
              </p>

              <p>Dr. Tanvi Mayur Patel is speaker for various Conferences in the field of Diabetology. Dr. Tanvi Mayur Patel is respected member of several professional associations related to the field of Endocrinology and Diabetology. She is recepient of many awards by various organisation. </p>
              <p>Dr. Tanvi Mayur Patel has conducted FREE OF COST outpatient department for the needy people in Rural Gujarat during Pandemic Covid-19 when entire India was in lockdown state which has been appreciated from different corners of the society.
                That is the time she realised the need of connecting to all the fellow nationals and needy people by utilising digital platform. She is avid Youtuber with channel name<a className='pinkColor' href="https://youtu.be/NFfvDWo5RB0" target='_blank'> Dr. Tanvi Mayur Patel</a>. With the help of digital platform like Youtube Dr. Tanvi Mayur Patel is trying to bridge the gap of scarcity of specialised doctors like Endocrinologist in country like India. Dr. Tanvi Mayur Patel's effort has been appricited by many organisation. 
                 One such proud award is  
                 <a className='pinkColor' href="https://www.youtube.com/watch?v=uFVmOdXpTYk" target='_blank'> BUSINESS WORLD 40 HEALTHCARE PROFESSIONALS UNDER 40 YEARS OF AGE</a>.</p>

            </div>

            <div>
              <p className='spaceClass aligncenter column20 reverseclass'>

                <p>
                  <ul>
                    <li data-aos="fade-right">40 healthcare under 40 </li>
                    <li data-aos="fade-right">silver icon youtuber </li>
                    <li data-aos="fade-right">top 3 endocrinologist of mumbai </li>
                    <li data-aos="fade-right">10000 + patient treated </li>
                    <li data-aos="fade-right">12+ years of experience </li>
                    <li data-aos="fade-right">Double postgraduate </li>
                    <li data-aos="fade-right">Served patient from 10+ countries </li>
                  </ul>



                </p>

                <img className='tanvi-img tanvi-img1' src={DrTanvi} alt="" />
              </p>
              <p>
                She is double postgraduate doctor having qualification of Ophthalmology ( Eye Specialisation) and Endocrinology.  She has received Scholarship from Tata Institute. She is practising Allopathic doctor since 2008.

              </p>

              <p>She has treated more than 10000s of people with Diabetes, Thyroid and other hormonal issues. She has worked with hospitals like GKNM Hospital Coimbatore, Lotus Eye Hospital, Coimbatore Diabetes Foundation, Apollo Sugar Clinic, R.N Cooper Hospital.</p>



            </div>
          </div>
        </div>

        {/* <div className='displayEnd'>
          <img className='tanvi-img' src={DrTanvi} alt="" />
        </div> */}
      </div>

      <div className='displaycenter'>
        <h1 className='pointerclass' style={{ marginBottom: '30px' }}>Find Dr Tanvi</h1>
      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.849918341014!2d72.8269483750774!3d19.11423888209831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b76996b7a3%3A0xb6e0fad58bcca331!2sDr.%20Tanvi%20Mayur%20Patel!5e0!3m2!1sen!2sin!4v1684348457584!5m2!1sen!2sin" width="800" height="600" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <a href="https://capcuttemplate.org/">Capcuttemplate.org</a>
        </div>
        <style>
          {`
          .mapouter {
            position: relative;
            text-align: right;
            width: 600px;
            height: 400px;
          }

          .gmap_canvas {
            overflow: hidden;
            background: none!important;
            width: 600px;
            height: 400px;
          }

          .gmap_iframe {
            width: 600px!important;
            height: 400px!important;
          }
        `}
        </style>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Footer />
      </div>
    </div>
  )
}

export default About