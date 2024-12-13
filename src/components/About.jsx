import './About.css';
import vernon from '../assets/vernon.jpg';
import { forwardRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const About = forwardRef(function About(props, ref) {
	return (
		<section
			id="about"
			ref={ref}
			className="about-container background-highlight"
		>
			<div className="img-container">
				<img src={vernon} alt="" />
			</div>
			<div className="about">
				<h2>About Me</h2>
				{/* <p className="intro">
					Discover my story, philosophy, and why I’m passionate about helping
					you achieve your fitness goals.
				</p> */}

				<div className="about-section">
					<h3>My Story</h3>
					<p>
						My journey in fitness started as a strongman competitor, where I
						developed a love for pushing physical limits. With a Bachelor of
						Exercise and Sport Science, I combined my academic knowledge with
						real-world experience to help others transform their lives. I became
						a personal trainer to share my passion for health and fitness and to
						inspire clients to achieve their goals.
					</p>
				</div>

				<div className="about-section">
					<h3>Qualifications and Experience</h3>
					<ul>
						<li>Bachelor of Exercise and Sport Science</li>
						<li>
							Certified Personal Trainer with specialization in strength
							training and nutrition
						</li>
						<li>
							Years of experience coaching clients across all fitness levels
						</li>
						<li>Notable accomplishment: Competed as a strongman</li>
					</ul>
				</div>

				<div className="about-section">
					<h3>My Philosophy</h3>
					<p>
						I believe in creating personalized programs tailored to each
						client’s unique goals and lifestyle. My approach focuses on
						sustainable fitness, ensuring long-term success while emphasizing
						motivation, accountability, and results. I aim to make every
						training session both challenging and enjoyable.
					</p>
				</div>

				<div className="about-section">
					<h3>Who I Help</h3>
					<p>I work with clients of all fitness levels and ages, including:</p>
					<ul>
						<li>Beginners starting their fitness journey</li>
						<li>Experienced athletes aiming to improve performance</li>
						<li>Individuals seeking weight loss or strength-building</li>
						<li>Anyone looking to enhance overall health and fitness</li>
					</ul>
				</div>

				<div className="cta-button">
					<Link to="#services" smooth>
						Check out my <span>services</span>
					</Link>{' '}
					to see how I can help you achieve your goals.
				</div>
			</div>
		</section>
	);
});

export default About;
