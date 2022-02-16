import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Read book',
        list: [{
            id: 1,
            name: 'Pay credicard',
            status: false
        }, {
            id: 2,
            description: 'Meet',
            status: true
        }]
    })
})

export default rootReducer;