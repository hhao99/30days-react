Redux example

# introduction
React state management, the component state is just for the simple scenario, but for the complex state management, we need encapulate the backend business logic and state to the separate domain object, MVC is the good example, but it is not suitable for the frontend.
Flux is the design pattern of the state transition and action dispatcher, was introduced by Facebook. "Flux is simply a new kind of architecture that complements React and the concepts of unidirectional data flow." -- Scotch.io

# Flux architecture

 Actions ===> Dispatcher ===> Stores ||
              Views    <====         ||
## Actions
Actions are the payloads of the info which sent to the data from the component to the store, it is just the source the info for the store, send the data to store via store.dispatcher().

here is the todo example Action:
{
  type: 'ADD_TODO',
  text: 'define the flux actions'
}
## Action Creators
Action creators are exactly implicate that -- functions that create the acitons.
In Redux, action creator return the action:
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}
## Reducers
Reducers define how the app state transitions in response to actions sent to the store. Keep in mind that actions only describe the fact that user send info to the store, but don't know how the state changes.

## Store
the Store object that holding the application data in the backend, its responsibility:
 holding the applicaiton state
  allow the state to be accessed by getState()
  allow the state to be updated by dispatcher(action)
  rigisters listens via subscribe(listener)
  handles unregistering of the listeners via the functions by the return of the subscribe(listener)

  the most important of the store for one redux application is the singlton of the redux store, only one store per application.
# work with React
Flux is more like a design pattern than the framework, Redux is the implementation for the Flux design pattern, we can use Redux with other framework, not only the react, but also other UI library like AngularJs and Elm etc.

React with Redux enable the presentation of the UI separate from the conatiners component.

## presentation components
React component just describe hwo the user interface look like(styling and user interaction), the presentation layer will decouple the UI with the backend containers, the data pass through the React props, invoke the callbacks from the props when the data is change.

## containers objects
containers objects introduced by Redux, handle the things to be manipulated, read the data through subscribe to the redux state and change the data via the redux dispatcher actions, that can be generated by react redux.


# Todo applicaiton
## Design the React UI components
. TodoList: the list of the todo items, holding the props of todos and  the onTodoclick callback when a Todo item was clicked.
. Todo: is the todo item:
  . text: the todo text
  . completted: boolean varables to describe the task stats
  . onClick() is a callback to invoke when the click event occurs

  ## container components
  TODO : add the container descriptions.
.
