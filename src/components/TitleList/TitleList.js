import React, { useState } from "react";

import "./TitleList.css";
import TitleChangerPopup from "./TitleChangerPopup";
import TitleListElement from "./TitleListElement";

const TitleList = (props) => {

	const DUMMY_TITLES = [{
		title: "Watch horror movie",
		id: Math.random()
	},
	{
		title: "Make dinner",
		id: Math.random()
	},
	{
		title: "Eat pizza",
		id: Math.random()
	},
	{
		title: "Wash car",
		id: Math.random()
	},
	{
		title: "Play football",
		id: Math.random()
	},]

	const [titles, setTitles] = useState(DUMMY_TITLES)

	const [isEditing, setIsEditing] = useState(false)
	const [lastEditingValue, setLastEditingValue] = useState('')
	const [lastId, setLastId] = useState('')

	const editHandler = (title, id) => {
		console.log(title, id)
		setIsEditing(!isEditing)
		setLastEditingValue(title)
		setLastId(+id)
	};

	const closePopupHandler = () => {
		setIsEditing(!isEditing)
	}
	
	const newTitleHandler = (newTitle) => {
		setTitles(titles.map(item => {
			if (+item.id === +lastId) {
				return {
					...item, title: newTitle
				}
			}
			return item;
		}))
		closePopupHandler()
	}

	return (
		<>
			<ul className="title_list">
				{titles.map((item) => {
					return (
						<TitleListElement
						key={Math.random()}
						id={item.id}
						title={item.title}
						onEdit={editHandler}
					>
						{item.title}
					</TitleListElement>
					);
					

				})}
			</ul>
			{isEditing && <TitleChangerPopup onClose={closePopupHandler} titleValue={lastEditingValue} onNewTitle={newTitleHandler}/>}
		</>
	);
};

export default TitleList;
