import React, { useState } from 'react';


const LoginSignUpPage = ({onDataUpdate}) => {

    const [signup, setSingup] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const loginSignupToggle = () => {
        setSingup(!signup);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value);
        if(e.target[0].value && e.target[1].value){
            setIsLogin(true);
            sessionStorage.setItem('loggedin', 'true');
        }
    }
    if(isLogin){
        const isLoginSession = isLogin;
        onDataUpdate(isLoginSession);
    }
    

  return (
   
    <form className="text-center w-full block max-w-sm p-6 rounded-2xl shadow-lg" onSubmit={handleSubmit}>
        <div className=" textRed font-bold text-3xl pb-16">
        {signup ? "SIGN UP" : "LOG IN"}
        </div>
        <div className="grid gap-6 mb-6">
            {!signup ? 
           
            <>
                <div>
                    <label htmlFor="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="youremail@address.com" required/>
                </div>
                <div>
                    <label htmlFor="last_name" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                </div>
                
                <a href="#" className="font-medium text-black-600 dark:text-black-500 underline text-right">Forget password</a>
            </> : <>
                <div>
                    <label htmlFor="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Account Register</label>
                    <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required/>
                </div>
                <div>
                    <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required/>
                </div>
                <div>    
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required/>
                </div>
                <div>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
                </div>
                
                { !signup ?
                    <a href="/" className="font-medium text-black-600 dark:text-black-500 underline text-right">Forget password</a>
                    : <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                }
            </> 
            }
        </div>
        <button type="submit" className=" text-white hover:bg-red-800 focus:ring-4 w-3/4 rounded-sm px-5 py-2.5 text-center bgRed hover:bgRed-700 mt-5">Continue</button>
        
        {!signup ?<div className='font-medium text-black-600 dark:text-black-500 text-center p-5'>New to  NeoSTORE? <a href="#" onClick={loginSignupToggle} className="underline">Sign up</a></div>
         :<div className='font-medium text-black-600 dark:text-black-500 text-center p-5'>Already have an account? <a href="#" onClick={loginSignupToggle} className="underline">Log in</a></div>
        }
    </form>

  )
}

export default LoginSignUpPage