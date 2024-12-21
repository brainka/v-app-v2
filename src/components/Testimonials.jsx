import { forwardRef, useEffect, useState } from 'react';
import './Testimonials.css';
import testimonialImage from '../assets/testimonial.jpg';
import testimonialImage2 from '../assets/testimonial2.jpg';
import testimonialImage3 from '../assets/testimonial3.jpg';

const testimonials = [
	{
		text: "This is the best service I've ever used!",
		author: 'John Doe',
		imgSrc: testimonialImage,
	},
	{
		text: 'Amazing experience, highly recommend!',
		author: 'Jane Smith',
		imgSrc: testimonialImage2,
	},
	{
		text: 'I achieved my goals thanks to this service!',
		author: 'Sam Wilson',
		imgSrc: testimonialImage3,
	},
];

const Testimonials = forwardRef(function Testimonials(props, ref) {
	const [testimonialIndex, setTestimonialIndex] = useState(0);

	useEffect(() => {
		const testimonialInterval = setInterval(() => {
			if (testimonialIndex >= testimonials.length - 1) {
				setTestimonialIndex(0);
			} else {
				setTestimonialIndex((prevIndex) => prevIndex + 1);
			}
		}, 6000);

		return () => clearInterval(testimonialInterval);
	}, [testimonialIndex]);

	return (
		<>
			<section ref={ref} id="testimonials">
				<h2>Testimonials</h2>
				<div className="carousel">
					{testimonials.map((testimonial, index) => {
						return (
							<div
								key={index}
								className={`carousel-item ${
									index === testimonialIndex ? 'showTestimonial' : ''
								}`}
							>
								<div className="testimonial-details">
									<p>{testimonial.text}</p>
									<span>{testimonial.author}</span>
								</div>
								<div className="img-container">
									<img src={testimonial.imgSrc} alt="" />
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
});

export default Testimonials;
