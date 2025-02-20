import React from 'react';

const PriceSection = ({ addToSectionRefs, priceRef, ctaRef }) => (
    <section className="min-h-screen flex flex-col justify-center p-8 md:p-16">
        <div className="text-center">
            <h2 ref={addToSectionRefs} className="text-3xl font-semibold mb-12 text-gray-800">
                Una inversión inteligente
            </h2>

            <div ref={priceRef} className="text-5xl font-bold mb-4 text-gray-900">
                $14,999 MXN
            </div>

            <p className="text-lg text-gray-500 mb-12">
                Ahorra hasta un 30% comparado con un dispositivo nuevo
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-16">
                <h3 className="text-xl font-medium mb-4 text-blue-500">¿Qué incluye?</h3>
                <ul className="space-y-3 text-left text-gray-700">
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>iPhone 16 en excelente estado (calidad Premium)</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Batería con capacidad mínima del 90%</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Garantía de 6 meses</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Cable de carga USB-C a Lightning</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Protector de pantalla instalado</span>
                    </li>
                </ul>
            </div>

            <button ref={ctaRef} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg w-full md:w-2/3 mx-auto">
                ¡Lo quiero ahora!
            </button>
        </div>
    </section>
);

export default PriceSection;
