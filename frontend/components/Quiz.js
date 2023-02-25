import React, { useEffect } from "react";
import { fetchQuiz, postAnswer, selectAnswer } from "../state/action-creators";
import { connect } from "react-redux";

const mapStateToProps = ({ quiz, selectedAnswer }) => {
    return {
        quiz,
        selectedAnswer,
    };
};

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(function Quiz({ fetchQuiz, quiz, selectAnswer, selectedAnswer, postAnswer }) {
    useEffect(() => {
        fetchQuiz();
    }, []);

    const answers = quiz?.answers.map((answer, i) => {
        return (
            <div
                className={`answer ${selectedAnswer === answer.answer_id ? "selected" : ""}`}
                key={i}>
                {answer.text}
                <button onClick={() => selectAnswer(answer.answer_id)}>{selectedAnswer === answer.answer_id ? "SELECTED" : "Select"}</button>
            </div>
        );
    });
    return (
        <div id="wrapper">
            {
                // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
                quiz?.question ? (
                    <>
                        <h2>{quiz.question}</h2>
                        {answers}
                        <button
                            id="submitAnswerBtn"
                            onClick={() => {
                                postAnswer({ answer_id: selectedAnswer, quiz_id: quiz.quiz_id });
                            }}>
                            Submit answer
                        </button>
                    </>
                ) : (
                    "Loading next quiz..."
                )
            }
        </div>
    );
});
