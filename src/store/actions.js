import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../index';

export const changeFistName = (newFistName) => {
    return {
        type: ACTION_CHANGE_FIRST_NAME,
        payload: newFistName
    };
};
export const changeSecondName = (newSecondName) => {
    return {
        type: ACTION_CHANGE_SECOND_NAME,
        payload: newSecondName
    };
};
