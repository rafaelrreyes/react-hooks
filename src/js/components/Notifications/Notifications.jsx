import React, { useState, useEffect } from "react";
import { Button, BUTTON_SIZES } from "CORE/Button/Button";
import useLocalStorageState from "HOOKS/useLocalStorageState";
import useWindowTitle from "HOOKS/useWindowTitle";
import useGetRequest from "HOOKS/useGetRequest";

const Notifications = (props) => {
	// custom hook that manages changing state of localstorage keys
	const [notifications, setNotifications] = useLocalStorageState("notifications", 0);
	const [username, setUsername] = useLocalStorageState("username", "rafael");
	const [setWindowTitle] = useWindowTitle();

	// http reducer GET
	const [state] = useGetRequest("https://swapi.co/api/people");
	console.log(state);

	useEffect(() => {
		setWindowTitle(notifications);
	}, [notifications]);
	return (
		<div className="notifications-view">
			<Button
				buttonSize={BUTTON_SIZES.LARGE}
				onClickCallback={() => {
					setNotifications(notifications + 1);
				}}
			>
				Count Up
			</Button>

			<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
			<Button
				buttonSize={BUTTON_SIZES.LARGE}
				onClickCallback={() => {
					console.log(username);
				}}
			>
				Set Username
			</Button>
		</div>
	);
};

export default Notifications;
