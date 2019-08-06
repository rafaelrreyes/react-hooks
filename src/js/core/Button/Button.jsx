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
	console.log(React.Children.count(children));
	return (
		<button className={`button button-${getButtonSize(buttonSize)}`} onClick={onClickCallback}>
			{children}
		</button>
	);
};
