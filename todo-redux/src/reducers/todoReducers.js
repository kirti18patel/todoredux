const data = {
    todolist : []
}

const todoReducers = (state = data, action)=>{
    switch (action.type){
        case "ADDTODO": const userInput= action.payload;
            return {
                ...state, 
                todolist:[
                    ...state.todolist,
                    {
                        userInput:userInput
                    }
                ]
            }
        case "REMOVETODO": 
            const newTodolist = state.todolist.filter((todo) => todo.userInput !== action.userInput);
            return {
                ...state, 
                todolist : newTodolist
            }
        default: return state;
        }
    }

export default todoReducers;