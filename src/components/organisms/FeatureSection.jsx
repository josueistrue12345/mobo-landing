import React from 'react';
import FeatureCard from '../molecules/FeatureCard';

const FeatureSection = ({ feature, addToSectionRefs, addToFeatureRefs, id }) => (
    <section key={id} ref={addToSectionRefs} className="min-h-screen flex flex-col justify-center p-8 md:p-16" >
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
            {feature.title}
        </h2>
        <p className="text-lg text-gray-600 mb-12">
            {feature.description}
        </p>
        <div ref={addToFeatureRefs} className="bg-white rounded-xl shadow-lg p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-medium mb-3 text-blue-500">Especificaciones clave</h3>
            <ul className="space-y-2 text-gray-700">
                {id === 0 && (
                    <>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>CPU de 6 núcleos (2 rendimiento + 4 eficiencia)</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>GPU de 5 núcleos para gráficos avanzados</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Neural Engine de 16 núcleos para IA</li>
                    </>
                )}
                {id === 1 && (
                    <>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Principal: 48MP, f/1.6, estabilización por sensor</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Ultra gran angular: 12MP, f/2.2, campo de visión de 120°</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Vídeo 4K HDR Dolby Vision a 60 fps</li>
                    </>
                )}
                {id === 2 && (
                    <>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Resolución 2532 x 1170 a 460 ppp</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>HDR, True Tone, amplia gama de colores P3</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>ProMotion con frecuencia de actualización adaptativa de 120Hz</li>
                    </>
                )}
                {id === 3 && (
                    <>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Batería de iones de litio recargable integrada</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Carga inalámbrica MagSafe hasta 15W</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Capacidad optimizada de 3.350 mAh</li>
                    </>
                )}
            </ul>
        </div>
    </section>
);

export default FeatureSection;
