import React, { useState, useEffect } from "react";

import "./Character.scss";
import axios from "axios";

const Character = (props) => {
	const [loadedCharacter, setLoadedCharacter] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios.get(`https://swapi.co/api/people/${props.characterId}`).then((response) => {
			setIsLoading(false);
			const characterData = response.data;
			setLoadedCharacter(characterData);
		});
	}, [props.characterId]);

	if (isLoading) {
		return <div>Loading Character Data...</div>;
	}

	return <div className="character">{renderCharacterView(loadedCharacter)}</div>;
};

const renderCharacterView = (character) => {
	const { name, birth_year, gender, height, hair_color, eye_color } = character;

	return (
		<>
			<label className="name">{name}</label>
			<div className="characteristics">
				<div className="birth-year">Birth year: {birth_year}</div>
				<div className="gender">Gender: {gender}</div>
				<div className="height">Height (cm): {height}</div>
				<div className="hair_color">Hair color: {hair_color}</div>
				<div className="eye_color">Eye color: {eye_color}</div>
			</div>
		</>
	);
};

export default Character;
