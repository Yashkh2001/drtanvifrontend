import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { Link, withRouter, NavLink, useNavigate } from "react-router-dom";
import ArrowRight from '../assets/arrowright.svg'
import LogoIcon from '../assets/drtanvilogo.png'
import OtpInput from 'react-otp-input';
import firebase from '../external/firebase'
import axios from 'axios'
const Navbar = (props) => {
    const navigate = useNavigate();
    const [displayBasic, setDisplayBasic] = useState(false);
    const [number, setNumber] = useState('')
    const [otp, setotp] = useState(0);
    const [user, setUser] = useState({});
    const [final, setfinal] = useState('');
    const [error, setError] = useState({});
    const [sent, setSent] = useState(false);
    const [name, setName] = useState('');

    const configureCaptcha = () => {

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.onSignInSubmit();
                console.log("Recaptca varified")
            },
            defaultCountry: "IN"
        });

    }

    const onSignInSubmit = (e) => {
        e.preventDefault()
        if ((number.length > 10 || number.length < 10)) {
            setError({ number: true });
            return;
        }
        else {
            setError({});
        }


        configureCaptcha()
        const phoneNumber = "+91" + number
        console.log(phoneNumber)
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                setfinal(confirmationResult);
                // console.log(final)
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(final)
                console.log(window.confirmationResult)
                alert("OTP has been sent on " + phoneNumber)
                setSent(true)
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log("SMS not sent")
            });

    }

    // Validate OTP
    const handleChange = (otp) => setotp(otp);

    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            axios.post("http://localhost:3002/login", {
                name: name,
                number: number,
                loginwith: 'PHONE'
            }).then((response) => {
                setUser(response.data)
                console.log(response);
                const userdata = response.data
                setTimeout(() => {
                    axios.post("http://localhost:3002/gettoken", {
                        id: userdata.id
                    }).then((response) => {

                        console.log(response);
                        localStorage.setItem('token', response.data)
                    });
                    console.log(userdata, 'data of user')
                    localStorage.setItem('user', JSON.stringify(userdata))
                    setUser(userdata)
                    navigate('/completeprofile')
                }, 600);


            });

        }).catch((err) => {
            setError({ otp: true });
        })



    }


    return (
        <>
            <div id="recaptcha-container"></div>
            <div style={{ backgroundColor: props.bgcolor }} className='navbarSection'>
                <NavLink to="/" >
                    <div className='logo'>
                        <img className='logoIcon' src={LogoIcon} alt="" />
                    </div>
                </NavLink>
                <div className="nav-links">

                    <NavLink to="/about" >
                        <span>About</span>
                    </NavLink>
                    <NavLink to="/diabetes">
                        <span>Diabetes</span>
                    </NavLink>
                    <NavLink to="/pcos">
                        <span>PCOS</span>
                    </NavLink>
                    <NavLink to="/thyroid">
                        <span>Thyroid</span>
                    </NavLink>
                    <NavLink to="/obesity">
                        <span>Obesity</span>
                    </NavLink>
                    <NavLink to="/more">
                        <span>More...</span>
                    </NavLink>

                    <button onClick={() => { setDisplayBasic(true) }} className='pinkbtn'>
                        <span>
                            Book Now
                        </span>
                        <img src={ArrowRight} alt="" />
                    </button>
                </div>
            </div>
            <div id="recaptcha-container"></div>
            <div id="sign-in-button"></div>

            <Dialog header="Login" visible={displayBasic} style={{ width: '450px' }} onHide={() => { setDisplayBasic(false) }}  >
                {!sent && 
                <>
                <div className='loginDialog'>
                <input type="text" value={name} placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}} />
                   <input type="number" value={number} placeholder='Enter mobile number' onChange={(e)=>{setNumber(e.target.value)}} />
                   {error.number &&
                 <p className='f-12 color-red bot3'>Please enter a valid mobile number</p>
            }
   
          
                   <button onClick={onSignInSubmit}>Send Otp</button>
               </div>
               {/* <div className='registerText'>
                <p>New user? <span>Register</span></p>
               </div> */}
                 </>
                }


                {
                    sent &&
                    <>
                        <p className='f-14 m-b-10 padclass opacity7'>A 6 digit code has been sent to +91 {number}</p>
                        <div className='otpdiv'>
                            <OtpInput
                                value={otp}
                                onChange={handleChange}
                                numInputs={6}
                            />
                            {error.otp &&
                                <p className='f-12 color-red bot3 f-600'>Invalid Otp</p>
                            }
                        </div>
                        <br/>
                        <div className="bluebtn padclass">
                            <button className='otpconfirm' onClick={ValidateOtp}>Continue</button>
                        </div>
                    </>

                }

            </Dialog>

        </>
    )
}

export default Navbar