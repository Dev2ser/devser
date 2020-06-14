import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/base';
import { Helmet } from 'react-helmet';

const ResetPass = () => {
	const [ email, setEmail ] = useState('');
	const [ error, isError ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState('');

	const onChangeHandler = (event) => {
		const { name, value } = event.currentTarget;

		if (name === 'userEmail') {
			setEmail(value);
		}
	};

	const sendResetEmail = (event) => {
		event.preventDefault();
		fire
			.auth()
			.sendPasswordResetEmail(email)
			.then(() => {
				setEmail('');
				isError(true);
				setErrorMessage('An email has been sent to you!');
				setTimeout(() => {
					isError(false);
				}, 3000);
			})
			.catch((error) => {
				isError(true);
				setErrorMessage(error.message);
			});
	};
	return (
		<div className="mt-8 text-center">
			<Helmet>
				<title>Reset Password | Devser</title>
			</Helmet>
			<h1 className="text-xl text-center font-bold mb-3">Reset your Password</h1>
			<div className="border-top border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
				<form action="" style={{ marginTop: '20px' }} className="d-flex flex-column">
					{error && <p className="py-3 bg-red-600 w-full text-black text-center mb-3">{errorMessage}</p>}
					<label htmlFor="userEmail" className="w-full block">
						Email:
					</label>
					<input
						type="email"
						name="userEmail"
						id="userEmail"
						value={email}
						placeholder="Input your email"
						onChange={onChangeHandler}
						className="mb-3 w-full px-1 py-2"
					/>
					<button
						className="w-full bg-blue-400 text-black py-3"
						style={{ marginBottom: '20px' }}
						onClick={(event) => {
							sendResetEmail(event);
						}}
					>
						Send me a Reset Link
					</button>
				</form>

				<Link to="/" className="my-2 text-blue-700 hover:text-blue-800 text-center block">
					Go back
				</Link>
			</div>
		</div>
	);
};

export default ResetPass;
