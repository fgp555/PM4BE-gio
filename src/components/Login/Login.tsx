"use client";
import React, { useEffect, useState } from 'react';
import { LoginErrorProps, LoginProps } from '../../interfaces/IAuth';
import { validateLoginForm } from '@/helpers/formValidation';
import { LoginUser } from '@/helpers/auth.helper';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import PATHROUTES from '@/helpers/PathRoutes';
import Link from 'next/link';

export const Login = () => {
  const { dataUser, setDataUser } = useAuth();
  const router = useRouter();

  const [userData, setUserData] = useState<LoginProps>({
    email: '',
    password: '',
  });

  const [errorUser, setErrorUser] = useState<LoginErrorProps>({
    email: '',
    password: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await LoginUser(userData);
      setDataUser(response);
      document.cookie = `user=admin; path=/;`;
      alert('Usuario logeado exitosamente');
      router.push(PATHROUTES.HOME);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const errors = validateLoginForm(userData);
    setErrorUser(errors);
    console.log(errorUser);
  }, [userData, errorUser]); // Añadir errorUser como dependencia

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" role="dialog" aria-modal="true">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 relative">
          <button 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => router.push(PATHROUTES.HOME)}
            aria-label="Close"
          >
            &times;
          </button>
          <h1 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 text-center mb-6">Sign in to our platform</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Email</label>
              <input
                type="text"
                id="email-address"
                name="email"
                value={userData.email}
                placeholder='user@example.com'
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
              {errorUser.email && <p className="font-light text-xs text-red-500">{errorUser.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                placeholder='******'
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
              {errorUser.password && <p className="font-light text-xs text-red-500">{errorUser.password}</p>}
            </div>

            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Login to your account
            </button>

            <p className="text-sm text-gray-500 mt-4">don&apos;t have an account? <Link href={PATHROUTES.REGISTER} className="text-blue-500 hover:underline">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
