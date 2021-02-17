import { productsAPI } from '../../api/api';

const SET_PRODUCTS = 'SET_PRODUCTS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_SIZE_PIZZA = 'SET_SIZE_PIZZA';

let initialState = {
	products: [],
	loading: false,
	test: [],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return { ...state, products: action.products };
		}
		case TOGGLE_IS_LOADING: {
			return { ...state, loading: action.loading };
		}
		case SET_SIZE_PIZZA: {
			     debugger;
			return {
				...state,
				pizza: state.products.data.pizza.map((el) => {
                   return {...el, finalPrice: 350}
/* 					if (el.id === action.productId) {
						console.log(el.finalPrice);
						return { ...el, finalPrice: 350};
					}
					return el; */
				}),
			};
		}
		default:
			return state;
	}
};

export const setProductsAC = (products) => ({ type: SET_PRODUCTS, products });
export const toggleIsLoadingAC = (loading) => ({
	type: TOGGLE_IS_LOADING,
	loading,
});
export const setSizePizzaAC = (productId) => ({
	type: SET_SIZE_PIZZA,
	productId,
});

export const requestProducts = () => {
	return (dispatch) => {
		dispatch(toggleIsLoadingAC(false));

		productsAPI.getProducts().then((data) => {
			dispatch(setProductsAC(data));
			dispatch(toggleIsLoadingAC(true));
		});
	};
};

export default productReducer;
