"use client";
import { RegisterProps, RegisterErrorProps } from '@/interfaces/IAuth';
import React, { useState, useEffect } from 'react';
import { validateRegisterForm } from '@/helpers/formValidation';
import { RegisterUser } from '@/helpers/auth.helper';
import { useRouter } from 'next/navigation';
import PATHROUTES from '@/helpers/PathRoutes';

export const Register = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<RegisterProps>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '', // Added confirmPassword
    address: '',
    phone: '',
  });

  const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '', // Added confirmPassword
    address: '',
    phone: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData({ 
      ...userData, 
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const errors = validateRegisterForm(userData);
      if (Object.values(errors).some((error) => error !== '')) {
        alert('Password and confirm password do not match');
        setErrorUser(errors);
        return;
      }
      await RegisterUser(userData);
      alert('Usuario registrado exitosamente');
      router.push(PATHROUTES.LOGIN);
    } catch (error: any) {
      console.error('Error al registrar el usuario:', error);
      alert('Hubo un problema al registrar tu cuenta. Por favor, inténtalo de nuevo.');
    }
  };

  useEffect(() => {
    const errors = validateRegisterForm(userData);
    setErrorUser(errors);
    console.log(errorUser);
  }, [userData, errorUser]); // Añadir errorUser como dependencia

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 relative">
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => router.push(PATHROUTES.HOME)}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-4">Register</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={userData.confirmPassword}
              placeholder='******'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
            {errorUser.confirmPassword && <p className="font-light text-xs text-red-500">{errorUser.confirmPassword}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="name" className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              placeholder='Juan'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
            {errorUser.name && <p className="font-light text-xs text-red-500">{errorUser.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              placeholder='Calle 123'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
            {errorUser.address && <p className="font-light text-xs text-red-500">{errorUser.address}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userData.phone}
              placeholder='1234567890'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
            {errorUser.phone && <p className="font-light text-xs text-red-500">{errorUser.phone}</p>}
          </div>   

          <div className="flex items-center mb-4">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
            <label htmlFor="terms" className="text-sm text-gray-500 ml-2">I agree with the <a href="#" className="text-blue-500 hover:underline">terms and conditions</a></label>
          </div>

          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
