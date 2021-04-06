import { ADD_TASK } from "../Constants/action-types";
import { TASK_DON } from "../Constants/action-types";
import { EDIT_TASK } from "../Constants/action-types";

const initialState = {
    todos: [
        {
            id: Math.random(),
            task: "Climb Mountain Everest",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Swim in the Great Barrier Reef",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Swim in the Great Barrier Reef",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Go to Hawaii",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "Go to Paris",
            isDone: false,
        },
    ],
};

export default function todosReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TASK: {
            return {
                todos: [
                    ...state.todos,

                    {
                        id: Math.random(),
                        task: payload.newTask,
                        isDone: false,
                    },
                ],
            };
        }
        case TASK_DON: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        }
        case EDIT_TASK: {
            return {
                todos: state.todos.map((el) =>
                    el.id === payload.id
                        ? { ...el, task: payload.editTask }
                        : el
                ),
            };
        }
        default:
            return state;
    }
}
