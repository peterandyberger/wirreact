import {
    SET_LOGGED_IN,
    SET_MENU_ITEMS,
    SAVE_ENV_VARIABLES
} from './actions';
import {AnyAction} from 'redux';

export interface ReduxStore {
    loggedIn: boolean,
    menuItems: string[],
    env: ImportMetaEnv | undefined,
}

const initialState: ReduxStore = {
    loggedIn: false,
    menuItems: [],
    env: undefined
};
function appReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
    case SET_LOGGED_IN:
        return {
            ...state,
            loggedIn: action.data,
        };
    case SET_MENU_ITEMS:
        return {
            ...state,
            menuItems: action.data,
        };
    case SAVE_ENV_VARIABLES:
        return {
            ...state,
            env: action.data,
        };
    default:
        return state;
    }
}
export default appReducer;
