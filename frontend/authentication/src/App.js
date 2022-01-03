import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
