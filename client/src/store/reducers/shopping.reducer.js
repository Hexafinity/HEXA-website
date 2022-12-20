import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/actions';

const initialState = {
    challenges: [],
    lectures: [],
    markets: []
}

const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (action.name == 'lecture') {
                let lectures = [...state.lectures];
                lectures.push(action.value);
                return {
                    ...state,
                    lectures: lectures
                }
            } else if (action.name == 'challenge') {
                let challenges = [...state.challenges];
                challenges.push(action.value)
                return {
                    ...state,
                    challenges: challenges
                }
            } else {
                let markets = [...state.markets];
                markets.push(action.value);
                return {
                    ...state,
                    markets: markets
                }
            }

        case DELETE_FROM_CART:
            if (action.name === 'lecture') {
                let lectures = state.lectures.filter(item => item.id !== action.value.id);
                return {
                    ...state,
                    lectures: lectures
                }
            } else if (action.name === 'challenge') {
                let challenges = state.challenges.filter(item => item.id !== action.value.id);
                return {
                    ...state,
                    challenges: challenges
                }
            } else {
                let markets = state.markets.filter(item => item.id !== action.value.id);
                return {
                    ...state,
                    markets: markets
                }
            }

        default:
            return state;
    }
}

export default shoppingReducer;