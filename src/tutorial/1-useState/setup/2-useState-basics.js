import React, { useState } from "react";

const UseStateBasics = () => {
	const [text, setText] = useState("random title");

	const handleClick = () => {
		setText(text === "random title" ? "hello world" : "random title");
	};
	return (
		<>
			<h1>{text}</h1>
			<button className="btn" onClick={handleClick}>
				Change title
			</button>
		</>
	);
};

export default UseStateBasics;
