import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    Cookies.remove('token');

    // Redirect to the login page
    router.push('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;