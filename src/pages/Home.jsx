import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Navbar from '../components/Navbar'
import DrTanvi from '../assets/drtanvi.svg'
import Diabetes from '../assets/diabetes.svg'
import Thyroid from '../assets/thyroid.svg'
import Pcos from '../assets/pcos.svg'
import Obesity from '../assets/obesity.svg'
import More from '../assets/more.svg'
import Playbtn from '../assets/playbtn.svg'
import MyOwlCarousel from '../components/OwlCarousel';
import DummyUser from '../assets/dummyuser.jpg'
import Footer from '../components/Footer';
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
                            <h1 className='colorblack80'>Find Local Specialists <br /> who can take your <br /> insurance</h1>
                            <p className='colorblack50 m-t-20 f-17 f-500 montserratfont line20'>We can help you find available vaccine appointments  <br /> near you and notify you nasassaasd alskalsfasf afasaf <br /> asd.</p>
                            <button className='bookAppointment'>Book your Appointment</button>
                        </div>
                        <div>
                            <img className='tanvi-img' src={DrTanvi} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="services">
                <h1 className='color-pink textcenter'>Our Services</h1>
                <div className="container1 spaceClass m-t-40 m-b-60">
                    <div className="diseaseCard">
                        <p className='shortdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
                        <button className='viewdetails'>View Details</button>
                        <img src={Diabetes} alt="" />
                        <div className="pinkstrip">
                            <p className='f-20 color-white m-b-0 m-t-0'>Diabetes</p>
                        </div>
                    </div>
                    <div className="diseaseCard">
                        <p className='shortdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
                        <button className='viewdetails'>View Details</button>
                        <img src={Thyroid} alt="" />
                        <div className="pinkstrip">
                            <p className='f-20 color-white m-b-0 m-t-0'>Thyroid</p>
                        </div>
                    </div>
                    <div className="diseaseCard">
                        <p className='shortdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
                        <button className='viewdetails'>View Details</button>
                        <img src={Pcos} alt="" />
                        <div className="pinkstrip">
                            <p className='f-20 color-white m-b-0 m-t-0'>PCOS</p>
                        </div>
                    </div>
                    <div className="diseaseCard">
                        <p className='shortdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda.</p>
                        <button className='viewdetails'>View Details</button>
                        <img src={Obesity} alt="" />
                        <div className="pinkstrip">
                            <p className='f-20 color-white m-b-0 m-t-0'>Obesity</p>
                        </div>
                    </div>
                    <div className="diseaseCard">
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
                                        <img src={DummyUser} alt="" />
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>I experienced one of the finest surgery in my life it was worth,I would suggest to visit once in a lifetime.</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Amitabh Bachchan</p>
                                        <p className='f-14 colorblack50 interfont m-b-0'>Actor</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='reviewCard'>
                                        <img src={DummyUser} alt="" />
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>I experienced one of the finest surgery in my life it was worth,I would suggest to visit once in a lifetime.</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Amitabh Bachchan</p>
                                        <p className='f-14 colorblack50 interfont m-b-0'>Actor</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='reviewCard'>
                                        <img src={DummyUser} alt="" />
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>I experienced one of the finest surgery in my life it was worth,I would suggest to visit once in a lifetime.</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Amitabh Bachchan</p>
                                        <p className='f-14 colorblack50 interfont m-b-0'>Actor</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='reviewCard'>
                                        <img src={DummyUser} alt="" />
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>I experienced one of the finest surgery in my life it was worth,I would suggest to visit once in a lifetime.</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Amitabh Bachchan</p>
                                        <p className='f-14 colorblack50 interfont m-b-0'>Actor</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='reviewCard'>
                                        <img src={DummyUser} alt="" />
                                        <div className='carouselcomma'>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.438 13.808L2.738 4.516L3.336 7.184C2.44667 7.184 1.69533 6.908 1.082 6.356C0.499333 5.804 0.208 5.05267 0.208 4.102C0.208 3.182 0.499333 2.43067 1.082 1.848C1.69533 1.26533 2.43133 0.973999 3.29 0.973999C4.17933 0.973999 4.9 1.28067 5.452 1.894C6.004 2.47667 6.28 3.21267 6.28 4.102C6.28 4.40867 6.24933 4.71533 6.188 5.022C6.15733 5.298 6.08067 5.63533 5.958 6.034C5.866 6.402 5.71267 6.862 5.498 7.414L3.336 13.808H0.438ZM10.8599 13.808L13.1599 4.516L13.7579 7.184C12.8685 7.184 12.1172 6.908 11.5039 6.356C10.9212 5.804 10.6299 5.05267 10.6299 4.102C10.6299 3.182 10.9212 2.43067 11.5039 1.848C12.1172 1.26533 12.8532 0.973999 13.7119 0.973999C14.6012 0.973999 15.3219 1.28067 15.8739 1.894C16.4259 2.47667 16.7019 3.21267 16.7019 4.102C16.7019 4.40867 16.6712 4.71533 16.6099 5.022C16.5792 5.298 16.5025 5.63533 16.3799 6.034C16.2879 6.402 16.1345 6.862 15.9199 7.414L13.7579 13.808H10.8599Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className='f-14 interfont m-t-20 m-b-0'>I experienced one of the finest surgery in my life it was worth,I would suggest to visit once in a lifetime.</p>
                                        <p className='f-17 interfont m-t-10 m-b-0'>Amitabh Bachchan</p>
                                        <p className='f-14 colorblack50 interfont m-b-0'>Actor</p>
                                    </div>
                                </div>
                            </MyOwlCarousel>

                            <div className='viewMore'>
                              <a >View More Reviews</a>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

      <Footer/>
        </div>
    )
}

export default Home