import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		if (firstName && email) {
			const person = {
				id: new Date().getTime().toString(),
				firstName,
				email,
			};
			console.log(person);
			setPeople((people) => [...people, person]);

			setFirstName("");
			setEmail("");
		} else {
			console.log("empty values");
		}
	}

	return (
		<article>
			<form
				className="form"
				// onSubmit={handleSubmit} // onSubmit can write in the form element and also button element
			>
				<div className="form-control">
					<label htmlFor="firstName">Name: </label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email: </label>
					<input
						type="text"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				{/* onSubmit can write in the form element and also button element (but onClick instead)*/}
				<button type="submit" onClick={handleSubmit}>
					submit
				</button>
			</form>

			{people.map((person) => {
				const { id, firstName, email } = person;
				return (
					<div className="item" key={id}>
						<h4>{firstName}</h4>
						<p>{email}</p>
					</div>
				);
			})}
		</article>
	);
};

export default ControlledInputs;
