const INITIAL_STATE = {}

export default (state: any = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data}
        case 'TODO_ADD':
            return {...state, name: ''};
        default:
            return state;
    }   
}