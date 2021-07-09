const data = {
    todolist : JSON.parse(localStorage.getItem("todos"))??[]
}

const todoReducers = (state = data, action)=>{
    switch (action.type){
        case "ADDTODO": 
            const userInput= action.payload;
            const updatedState = {todolist:[...state.todolist, userInput]}
            localStorage.setItem("todos", JSON.stringify(updatedState.todolist));
            return updatedState
        case "REMOVETODO": 
            const newTodolist = state.todolist.filter((todo) => todo !== action.payload);
            localStorage.setItem("todos", JSON.stringify(newTodolist));
            return {
                ...state, 
                todolist : newTodolist
            }
        default: 
            return state;
        }  
    }

export default todoReducers;