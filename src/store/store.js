import reducer from "./reducer";

const store = {
    _state: reducer(),
    getState() {
        return this._state
    },

    //Функция пустышка 
    _callSubscriber() {
        console.log('');
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state = reducer(this._state, action)
        this._callSubscriber(this._state)
    }
}
export default store 

window.store = store