import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, BUTTON_SIZES } from "CORE/Button/Button";

const LoginView = (props) => {
	const [username, setUsername] = useState("");
	const isLoggedIn = useSelector((state) => {
		return state.userReducer.username !== "";
	});
	const dispatch = useDispatch();

	const login = (e) => {
		e.preventDefault();
		// login user by passing username state into dispatch payload
		dispatch({ type: "LOGIN_USER", payload: { username, token: "test" } });
	};

	const logout = () => {
		dispatch({ type: "LOGOUT_USER" });
		setUsername("");
	};

	return (
		<div className="login-view">
			{!isLoggedIn && (
				<form onSubmit={login}>
					<input type="text" value={username} onChange={(e) => setUsername(String(e.target.value))} />
					<Button buttonSize={BUTTON_SIZES.LARGE} onClickCallback={() => {}}>
						Login
					</Button>
				</form>
			)}
			{isLoggedIn && (
				<Button buttonSize={BUTTON_SIZES.LARGE} onClickCallback={logout}>
					Logout
				</Button>
			)}
		</div>
	);
};

export default LoginView;
