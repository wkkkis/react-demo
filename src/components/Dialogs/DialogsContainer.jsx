import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessageCreator(message))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapsDispatchToProps),
    withAuthRedirect
)(Dialogs)