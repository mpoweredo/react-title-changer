import React, { useState } from "react";

import "./TitleChangerPopup.css";

const TitleChangerPopup = (props) => {
	const [newTitle, setNewTitle] = useState("");

	const changeTitle = (e) => {
		setNewTitle(e.target.value);
	};

	const updateTitleHandler = (e) => {
		props.onNewTitle(newTitle);
	};

	const onKeyUpdate = (e) => {
		if (e.code === "Enter") {
			props.onNewTitle(newTitle);
		}
	};

	return (
		<div className="overlay">
			<div className="content">
				<header>
					<h1>Update Title</h1>
				</header>
				<div>
					<input
						autoFocus
						type="text"
						placeholder={props.titleValue}
						onChange={changeTitle}
						className="change_input_title"
						onKeyDown={onKeyUpdate}
					/>
				</div>
				<div className="buttons">
					<button className="update" onClick={updateTitleHandler}>
						Update Title
					</button>
					<button className="cancel" onClick={props.onClose}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default TitleChangerPopup;
