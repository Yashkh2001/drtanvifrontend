import React, { useEffect } from 'react'
import { Link, withRouter, NavLink, useNavigate } from "react-router-dom";
const Footer = () => {
    useEffect(() => {
        window.scroll(0, 0)
      }, [])
    return (
        <div className='footer'>
            <div className='footerdiv'>
                <p className='f-20 color-white'>
                    Contact Us
                </p>


                <p className='f-16'> <a style={{ color: 'white', textDecoration: 'none' }} href="tel:+9987829999">+91 9987829999</a></p>
                <p >1 Rupal Apartment. Samarth Ramdas Marg. Off 10th road. Next to kromakay salon. Juhu, JVPD Scheme, Vile Parle West, Mumbai, Maharashtra 400049.</p>
            </div>
            {/* <div className='footerdiv'>
                <p className='f-20 color-white'>
                    Contact Us
                </p>
                <p className='f-16'>help311@gmail.com</p> 
                <p className='f-16'>9987829999</p> 
                <p href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iusto tempora atque vero molestias quaerat culpa aperiam doloribus rem voluptatibus.</p>
            </div> */}
            <div className='footerdiv'>
                <p className='f-20 color-white'>
                    Links
                </p>
                <p className='f-16'>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                </p>
                <p className='f-16'>
                    <NavLink to="/diabetes" >
                        Diabetes
                    </NavLink>
                </p>
                <p className='f-16'>
                    <NavLink to="/pcos">
                        PCOS
                    </NavLink>
                </p>
                <p className='f-16'>
                    <NavLink to="/thyroid">
                        Thyroid
                    </NavLink>
                </p>
                <p className='f-16'>
                    <NavLink to="/obesity">
                        Obesity
                    </NavLink>
                </p>
                <p className='f-16'>
                    <NavLink to="/more">
                        More
                    </NavLink>
                </p>
            </div>
            <div className='footerdiv'>
                <p className='f-20 color-white'>
                    Timings
                </p>
                <p className='f-16'>
                    Opening Hours <br />
                    Mon:	9:00 am – 9:00 pm <br />
                    Tue:	9:00 am – 9:00 pm <br />
                    Wed:	9:00 am – 9:00 pm <br />
                    Thu:	9:00 am – 9:00 pm <br />
                    Fri:	9:00 am – 9:00 pm <br />
                    Sat:	9:00 am – 9:00 pm <br />
                    Sun:	Closed
                </p>

            </div>

        </div>
    )
}

export default Footer