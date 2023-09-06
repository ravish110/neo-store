import React, { useState } from 'react';
import LoginSignUpPage from './loginSignUpPage';
import AuthImg from './../assets/authImg.png';

const Login = () => {
  const [dataFromChild, setDataFromChild] = useState();
  const userInfo = sessionStorage.getItem('loggedin', 'true');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    window.location.reload();
  };
  return (
    dataFromChild || userInfo ? null :
    <div className='md:flex formContainer content-between'>
      <img src={AuthImg} alt='authimg' className='md:pl-32 md:pr-48 self-start sm:pl-0 sm:pr-0'/>
      <LoginSignUpPage onDataUpdate={handleDataFromChild} />
    </div> 
  )
}

export default Login