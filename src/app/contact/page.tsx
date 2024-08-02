"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = {
      name: formData.name ? '' : 'El nombre es obligatorio.',
      email: formData.email ? '' : 'El correo electrónico es obligatorio.',
      message: formData.message ? '' : 'El mensaje es obligatorio.',
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      try {
        alert('Mensaje enviado exitosamente');
        router.push('/');
      } catch (error) {
        console.error('Error al enviar mensaje:', error);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md space-y-4 mb-6">
        <h2 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Contact Information</h2>
        <div className="space-y-2">
          <p className="text-base text-gray-700 md:text-lg"><strong>Address:</strong> 1234 Street Name, City, Country</p>
          <p className="text-base text-gray-700 md:text-lg"><strong>Phone:</strong> (123) 456-7890</p>
          <p className="text-base text-gray-700 md:text-lg"><strong>Email:</strong> contact@example.com</p>
        </div>
      </div>

      <div className="flex w-full max-w-6xl space-x-6">
        <div className="flex-1 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-teal-900">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-teal-900">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-teal-900">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-6">Location</h2>
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{
              __html: `
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21688.613800747935!2d-58.83254707015212!3d-27.47274337712071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1722468753576!5m2!1ses!2sar" 
                  width="400" 
                  height="300" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              `,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
