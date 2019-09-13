const INITIAL_STATE = {
	username: "",
	token: ""
};

const USER_CONSTANTS = {
	LOGIN_USER: "LOGIN_USER",
	LOGOUT_USER: "LOGOUT_USER"
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case USER_CONSTANTS.LOGIN_USER:
			const { username, token } = action.payload;
			return {
				...state,
				username,
				token
			};
		case USER_CONSTANTS.LOGOUT_USER:
			return {
				...state,
				username: "",
				token: ""
			};
		default:
			return state;
	}
}
