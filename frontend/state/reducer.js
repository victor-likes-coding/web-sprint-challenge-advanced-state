// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import { INPUT_CHANGE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
    switch (action.type) {
        case "MOVE_CLOCKWISE":
            return (state + 1) % 6;
        case "MOVE_COUNTERCLOCKWISE":
            // so from 0, need to achieve 5 instead of -1
            return (state + 5) % 6;
        default:
            return state;
    }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
    switch (action.type) {
        case SET_QUIZ_INTO_STATE:
            return action.payload;
        default:
            return state;
    }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
    switch (action.type) {
        case SET_SELECTED_ANSWER:
            return action.payload;
        default:
            return state;
    }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
    switch (action.type) {
        case SET_INFO_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}

const initialFormState = {
    newQuestion: "",
    newTrueAnswer: "",
    newFalseAnswer: "",
};
function form(state = initialFormState, action) {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            };
        case RESET_FORM:
            return initialFormState;
        default:
            return state;
    }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form });
