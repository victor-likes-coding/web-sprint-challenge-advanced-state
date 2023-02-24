import React from "react";
import { connect } from "react-redux";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

const mapStateToProps = (state) => {
    return {
        count: state.wheel.count,
    };
};

export default connect(mapStateToProps, {
    moveClockwise,
    moveCounterClockwise,
})(function Wheel({ count, moveClockwise, moveCounterClockwise }) {
    return (
        <div id="wrapper">
            <div id="wheel">
                {[0, 1, 2, 3, 4, 5].map((i) => {
                    return (
                        <div
                            className={`cog ${count === i ? "active" : ""}`}
                            style={{ "--i": i }}
                            key={i}>
                            {i === count && "B"}
                        </div>
                    );
                })}
                {/* --i is a custom CSS property, no need to touch that nor the style object */}
            </div>
            <div id="keypad">
                <button
                    id="counterClockwiseBtn"
                    onClick={() => {
                        moveCounterClockwise();
                    }}>
                    Counter clockwise
                </button>
                <button
                    id="clockwiseBtn"
                    onClick={() => {
                        moveClockwise();
                    }}>
                    Clockwise
                </button>
            </div>
        </div>
    );
});
