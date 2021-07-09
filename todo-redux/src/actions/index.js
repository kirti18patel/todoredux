export const addTodo = (userInput) =>{
    return{
        type: "ADDTODO",
        payload: userInput
    }
}

export const removeTodo = (userInput) =>{
    return{
        type: "REMOVETODO",
        payload: userInput
    }
}

export const modifyTodo = (userInput) =>{
    return{
        type: "MODIFYTODO",
        payload :{userInput}
    }
}