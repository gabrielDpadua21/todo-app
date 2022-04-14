const INITIAL_STATE = {}

export default (state: any = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'TODO_SEARCHED':
            console.log(action.payload.data);
            return { ...state, list: action.payload.data}
        default:
            return state;
    }   
}