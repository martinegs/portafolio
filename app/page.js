import React from 'react';
import Image from 'next/image'
import Link from 'next/link';



function HomePage() {
  return (
    <div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden py-6">
              <div className="md:w-1/4">
                <Image
                  src="/martin.jpg" 
                  alt="Martin Gonzalez"
                  width={250} 
                  height={250} 
                  className="object-cover rounded-full mx-auto"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <header>
                  <h1 className="text-2xl font-semibold mb-2">Martin Gonzalez</h1>
                  <p className="text-gray-600">
                   Como estudiante de sistemas apasionado y proactivo, me encuentro en la búsqueda de mi primera experiencia laboral que me permita aplicar y ampliar mis conocimientos técnicos. Estoy comprometido con el desarrollo de habilidades prácticas y la adquisición de experiencia en un entorno dinámico que desafíe mis capacidades y fomente el crecimiento profesional.
                  </p>
                </header>
              </div>
            </div>

 
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
   
        <div className="bg-white shadow-md rounded-lg p-6 animate__animated animate__fadeInLeft md:col-span-1">
    <h1 className="text-2xl font-semibold mb-4">Skills</h1>
    <ul>
        <li className="mb-2">
            <span className="font-medium">JavaScript:</span>
            <div className="relative w-full h-4 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
            </div>
        </li>
        <li className="mb-2">
            <span className="font-medium">PHP:</span>
            <div className="relative w-full h-4 bg-gray-200 rounded-full">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '50%' }}></div>
            </div>
        </li>
        <li className="mb-2">
            <span className="font-medium">HTML:</span>
            <div className="relative w-full h-4 bg-gray-200 rounded-full">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: '80%' }}></div>
            </div>
        </li>
        <li className="mb-2">
            <span className="font-medium">CSS:</span>
            <div className="relative w-full h-4 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-400 rounded-full" style={{ width: '80%' }}></div>
            </div>
        </li>
    </ul>
</div>

  
<div className="bg-white shadow-md rounded-lg p-6 animate__animated animate__fadeInRight md:col-span-2">
    <h1 className="text-2xl font-semibold mb-4">Formación</h1>
    <ul>
        <li className="mb-2">
            <span className="font-medium">2013 - 2018:</span> Escuela Técnica Ing. Gabriel del Mazo
        </li>
        <li>
            <span className="font-medium">2021 - Actualidad:</span> Universidad Champagnat
        </li>
    </ul>
</div>


 
<div className="bg-slate-500 col-span-3 p-6 rounded-md">
                    <h1 className="text-3xl text-center text-white font-semibold mb-6">Portafolio</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/perro.jpeg" 
                                alt="Proyecto Perros"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">Proyecto Perros</h2>
                                <p className="text-gray-700">Descripción breve del proyecto</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/gato.jpg" 
                                alt="Proyecto Gatos"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">Proyecto Gatos</h2>
                                <p className="text-gray-700">Descripción breve del proyecto</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/pajaro.jpeg" 
                                alt="Proyecto Aves"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">Proyecto Aves</h2>
                                <p className="text-gray-700">Descripción breve del proyecto</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="https://github.com/martinegs" className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
                            GitHub
                        </Link>
                    </div>
                </div>
            </section>
        </div>

  );
}

export default HomePage;
