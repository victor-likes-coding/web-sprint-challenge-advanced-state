// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";

const initialWheelState = {
    count: 0,
};
function wheel(state = initialWheelState, action) {
    switch (action.type) {
        case "MOVE_CLOCKWISE":
            return {
                count: (state.count + 1) % 6,
            };
        case "MOVE_COUNTERCLOCKWISE":
            // so from 0, need to achieve 5 instead of -1
            return {
                count: (state.count + 5) % 6,
            };
        default:
            return state;
    }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
    return state;
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
    return state;
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
    return state;
}

const initialFormState = {
    newQuestion: "",
    newTrueAnswer: "",
    newFalseAnswer: "",
};
function form(state = initialFormState, action) {
    return state;
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form });
