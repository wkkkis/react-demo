import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are you ?', likesCount: 12}
            ],
            newPostText: '',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you ?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Dimych', ava:'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
                {id: 2, name: 'Andrey', ava:'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
                {id: 3, name: 'Sveta', ava:'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
                {id: 4, name: 'Victor', ava:'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
                {id: 5, name: 'Valery', ava:'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'}
            ],
            newMessageBody:"",
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}


export default store;

window.stote = store;