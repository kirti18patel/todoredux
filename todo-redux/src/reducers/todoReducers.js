// get todolist from userstorage if avvailable otherwise empty array
const data = {
    todolist : JSON.parse(localStorage.getItem("todos"))??[]
}

const todoReducers = (state = data, action)=>{
    // choose which case needs to execute according to action of user
    switch (action.type){
        case "ADDTODO": 
            const { userInput: addUserInput }= action.payload;
            // add userInput to existing todolist
            const updatedState = {todolist:[...state.todolist, addUserInput]}
            // set updated todolist to localstorage
            localStorage.setItem("todos", JSON.stringify(updatedState.todolist));
            return updatedState
        case "REMOVETODO": 
            const { i:idx }=action.payload; 
            // filter existing todolist according to index passed when user click delete button
            const newTodolist = state.todolist.filter((_, index) => index !== idx);
            // set updated todolist to localstorage
            localStorage.setItem("todos", JSON.stringify(newTodolist));
            return {
                ...state, 
                todolist : newTodolist
            }
        case "MODIFYTODO": 
            const {userInput: modifyUserInput, i }=action.payload;
            // update the modified userInput by comparing its index
            const newTodos = state.todolist.map((todo, index) => i === index ? modifyUserInput : todo);
            // set updated todolist to localstorage
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return {
                todolist : newTodos
            }   

        default: 
            return state;
        }  
    }

export default todoReducers;