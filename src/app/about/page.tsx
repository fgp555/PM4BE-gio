import Link from 'next/link';
import React from 'react';
import PATHROUTES from '@/helpers/PathRoutes';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Sobre Nosotros</h2>

                <div className="bg-white shadow-md rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
                    <p className="text-base text-gray-700 mb-6">
                        En MY LITTLE STORE, nuestra misión es ofrecer los mejores productos electrónicos con un enfoque en la calidad, la innovación y el servicio al cliente excepcional. Creemos en mejorar la vida de nuestros clientes mediante la tecnología y la satisfacción completa.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestro Equipo</h3>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <img src="https://via.placeholder.com/150" alt="Miembro del equipo" className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Juan Pérez</h4>
                            <p className="text-gray-600">CEO y Fundador</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <img src="https://via.placeholder.com/150" alt="Miembro del equipo" className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">María Gómez</h4>
                            <p className="text-gray-600">Directora de Marketing</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <img src="https://via.placeholder.com/150" alt="Miembro del equipo" className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Carlos Ruiz</h4>
                            <p className="text-gray-600">Desarrollador Principal</p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href={PATHROUTES.CONTACT}>
                            <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Contáctanos
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
