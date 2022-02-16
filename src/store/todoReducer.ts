const INITIAL_STATE = {
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
}

export default (state: any = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        default:
            return state;
    }   
}