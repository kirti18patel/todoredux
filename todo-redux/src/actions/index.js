export const addTodo = (userInput) =>{
    return{
        type: "ADDTODO",
        payload:{
            userInput:userInput
        }
    }
}

export const removeTodo = (userInput) =>{
    return{
        type: "REMOVETODO",
        userInput
    }
}

export const modifyTodo = () =>{
    return{
        type: "MODIFYTODO"
    }
}