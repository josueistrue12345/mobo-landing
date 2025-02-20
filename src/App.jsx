import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./assets/css/index.css";
import ImageGallery from './components/organisms/ImageGallery';
import Introduction from './components/organisms/Introduction';
import FeatureSection from './components/organisms/FeatureSection';
import PriceSection from './components/organisms/PriceSection';

import All from '/src/assets/img/all.webp';
import Front from '/src/assets/img/front.webp';
import Left from '/src/assets/img/latt-derech.webp';
import Right from '/src/assets/img/back.webp';

// Registramos el plugin ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

const App = () => {
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const sectionsRef = useRef([]);
	const featuresRef = useRef([]);
	const priceRef = useRef(null);
	const ctaRef = useRef(null);

	// Simulated iPhone images for the 360 view effect
	const iPhoneImages = [
		All, // Front view
		Front, // Right side view
		Left,
		Right, // Back view
	];

	// iPhone 16 features data
	const features = [
		{
			title: "A17 Pro Chip",
			description: "El chip más potente jamás creado para iPhone, con rendimiento ultrarrápido y eficiencia energética mejorada."
		},
		{
			title: "Sistema de cámaras Pro",
			description: "Cámara principal de 48MP con sensor quad-pixel, teleobjetivo 5x y ultra gran angular mejorado para fotos y videos profesionales."
		},
		{
			title: "Super Retina XDR Display",
			description: "Pantalla OLED de 6.1 pulgadas con brillo de hasta 2000 nits para una visibilidad perfecta incluso bajo luz solar directa."
		},
		{
			title: "Batería de larga duración",
			description: "Hasta 26 horas de reproducción de video, con carga rápida que alcanza el 50% en solo 30 minutos."
		}
	];

	useEffect(() => {
		// Animaciones para los títulos de sección y textos
		sectionsRef.current.forEach((section, index) => {
			gsap.fromTo(
				section.querySelectorAll('h2, p'),
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.2,
					scrollTrigger: {
						trigger: section,
						start: "top 70%",
						end: "bottom 20%",
						toggleActions: "play none none reverse"
					}
				}
			);
		});

		// Animaciones para las características
		featuresRef.current.forEach((feature, index) => {
			gsap.fromTo(
				feature,
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: feature,
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none reverse"
					}
				}
			);
		});

		// Animación para el precio y CTA
		gsap.fromTo(
			[priceRef.current, ctaRef.current],
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.3,
				scrollTrigger: {
					trigger: priceRef.current,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse"
				}
			}
		);

		// Cambio de imágenes al hacer scroll
		const sections = sectionsRef.current;
		sections.forEach((section, index) => {
			ScrollTrigger.create({
				trigger: section,
				start: "top center",
				end: "bottom center",
				onEnter: () => setActiveImageIndex(index % iPhoneImages.length),
				onEnterBack: () => setActiveImageIndex(index % iPhoneImages.length),
			});
		});

		return () => {
			// Limpieza de las instancias de ScrollTrigger
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	// Función para añadir referencias a los arrays de refs
	const addToSectionRefs = (el) => {
		if (el && !sectionsRef.current.includes(el)) {
			sectionsRef.current.push(el);
		}
	};

	const addToFeatureRefs = (el) => {
		if (el && !featuresRef.current.includes(el)) {
			featuresRef.current.push(el);
		}
	};

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
			{/* Panel izquierdo con iPhone - fijo al hacer scroll */}
			<ImageGallery images={iPhoneImages} activeImageIndex={activeImageIndex} />

			{/* Panel derecho con contenido scrollable */}
			<div className="w-full md:w-1/2 overflow-y-auto">
				{/* Sección de introducción */}
				<Introduction addToSectionRefs={addToSectionRefs} />

				{/* Secciones de características */}
				{features.map((feature, index) => (
					<FeatureSection feature={feature} addToFeatureRefs={addToFeatureRefs} addToSectionRefs={addToSectionRefs} id={index} />
				))}

				{/* Sección de precio y CTA */}
				<PriceSection addToSectionRefs={addToSectionRefs} priceRef={priceRef} ctaRef={ctaRef} />
			</div>
		</div>
	);
};

export default App;