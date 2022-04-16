import axios from "axios"

const BASE_URL = 'http://localhost:3001'

export const changeName = (event: any) => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})

export const search = (_name?: string) => {
    let url = `${BASE_URL}/tasks`;
    if(_name) url = `${url}/search/${_name}`;
    const request = axios.get(url);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (name: string) => {
    return (dispatch: (arg0: { type: string; payload: any; }) => any) => {
        axios.post(`${BASE_URL}/tasks`, {name: name})
        .then(response => dispatch({type: 'TODO_ADD', payload: response.data}))
        .then(response => dispatch(search()))
    };
}

export const toggleMark = (id: number, status: boolean) => {
    return (dispatch: (arg0: { type: string; payload: any; }) => any) => {
        axios.put(`${BASE_URL}/tasks/${id}`, {status: status})
            .then(response => dispatch({type: 'TODO_TOGGLE_DONE', payload: response.data}))
            .then(response => dispatch(search()))
    }
}