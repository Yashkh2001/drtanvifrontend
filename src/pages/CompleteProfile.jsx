import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

const CompleteProfile = () => {
    const navigate=useNavigate()
    const {user,setUser} =useContext(userContext)



    setTimeout(() => {
      if(user==null||user==undefined){
    navigate('/')
  }
  
  
    }, 500);

  return (
    <div>
    <a href="https://api.whatsapp.com/send?phone=7718036556&text=%54%68%65%20%62%65%73%74%20%77%61%79%20%74%6F%20%70%72%65%64%69%63%74%20%74%68%65%20%66%75%74%75%72%65%20%69%73%20%74%6F%20%69%6E%76%65%6E%74%20%69%74%2E">Send Message</a>
    <a href="whatsapp:contact=7718036556@s.whatsapp.com&message=I'd like to chat with you">harsh</a>
  <a href="https://wa.me/7718036556/?text=Hello">Harsh dubey</a>
       welcome {user?.name}
    </div>
  )
}

export default CompleteProfile