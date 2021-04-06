import { ADD_TASK } from "../Constants/action-types";
import { TASK_DON } from "../Constants/action-types";
import { EDIT_TASK } from "../Constants/action-types";

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload,
    };
};
export const taskDone = (payload) => {
    return {
        type: TASK_DON,
        payload: payload,
    };
};
export const editTask = (payload) => {
    return {
        type: EDIT_TASK,
        payload: payload,
    };
};
