import React from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const FeatureCard = ({ title, description, key }) => (
    <>
        <Heading className="text-xl font-medium text-blue-500">{title}</Heading>
        <Paragraph className="text-gray-700">{description}</Paragraph>
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-medium mb-3 text-blue-500">Especificaciones clave</h3>
            <ul className="space-y-2 text-gray-700">
                {key === 0 && (
                    <>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>CPU de 6 núcleos (2 rendimiento + 4 eficiencia)</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>GPU de 5 núcleos para gráficos avanzados</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Neural Engine de 16 núcleos para IA</li>
                    </>
                )}
                {key === 1 && (
                    <>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Principal: 48MP, f/1.6, estabilización por sensor</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Ultra gran angular: 12MP, f/2.2, campo de visión de 120°</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Vídeo 4K HDR Dolby Vision a 60 fps</li>
                    </>
                )}
                {key === 2 && (
                    <>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Resolución 2532 x 1170 a 460 ppp</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>HDR, True Tone, amplia gama de colores P3</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>ProMotion con frecuencia de actualización adaptativa de 120Hz</li>
                    </>
                )}
                {key === 3 && (
                    <>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Batería de iones de litio recargable integrada</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Carga inalámbrica MagSafe hasta 15W</li>
                        <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Capacidad optimizada de 3.350 mAh</li>
                    </>
                )}
            </ul>
        </div>
    </>
);

export default FeatureCard;
