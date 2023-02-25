import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form({ form, inputChange, postQuiz }) {
    const { newQuestion, newTrueAnswer, newFalseAnswer } = form;
    const isAnyLessThanOneCharacter = [newQuestion, newTrueAnswer, newFalseAnswer].some((input) => input?.trim()?.length <= 1);

    const onChange = ({ target }) => {
        const { id, value } = target;
        inputChange(id, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(newQuestion, newTrueAnswer, newFalseAnswer);
        postQuiz({ newQuestion, newTrueAnswer, newFalseAnswer });
    };

    return (
        <form
            id="form"
            onSubmit={onSubmit}>
            <h2>Create New Quiz</h2>
            <input
                maxLength={50}
                onChange={onChange}
                id="newQuestion"
                placeholder="Enter question"
                value={newQuestion}
            />
            <input
                maxLength={50}
                onChange={onChange}
                id="newTrueAnswer"
                placeholder="Enter true answer"
                value={newTrueAnswer}
            />
            <input
                maxLength={50}
                onChange={onChange}
                id="newFalseAnswer"
                placeholder="Enter false answer"
                value={newFalseAnswer}
            />
            <button
                id="submitNewQuizBtn"
                disabled={isAnyLessThanOneCharacter}>
                Submit new quiz
            </button>
        </form>
    );
}

export default connect((st) => st, actionCreators)(Form);
