import React, { useRef, useState } from 'react';
import airbnb_logo from './airbnb-logo.png';
import { UseAuth } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const emptyFieldRef = useRef();
  const shortPasswordRef = useRef();
  const emailValidationRef = useRef();

  const { createUser } = UseAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!emailInput || !passwordInput) {
        console.log('One or more fields empty.');
        emptyFieldRef.current.style.display = 'block';
      } else {
        emptyFieldRef.current.style.display = 'none';
      }
  
      if (passwordInput.length < 8) {
        shortPasswordRef.current.style.display = 'block';
      } else {
        shortPasswordRef.current.style.display = 'none';
      }
      
      if (!emailInput.includes('@') && !emailInput.includes('.com')) {
        emailValidationRef.current.style.display = 'block';
        console.log('email validation error');
      } else {
        emailValidationRef.current.style.display = 'none';
      }

      if (emailInput && passwordInput && passwordInput.length > 8 && emailInput.includes('@') && emailInput.includes('.com')) {
        navigate('/booking');
        await createUser(emailInput, passwordInput);
      }
    } catch (e) {
      console.log(e.message);
    } 
    
  }

  return (
    <>
      <div className='bg-slate-700 min-h-screen px-6 flex justify-center items-center'>
        <div className='h-fit bg-white rounded-lg px-6 py-8 md:p-8 max-w-[25rem] w-fit'>
          <img className='h-8 w-28' src={airbnb_logo} alt="airbnb logo" />
          <h4 className='md:text-center text-lg mt-6 font-medium'>Become a member of Airbnb today</h4>
          <div ref={emptyFieldRef} className='text-red-400 px-5 py-2 rounded-sm border-red-500 border hidden'>
            <p className='text-red-600'>Please fill in all the fields</p>
          </div>
          <div ref={shortPasswordRef} className='text-red-400 px-5 py-2 rounded-sm border-red-500 border hidden'>
            <p className='text-red-600'>Password cannot be less than 8 characters</p>
          </div>
          <div ref={emailValidationRef} className='text-red-400 px-5 py-2 rounded-sm border-red-500 border hidden'>
            <p className='text-red-600'>Email validation error: must include @.com. Try again!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input className='border my-5 w-64 md:w-80 h-10 px-4 md:px-6 py-2' type="text" placeholder='Enter Email Address' value={emailInput} onChange={(e) => setEmailInput(e.target.value)} /> <br/>
            <input className='border w-64 md:w-80 h-10 px-4 md:px-6 py-2' type="password" placeholder='Enter Password' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} /> <br/>
            <button className='bg-slate-600 hover:bg-slate-500 px-3 py-2 w-24 text-white rounded-md mt-5'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;