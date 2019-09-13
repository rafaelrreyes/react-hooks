const GLOBAL_COSTANTS = {
	ADD_TODO: "ADD_TODO"
};

const INITIAL_STATE = {
	todos: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GLOBAL_COSTANTS.ADD_TODO: {
			return {
				...state,
				todos: [...state.todos, action.payload]
			};
		}
		default:
			return state;
	}
}
