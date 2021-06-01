import React from 'react';
import {InitialStateType, sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/react-store";

type mapStateToPropsType = {
    dialogsPage: InitialStateType
}

type mapDispatchToPropsType = {
    sendMessage: (message: string) => void
}

type DialogsContainerPropsType = {
    dialogsPage: InitialStateType
    sendMessage: (message: string) => void
}

function DialogsContainer({dialogsPage, sendMessage}: DialogsContainerPropsType) {
    debugger
    return (
        <Dialogs dialogsPage={dialogsPage}  sendMessage={sendMessage}/>
    )
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
        dialogsPage: state.dialogsPage
})

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, DialogsContainerPropsType, AppStateType>(
        mapStateToProps, {sendMessage}),
    withAuthRedirect
)(DialogsContainer)