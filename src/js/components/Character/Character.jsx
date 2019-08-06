import React, { Component } from "react";
import { BUTTON_SIZES, Button } from "CORE/Button/Button";

import "./Character.scss";

const Character = ({ name, age, superpower }) => {
	return (
		<div className="character">
			{/* <Button
				buttonSize={BUTTON_SIZES.LARGE}
				onClickCallback={(e) => {
					console.log("clicked button");
				}}
			/> */}
			{/* <Label>{name}</Label> */}
		</div>
	);
};

export default Character;
