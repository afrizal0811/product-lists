import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouteHandler from './RouteHandler'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <RouteHandler />
      </BrowserRouter>
    </div>
  )
}

export default App
