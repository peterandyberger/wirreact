export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_MENU_ITEMS = 'SET_MENU_ITEMS';

export const SAVE_ENV_VARIABLES = 'SAVE_ENV_VARIABLES';
export function setLoggedIn(data: boolean) {
    return {type: SET_LOGGED_IN, data: data};
}
export function setMenuItems(data: string[]) {
    return {type: SET_MENU_ITEMS, data: data};
}

export function saveEnvVariables(data: ImportMetaEnv) {
    return {type: SAVE_ENV_VARIABLES, data: data};
}
