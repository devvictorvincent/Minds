import Cookies from 'js-cookie';
import Router from 'next/router';
import React, { useContext, useState } from 'react';
import { AuthContext } from '@/AuthContext';

const RegisterPage = () => {
  const baseUrl = "https://api.vikaxnet.com";
  
  const {authenticate} =useContext(AuthContext);

  const [isLoading, setisLoading] =useState(false);
    const [error, setError] =useState(null);
    const [response, setResponse] =useState(null);
    const [user, setUser] =useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
        bio:  ''
    });
    let validated = user.firstname.trim() !== '' && user.username !== '' && user.email.trim() !== ''&& user.password.trim() !== ''&& user.password_confirmation.trim() !== ''&& user.bio.trim() !== '';
   
    const handleForm =(event) =>{
        const {name, value} = event.target;
        setUser(prevState => ({
            ...prevState, 
            [name]:value
        }));
    }

    async function pushData(data){
      try {
          const response = await fetch(baseUrl+'/api/register',
         {
            
                method: 'POST',
                headers: {
                  'Content-Type': 'application/vnd.api+json',
                  'Accept': 'application/vnd.api+json'
              }, 
              body: JSON.stringify(data)
         }
          ); 
          if(response.status !== 200) {
            let dat = await response.json(); 
            setError(dat.message);
            return null;
          } 
          let dat = await response.json();  
            return dat;
            
      } catch (error) {
          console.log(error);
          return null;
      }
  }
    const submit = async event =>{
        handleForm(event)
            console.log(user);  
             validated = user.firstname.trim() !== '' && user.username !== '' && user.email.trim() !== '' && user.password.trim() !== ''&& user.password_confirmation.trim() !== ''&& user.bio.trim() !== '';
   
            console.log(validated);  
            event.preventDefault();
            if(!validated){
                setError('Please fill out All fields');
            }
            else{
                setisLoading(true);
                const goRresponse = await pushData(user);
                if(goRresponse !== null)
                {
                  const token =  goRresponse.data.token;
                  Cookies.set('token', token, { expires: 7 }); // The token will expire after 7 days
                  authenticate(token, goRresponse.data.user);
                 Router.push("/intrests");
                     
                     
                }
                console.log(goRresponse);
                setisLoading(false);
            }
          }
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <p class="text-center">Creata user account to gain full access to minds</p>
        
        {error !== null ? <div className='alert alert-error'>  {error} </div> :''} 
        
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name='firstname'
              id="firstname"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={user.firstname}
               onChange={handleForm}
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name='lastname'
              id="lastname"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={user.lastname}
               onChange={handleForm}
              required
            />
          </div>

 <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={user.email}
               onChange={handleForm}
              required
            />
          </div>

 <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name='username'
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={user.username}
               onChange={handleForm}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name='password'
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={user.password}
              onChange={handleForm}
              required
            />
          </div> 
           <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name='password_confirmation'
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={user.password_confirmation}
              onChange={handleForm}
              required
            />
          </div>
          
           <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea 
              id="bio"
              name='bio'
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={user.bio}
              onChange={handleForm}
              required
            />
          </div>
          
          

           
          <button
            type="submit"
            onClick={submit}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
             {isLoading && <span className="spinner"></span>}
             {isLoading ? "Loading..." : " Create Account"}
          </button>
        
      </div>
    </div>
  );
}

export default RegisterPage;
