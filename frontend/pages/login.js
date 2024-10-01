import Cookies from 'js-cookie';
import Router from 'next/router';
import React, { useState } from 'react';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url ="https://api.vikaxnet.com/api/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    const res = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "applcation/json",
    },
    body: JSON.stringify({email, password})
    });

    if(res.ok){
      //const token = res.data.token;
      const data = await res.json();
      console.log(data);
      // Store the token in cookies  
      const token =  data.data.token;
      Cookies.set('token', token, { expires: 7 }); // The token will expire after 7 days
      
      Router.push("/me");
     
    }
    else{
      setError("invalid Credentials");
    }
    setLoading(false);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
           
            {loading && <span className="spinner"></span>}
      {loading ? "Loading..." : " Sign In"}
          </button>
          <div>
          <a href="/register" className="text-sm text-blue-500 hover:underline">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
