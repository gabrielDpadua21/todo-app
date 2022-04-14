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
    const request = axios.post(`${BASE_URL}/tasks`, {name: name});
    return {
        type: 'TODO_ADD',
        payload: request
    }
}