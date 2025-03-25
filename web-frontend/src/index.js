import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App' //import App.js
import 'bootstrap/dist/css/bootstrap.min.css'

// render the entire app from the root variable i.e. the render method
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
