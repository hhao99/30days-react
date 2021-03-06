import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../component/todolist'

const getVisibleTodos = (todos,filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t=> t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t=> !t.completed)
    default:
      throw new Error('unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
