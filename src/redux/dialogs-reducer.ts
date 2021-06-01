const SEND_MESSAGE = 'dialog/SEND_MESSAGE';

export type dialogType = {
    id: number
    name: string
    ava: string
}

export type messagesType = {
    id: number
    message: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
    ] as Array<messagesType>,
    dialogs: [
        {id: 1, name: 'Dimych', ava: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
        {id: 2, name: 'Andrey', ava: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
        {id: 3, name: 'Sveta', ava: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
        {id: 4, name: 'Victor', ava: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
        {id: 5, name: 'Valery', ava: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'}
    ] as Array<dialogType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.message
            return  {...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

type sendMessageCreatorType = {
    type: typeof SEND_MESSAGE,
    message : string
}

export const sendMessage = (message: string): sendMessageCreatorType => ({type: SEND_MESSAGE, message});

export default dialogsReducer;