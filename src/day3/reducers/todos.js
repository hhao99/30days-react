const todos = (state =[], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      console.log('todo toggle')
      return state.map( todo =>
        (todo.id === action.id)
        ? { id: todo.id, text: todo.text , completed: !todo.completed}
          : todo
      )
    default:
      return state

  }
}

export default todos
