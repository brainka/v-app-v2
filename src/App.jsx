import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import { useEffect, useRef } from 'react';

function App() {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const serviceRef = useRef(null);
	const contactRef = useRef(null);
	const testimonialRef = useRef(null);

	useEffect(() => {
		const sections = [
			homeRef.current,
			aboutRef.current,
			serviceRef.current,
			contactRef.current,
			testimonialRef.current,
		];

		const navLinks = document.querySelectorAll('.nav ul li a');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log(`im intersecting ${entry.target.id}`);

						navLinks.forEach((link) => {
							link.classList.remove('active');

							if (entry.target.id === link.getAttribute('href').split('#')[1]) {
								link.classList.add('active');
							}
							console.log(link);
						});
					}
				});
			},
			{
				threshold: 0.2,
			}
		);

		sections.forEach((section) => observer.observe(section));
		return () => {
			sections.forEach((section) => {
				if (section) {
					observer.unobserve(section);
				}
			});
		};
	});

	return (
		<div className='app-container'>
			<Navigation />

			<Home ref={homeRef} />

			<About ref={aboutRef} />

			<Services ref={serviceRef} />

			<Testimonials ref={testimonialRef} />

			<Contact ref={contactRef} />
		</div>
	);
}

export default App;
