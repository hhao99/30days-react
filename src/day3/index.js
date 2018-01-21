import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './component/app'
import reducer from './reducers'

const store= createStore(reducer)

const Day3 = () => {
  return (
    <div>
      <h1> Day3: Todo App</h1>
        <Provider store={store}>
          <App />
        </Provider>
    </div>

    )
}

export default Day3
