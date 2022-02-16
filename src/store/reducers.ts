import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: () => ({
        name: 'Read book',
        list: [{
            id: 1,
            name: 'Pay credicard',
            status: false
        }, {
            id: 2,
            name: 'Meet',
            status: true
        }]
    })
})

export default rootReducer;