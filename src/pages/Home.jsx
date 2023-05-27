import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Navbar from '../components/Navbar'
import DrTanvi from '../assets/drtanviround.png'
import Diabetes from '../assets/diabetes.svg'
import Thyroid from '../assets/thyroid.svg'
import Pcos from '../assets/pcos.svg'
import Obesity from '../assets/obesity.svg'
import More from '../assets/more.svg'
import Playbtn from '../assets/playbtn.svg'
import MyOwlCarousel from '../components/OwlCarousel';
import DummyUser from '../assets/dummyuser.jpg'
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <div className='homePage'>
            <div className="headerSection">
                <Navbar />
                <div className='hero'>
                    <div className="randomdots">
                        <div className="random1"></div>
                        <div className="random2"></div>
                        <div className="random3"></div>
                        <div className="random4"></div>
                        <div className="random5"></div>
                    </div>
                    <div className="container1 m-t-70 wid80flex">
                        <div>
                            <h1 className='colorblack80'>One of the Best <br /> Endocrinologist in <br /> Mumbai</h1>
                            <p data-aos="fade-right" className='colorblack50 m-t-20 f-17 f-500 montserratfont line20'>Live your life to the fullest without being <br />concerned about diabetes or thyroid issues. <br /> Make an appointment with Dr. Tanvi right now.</p>
                            <a href="https://wa.me/919987829999?text=Hello Dr.Tanvi I want to book an appointment." target="_blank">
                            <button className='bookAppointment'>Book your Appointment</button>
                            </a>
                        </div>
                        <div>
                            <img className='tanvi-img' src={DrTanvi} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        className="gmap_iframe"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.849918341014!2d72.8269483750774!3d19.11423888209831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b76996b7a3%3A0xb6e0fad58bcca331!2sDr.%20Tanvi%20Mayur%20Patel!5e0!3m2!1sen!2sin!4v1684348457584!5m2!1sen!2sin" width="800" height="600"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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
            </div> */}

            <div className="services">
                <h1 className='color-pink textcenter'>Our Services</h1>
                <div className="container1 spaceClass m-t-40 m-b-60">
                    <div data-aos="flip-left" className="diseaseCard">
                        <p className='shortdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
                        <NavLink style={{ width: "100%", display: 'flex', justifyContent: 'center' }} to="/diabetes"> <button className='viewdetails'>View Details</button></NavLink>
                        <img src={Diabetes} alt="" />
                        <div className="pinkstrip">
                            <p className='f-20 color-white m-b-0 m-t-0'>Diabetes</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" className="diseaseCard">
                        <p className='shortdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
                        <button className='viewdetails'>View Details</button>
                        <img src={Thyroid} alt="" />
                        <div className="pinkstrip">
                            <p className='f-20 color-white m-b-0 m-t-0'>Thyroid</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" className="diseaseCard">
                        <p className='shortdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
                        <button className='viewdetails'>View Details</button>
                        <img src={Pcos} alt="" />
                        <div className="pinkstrip">
                            <p className='f-20 color-white m-b-0 m-t-0'>PCOS</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" className="diseaseCard">
                        <p className='shortdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
                        <button className='viewdetails'>View Details</button>
                        <img src={Obesity} alt="" />
                        <div className="pinkstrip">
                            <p className='f-20 color-white m-b-0 m-t-0'>Obesity</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" className="diseaseCard">
                        <p className='shortdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
                        <button className='viewdetails'>View Details</button>
                        <img src={More} alt="" className='moreimg' />
                        <div className="pinkstrip">
                            <p className='f-20 color-white m-b-0 m-t-0'>More</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="videoSection">
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

            <div className="reviewSection">

                <div className='container1 m-t-20'>
                    <div className='carouselFlex'>
                        <div>
                            <div className='commacircle'>
                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                </svg>

                            </div>
                            <h3 className='colorblack80 montserratfont f-600 m-t-20'>What our Happy <br /> Patients Say</h3>
                            <p className='f-17 colorblack50 f-400'>Over 2000+ Happy patients <br /> who thrive betterment of <br /> their health</p>
                        </div>

                        <div className='wid-100'>
                            <MyOwlCarousel>
                                <div className="item">
                                    <div className='reviewCard'>
                                        {/* <img src={DummyUser} alt="" /> */}
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>"Very cooperative staff and polite doctor Very happy with my treatment".</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Niyati gondaliya</p>
                                        {/* <p className='f-14 colorblack50 interfont m-b-0'>Actor</p> */}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='reviewCard'>
                                        {/* <img src={DummyUser} alt="" /> */}
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>"Love the way she counselled and explained my father. His health is so much better now."</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Akshay Patel</p>
                                        {/* <p className='f-14 colorblack50 interfont m-b-0'>Actor</p> */}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='reviewCard'>
                                        {/* <img src={DummyUser} alt="" /> */}
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>"So happy with my consultation while I am travelling to India."</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Annamária Mayer</p>
                                        {/* <p className='f-14 colorblack50 interfont m-b-0'>Actor</p> */}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='reviewCard'>
                                        {/* <img src={DummyUser} alt="" /> */}
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>"Good doctor and very soft spoken."</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Hetal Patel</p>
                                        {/* <p className='f-14 colorblack50 interfont m-b-0'>Actor</p> */}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='reviewCard'>
                                        {/* <img src={DummyUser} alt="" /> */}
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>"I consulted her for my pcos. Very calming dr and she explains everything in detail."</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Sapna Undre</p>
                                        {/* <p className='f-14 colorblack50 interfont m-b-0'>Actor</p> */}
                                    </div>
                                </div>
                            </MyOwlCarousel>

                            {/* <div className='viewMore'>
                                <a >View More Reviews</a>
                            </div> */}
                        </div>

                    </div>
                </div>


            </div>

            <Footer />
        </div>
    )
}

export default Home