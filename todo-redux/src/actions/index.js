// get todo task which user wants to add
export const addTodo = (userInput) =>{
    return{
        type: "ADDTODO",
        payload: {userInput}
    }
}

// get and return userinput which todo user wants to delete
export const removeTodo = (i) =>{
    return{
        type: "REMOVETODO",
        payload: {i}
    }
}

// take and return userinput and its index for the reference to modify todo task
export const modifyTodo = (userInput, i) =>{
    return{
        type: "MODIFYTODO",
        payload :{userInput, i}
    }
}