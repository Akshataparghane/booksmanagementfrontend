
import { useState } from 'react';
import './CSS/loginpage.css';
import axios from 'axios';
// import {Redirect} from 'react-router-dom';



const PopupMessage = ({message, onClose}) =>{
  return(
  <div className="popup"> 
  <div className="popup-inner">
    <button className="close-btn" onClick={onClose}>X</button>
    <p>{message}</p>
  </div>
  </div>
  )
}


const Loginpage = () => {
 
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const[showPopup, setPopup] = useState(false)
  const [popupMessage, setPopupmessage] = useState('');
  // const [redirectToDashboard, setRedirectToDashboard] = useState(false);
 


  const toggleForm = ()=>{
    setIsLoginForm(!isLoginForm);
  }

  const handelRegisterSubmit = async (event) =>{
    event.preventDefault();
    const userData = {
      title: title,
      name: name,
      phone: phone,
      email:email,
      password:password
    };
    console.log(userData)

    try{
      let config = {
        method: 'post',
        url: 'http://localhost:3000/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : userData
      };
      setPopupmessage(config.data.message);
      setPopup(true);
      console.log("PopUp")
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data)
      //   if(error.response.status != 201){ 
      //     setError(error.response.data.message)
           
      // }
      
      }); 
       
      
    }
    catch(error){
      console.log('Error registering user:' , error)
    }
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // var data = JSON.stringify({
      //   "email": email,
      //   "password": password
      // });
      // console.log(data)
      
      
      // var config = {
      //   method: 'POST',
      //   url: 'http://localhost:3000/login',
      //   headers: { 
      //     'Content-Type': 'application/json'
      //   },
      //   data : data
      // };
      // axios(config)
      // .then(function (response) {
      //   console.log(response.data);
      //   console.log("loggedIn Successfully")
      //   setRedirectToDashboard(true)
       

      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      const response = await axios.post('http://localhost:3000/login' , {
        email:email,
        password : password
      })

      console.log(response.data)
      console.log("LoggedIn Successfully")
      // setRedirectToDashboard(true)
   
    } 
    catch (error) {
      console.error('Error logging in:', error);
      setError(error.message);
    }
  };

  const handelClosePopup = ()=>{
    setPopup(false);
  };

  // if(redirectToDashboard){
  //   console.log("HI")
  //   return < Redirect to = "/booksmainpage"/>
    
  // }

      
  return (
    <div className="loginpage">
          <div className='button-box'>
            <div id='btn' style={{left:isLoginForm ? '0px' : '110px'}}  ></div>
            <button type='button' className='toggle-btn' onClick={toggleForm} > Log In </button>
            <button type='button' className='toggle-btn' onClick={toggleForm} > Register </button>
          </div>
          <form id='login' className='input-group' style={{left:isLoginForm ? '50px' : '-400px' }} onSubmit={handleLogin}>
            <input type="text" className='input-field' placeholder='UserId' value={email} onChange={(event)=>{setEmail(event.target.value)}} required />
            <input type="text" className='input-field' placeholder='Enter Password'  value={password} onChange={(event)=>{setPassword(event.target.value)}} required />
            <input type="checkbox" className='check-box'/>   
            <span className='sapnA'>Remember my Password</span>
            <button type='submit' className='submit-btn' > Log In </button>
            {/* {showPopup && <PopupMessage message='Successfully Logged In ' onClose={handelClosePopup}/>} */}
            
  
          </form>
          <form id='register'  className='input-group' style={{left: isLoginForm ? '450px': '50px'}} onSubmit={handelRegisterSubmit}>
            <input type="text" className='input-field' placeholder='Title' value={title} onChange={(event)=>{setTitle(event.target.value)}} required />
            <input type="text" className='input-field' placeholder='Full Name' value={name} onChange={(event)=>{setName(event.target.value)}} required />
            <input type="text" className='input-field' placeholder='Phone Number' value={phone} onChange={(event)=>{setPhone(event.target.value)}} required />
            <input type="text" className='input-field' placeholder='Email' value={email} onChange={(event)=>{setEmail(event.target.value)}} required />
            <input type="text" className='input-field' placeholder='Password' value={password} onChange={(event)=>{setPassword(event.target.value)}} required />
            <input type="checkbox" className='check-box'/>
            <span >I agree to terms and condition</span>
            <label htmlFor="error">{error}</label>
            <button type='submit' className='submit-btn'   > Register </button>
            {showPopup && <PopupMessage message='Successfully Registered Please Logged In ' onClose={handelClosePopup}/>}
          </form>
         
        </div>
  )
}

export default Loginpage
