import React from "react";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import "./TitleList.css";

const TitleListElement = (props) => {
	const editHandler = (e) => {
		props.onEdit(props.title, props.id);

	};

	return (
		<li>
			<p>{props.title}</p>
			<EditRoundedIcon
				fontSize="large"
				className="icon"
				onClick={editHandler}
			></EditRoundedIcon>
		</li>
	);
};

export default TitleListElement;
