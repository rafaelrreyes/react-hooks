import React from "react";
import "./Button.scss";

export const BUTTON_SIZES = {
	SMALL: "small",
	MEDIUM: "medium",
	LARGE: "large"
};

const getButtonSize = (buttonSize) => {
	return buttonSize;
};

export const Button = ({ children, onClickCallback, buttonSize }) => {
	return (
		<button className={`button button-${getButtonSize(buttonSize)}`} onClick={onClickCallback}>
			{children}
		</button>
	);
};
