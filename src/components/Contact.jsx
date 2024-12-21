import './Contact.css';
import { forwardRef, useState } from 'react';
import axios from 'axios';
import closeIcon from '../assets/closeIcon.svg';

const Toast = ({ message, onClose, type }) => (
	<div className={`toast ${type}`}>
		{message}
		<button onClick={onClose}>
			<img src={closeIcon} alt="" />
		</button>
	</div>
);

const Contact = forwardRef(function Contact(props, ref) {
	const [isFormSubmitting, setIsFormSubmitting] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [toastType, setToastType] = useState('');
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		preferredTime: '',
		goals: '',
	});

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setIsFormSubmitting(true);

		try {
			const response = await axios.post(
				'https://v-app-backend.onrender.com/api/contact',
				formData
			);

			if (response.status === 200) {
				setFormData({
					name: '',
					email: '',
					phone: '',
					preferredTime: '',
					goals: '',
				});

				//add a toast notification here
				setToastMessage('Form has been submitted successfully!');
				setToastType('success');
			} else {
				console.error('Form submission failed', response);
				setToastMessage('Form Submission Failed. Please try again.');
				setToastType('error');
			}
		} catch (error) {
			console.error('Error submitting form', error);
			setToastMessage('Error submitting form. Please try again.');
			setToastType('error');
		} finally {
			setIsFormSubmitting(false);
		}

		setTimeout(() => {
			setToastMessage('');
		}, 3000);
	};

	return (
		<section id="contact" className="contact-form" ref={ref}>
			<h2>Get in Touch</h2>
			{toastMessage && (
				<Toast
					message={toastMessage}
					onClose={() => setToastMessage('')}
					type={toastType}
				/>
			)}
			<form
				ref={ref}
				className="background-highlight"
				onSubmit={handleFormSubmit}
			>
				<div>
					<label htmlFor="name">NAME</label>
					<input
						autoComplete="off"
						type="text"
						id="name"
						name="name"
						required
						placeholder="Enter your name"
						onChange={handleFormChange}
						value={formData.name}
					/>
				</div>
				<div>
					<label htmlFor="email">EMAIL</label>
					<input
						type="text"
						id="email"
						name="email"
						required
						placeholder="Enter your email"
						onChange={handleFormChange}
						value={formData.email}
					/>
				</div>
				<div>
					<label htmlFor="phone">PHONE</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						required
						placeholder="Enter your phone number"
						onChange={handleFormChange}
						value={formData.phone}
					/>
				</div>
				<div>
					<label htmlFor="preferredTime">PREFERRED TIME</label>
					<input
						type="text"
						id="preferredTime"
						name="preferredTime"
						placeholder="Enter your preferred time to get in contact"
						onChange={handleFormChange}
						value={formData.preferredTime}
					/>
				</div>
				<div>
					<label htmlFor="goals">GOALS</label>
					<textarea
						id="goals"
						name="goals"
						rows={4}
						cols="25"
						placeholder="Enter your training goals"
						onChange={handleFormChange}
						value={formData.goals}
					></textarea>
				</div>
				<button
					type="submit"
					disabled={isFormSubmitting}
					className="contactButton"
				>
					Let's Talk
					{isFormSubmitting && <span className="spinner"></span>}
				</button>
			</form>
		</section>
	);
});

export default Contact;
