
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/Dashboard';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
