import React from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Button, BUTTON_SIZES } from "CORE/Button/Button";
// import GlobalReducer from "../../redux/Global/GlobalReducer";

let testId = 1;
const ReduxHooksView = (props) => {
	const { todos } = useSelector((state) => {
		// console.log(state);
		return { ...state.globalReducer };
	});
	const dispatch = useDispatch();

	return (
		<div className="todos-list">
			<Button
				buttonSize={BUTTON_SIZES.LARGE}
				onClickCallback={() => {
					dispatch({ type: "ADD_TODO", payload: { id: testId } });
					testId++;
				}}
			>
				Add Todo
			</Button>
			{todos.map((something, index) => {
				return (
					<div key={index} className="todo-item">
						{something.id}
					</div>
				);
			})}
		</div>
	);
};

export default ReduxHooksView;
