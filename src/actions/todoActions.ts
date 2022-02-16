export const changeName = (event: any) => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})