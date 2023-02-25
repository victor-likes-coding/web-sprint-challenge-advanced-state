import axios from "axios";
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types";

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
    return {
        type: MOVE_CLOCKWISE,
    };
}

export function moveCounterClockwise() {
    return {
        type: MOVE_COUNTERCLOCKWISE,
    };
}

export function selectAnswer(id) {
    return {
        type: SET_SELECTED_ANSWER,
        payload: id,
    };
}

export function setMessage(message) {
    return {
        type: SET_INFO_MESSAGE,
        payload: message,
    };
}

export function setQuiz(data) {
    return {
        type: SET_QUIZ_INTO_STATE,
        payload: data,
    };
}

export function inputChange() {}

export function resetForm() {}

// ❗ Async action creators
export function fetchQuiz() {
    return function (dispatch) {
        // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
        // On successful GET:
        dispatch(setQuiz(null));
        // - Dispatch an action to send the obtained quiz to its state
        (async () => {
            const { data } = await axios.get("http://localhost:9000/api/quiz/next");
            dispatch(setQuiz(data));
        })();
    };
}
export function postAnswer({ answer_id, quiz_id }) {
    return function (dispatch) {
        // On successful POST:
        // - Dispatch an action to reset the selected answer state
        // - Dispatch an action to set the server message to state
        // - Dispatch the fetching of the next quiz
        dispatch(selectAnswer(null));
        (async () => {
            try {
                const result = await axios.post("http://localhost:9000/api/quiz/answer", { answer_id, quiz_id });
                dispatch(setMessage(result.data.message));
                dispatch(fetchQuiz());
            } catch (error) {
                console.log(error);
            }
        })();
    };
}
export function postQuiz() {
    return function (dispatch) {
        // On successful POST:
        // - Dispatch the correct message to the the appropriate state
        // - Dispatch the resetting of the form
    };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
