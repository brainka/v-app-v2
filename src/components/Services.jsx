import './Services.css';
import { forwardRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const Services = forwardRef(function Services(props, ref) {
	// const [activeIndex, setActiveIndex] = useState(null);

	return (
		<section id="services" ref={ref}>
			<h2>Personal Training Services</h2>
			<div className="pricing-plan-container">
				<div className="pricing-plan">
					<h3>ONLINE COACHING</h3>
					<div className="pricing-frequency">
						<p>
							<b>$40 /week</b>
						</p>
						<p>billed weekly</p>
					</div>
					<Link to="#contact" smooth className="contactButton">
						Enquire Now
					</Link>
					<ul>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>lorem10</li>
						<li>Lorem, ipsum.</li>
						<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
						<li>Lorem ipsum dolor sit.</li>
						<li>Lorem, ipsum dolor.</li>
					</ul>
				</div>
				<div className="pricing-plan">
					<h3>ANOTHER COACHING OPTION</h3>
					<div className="pricing-frequency">
						<p>
							<b>$50 /week</b>
						</p>
						<p>billed weekly</p>
					</div>
					<Link to="#contact" smooth className="contactButton">
						Enquire Now
					</Link>
					<ul>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>lorem10</li>
						<li>Lorem, ipsum.</li>
						<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
						<li>Lorem ipsum dolor sit.</li>
						<li>Lorem, ipsum dolor.</li>
					</ul>
				</div>
				<div className="pricing-plan">
					<h3>SECOND COACHING OPTION</h3>
					<div className="pricing-frequency">
						<p>
							<b>$60 /week</b>
						</p>
						<p>billed weekly</p>
					</div>
					<Link to="#contact" smooth className="contactButton">
						Enquire Now
					</Link>
					<ul>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>lorem10</li>
						<li>Lorem, ipsum.</li>
						<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
						<li>Lorem ipsum dolor sit.</li>
						<li>Lorem, ipsum dolor.</li>
					</ul>
				</div>
			</div>
		</section>
	);
});

export default Services;
