function reducer(state, action) {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				people: [...state.people, action.payload],
				isModalOpen: true,
				modalContent: "successfully added",
			};
		case "NO_VALUE":
			return {
				...state,
				isModalOpen: true,
				modalContent: "please enter a value",
			};
		case "CLOSE_MODAL":
			return { ...state, isModalOpen: false };
		case "REMOVE_ITEM":
			const newPeople = state.people.filter(
				(person) => person.id !== action.payload
			);
			return {
				...state,
				people: newPeople,
				isModalOpen: true,
				modalContent: "removed",
			};
		default:
			throw new Error("no matching action type");
	}
}

export default reducer;
