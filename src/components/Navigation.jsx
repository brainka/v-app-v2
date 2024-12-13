import './Navigation.css';
import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
	// const navigationItems = ['About', 'Services', 'Testimonials', 'Contact'];
	const navigationItems = ['About', 'Services', 'Testimonials', 'Contact'];

	const [activeLink, setActiveLink] = useState('');

	function handleActiveLink(e) {
		setActiveLink(e.target.innerText.toLowerCase());
	}

	useEffect(() => {
		const handleScroll = () => {
			const nav = document.querySelector('.nav');
			if (window.scrollY > 20) {
				nav.classList.add('visible');
			} else {
				nav.classList.remove('visible');
				// setActiveLink('');
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<nav className="nav">
			<Link smooth to="#home" className="logo" onClick={handleActiveLink}>
				LOGO
			</Link>
			<ul role="menubar">
				{navigationItems.map((menuItem) => {
					const nav = menuItem.toLowerCase();
					return (
						<li key={menuItem} role="menuitem">
							<Link
								smooth
								to={`#${nav}`}
								className={nav === activeLink ? 'active' : ''}
								onClick={handleActiveLink}
							>
								{menuItem}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navigation;
