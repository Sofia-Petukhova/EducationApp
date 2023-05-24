import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Components/AuthPage/Auth'
import FormNews from './Components/MainLayout/FormNews/FormNews'
import Students from './Components/MainLayout/Students/Students'
import Home from './Components/MainLayout/Home/Home'
import News from './Components/MainLayout/News/News'
import ShedulePage from './Components/MainLayout/ShedulePage/ShedulePage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/EtuFlow/Auth' element={<Auth />} />
          <Route
            path='/EtuFlow/Home'
            element={(<Home />)}
          >
            <Route path='News' element={<News />} />
            <Route path='Create' element={<FormNews />} />
            <Route path='Profile' element={<></>} />
            <Route path='Students' element={<Students />} />
            <Route path='Shedule' element={<ShedulePage />} />
            <Route path='Teachers' element={<></>} />
            <Route path='Marks' element={<></>} />
            <Route path='Attendance' element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
