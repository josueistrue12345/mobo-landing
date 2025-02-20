import React from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const Introduction = ({ addToSectionRefs }) => (
    <section ref={addToSectionRefs} className="min-h-screen flex flex-col justify-center p-8 md:p-16">
        <Heading level='h1' className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            iPhone 16 Seminuevo Premium
        </Heading>
        <Heading level='h2' className="text-3xl font-semibold mb-4 text-gray-800">
            Rendimiento de última generación a un precio accesible
        </Heading>
        <Paragraph className="text-lg text-gray-600 mb-6">
            Experimenta toda la potencia y las características del iPhone 16 en un dispositivo seminuevo
            que ha pasado por rigurosos controles de calidad para garantizar un funcionamiento perfecto.
        </Paragraph>
    </section>
);

export default Introduction;
