export const addTodo = (userInput) =>{
    return{
        type: "ADDTODO",
        payload: {userInput}
    }
}

export const removeTodo = (i) =>{
    return{
        type: "REMOVETODO",
        payload: {i}
    }
}

export const modifyTodo = (userInput, i) =>{
    return{
        type: "MODIFYTODO",
        payload :{userInput, i}
    }
}