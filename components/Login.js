import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
//   const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `https://femaledaily-users.loca.lt/users?email=${email}`
      );

      if (response.data.length > 0) {
        const userData = response.data[0];
        console.log(userData.token);

        if (userData) {
          localStorage.setItem('token', userData.token);
          router.push('/products');
        } else {
          setError('Token tidak ditemukan');
        }
      } else {
        setError('Email tidak ditemukan');
      }
    } catch (error) {
      setError('Terjadi kesalahan saat login');
    }
  };

  return (
    <div className='container'>
        <div className='box-login-form'>
        <h2>Login</h2>
        <input
            type="email"
            placeholder="Alamat Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p>{error}</p>}   
      </div>
    </div>
  );
}

export default Login;
