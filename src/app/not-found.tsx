"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import PATHROUTES from '@/helpers/PathRoutes';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(PATHROUTES.HOME);
    }, 5000);

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, [router]);

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <section className="text-center bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-teal-900 mb-6">UPS! 404 Page not found</h3>
        <p className="text-gray-700">Don&apos;t worry, we have more products for you.</p> {/* Corrección aquí */}
        <p className="text-gray-500 mt-4">Redirecting to the homepage in 5 seconds...</p>
      </section>
    </div>
  );
};

export default NotFound;
