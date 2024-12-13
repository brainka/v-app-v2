import './Home.css';

import { forwardRef } from 'react';
import homePageVideo from '../assets/homePageVideo.mp4';
import { HashLink as Link } from 'react-router-hash-link';

const Home = forwardRef(function Home(props, ref) {
	return (
		<section id="home" ref={ref}>
			{/* <div>Home</div> */}
			<div className="video-container">
				<video src={homePageVideo} autoPlay loop muted playsInline></video>
			</div>
			<div className="video-overlay">
				<div className="hero-container">
					<h1>BIG V PT</h1>
					<p>FOR THOSE COMMITTED TO SERIOUS TRAINING</p>
					<Link to="#about" smooth className='home-cta'>
						Learn More About Me
					</Link>
				</div>
			</div>
		</section>
	);
});

export default Home;
