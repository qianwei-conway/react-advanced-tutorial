import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
import reducer from "./reducer";

const defaultState = {
	people: data,
	isModalOpen: false,
	modalContent: "",
};

const Index = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);
	const [name, setName] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (name) {
			const newPerson = { id: new Date().getTime().toString(), name };
			dispatch({ type: "ADD_ITEM", payload: newPerson });
			setName("");
		} else {
			dispatch({ type: "NO_VALUE" });
		}
	}

	function closeModal() {
		dispatch({ type: "CLOSE_MODAL" });
	}

	return (
		<>
			{state.isModalOpen && (
				<Modal
					modalContent={state.modalContent}
					closeModal={closeModal}
				/>
			)}

			<form className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button type="submit">add</button>
			</form>

			{state.people.map((person) => {
				return (
					<div className="item" key={person.id}>
						<h4>{person.name}</h4>
						<button
							onClick={() => {
								dispatch({
									type: "REMOVE_ITEM",
									payload: person.id,
								});
							}}
						>
							remove
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Index;
