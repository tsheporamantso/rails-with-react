import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Welcome = () => {
  return(
    <div className="container">
      <h1>Welcome to Rails with React Question List</h1>
      <p className="lead"><em>by Tshepo Gladwin Ramantso</em></p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
)

export default Welcome 