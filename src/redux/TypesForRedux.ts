//typization for action

export enum typeOfActionDispatch {
    ADD_MESSAGE = "ADD_MESSAGE",
    ADD_POST = "ADD_POST",
    UPDATE_MESSAGE = "UPDATE_MESSAGE",
    UPDATE_POST = "UPDATE_POST"
}

export type ActionCreatorsType = ReturnType<typeof updatePostAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateMessageAC> |
    ReturnType<typeof addMessageAC>

//actionCreators
export const updatePostAC =(newPostValue: string) => {
    return {
        type: typeOfActionDispatch.UPDATE_POST,
        newPostValue
    } as const
};
export const addPostAC =() =>{
    return {
        type: typeOfActionDispatch.ADD_POST
    } as const
};
export const updateMessageAC = (newMessageValue: string) => {
    return (
        {type: typeOfActionDispatch.UPDATE_MESSAGE, newMessageValue}
    ) as const
};
export const addMessageAC = () => {
    return (
        {type: typeOfActionDispatch.ADD_MESSAGE}
    ) as const
};
