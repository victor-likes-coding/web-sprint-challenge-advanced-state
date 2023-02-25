import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ infoMessage }) => {
    return {
        infoMessage,
    };
};

export default connect(mapStateToProps)(function Message({ infoMessage }) {
    return <div id="message">{infoMessage}</div>;
});
