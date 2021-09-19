/* eslint-disable import/no-anonymous-default-export */
const initialState = {
	amount: 100,
};

export default (state = initialState, action) =>{

	switch (action.type) {

		case "DEPOSITAR_DINERO":
			return{
				...state,
				amount: state.amount + 10
			}

		case "RETIRAR_DINERO":
			return{
				...state,
				amount: state.amount - 10
			}
		default:
			return state;
	}
};

export const selectCurrentAmount = (state) => {
	return state.cantidadReducer.amount;
};
