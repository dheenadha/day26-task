import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Card from './components/Card'
import { DsData } from './utils/DsData'
import { CsData } from './utils/CsData'
import { FsdData } from './utils/FsdData'
import NavBar from './components/NavBar'

function App() {
  const [list,setlist] = useState([...FsdData,...DsData,...CsData])
  const [fsdlist,setfsdlist] = useState(FsdData)
  const [dslist,setdsList] = useState(DsData)
  const [cslist,setcsList] = useState(CsData)

  return (
    <>
        <NavBar/>
        <Routes>
          <Route path='/course' element={<h3 className='text-success m-3'>Explore courses!!!</h3>}/>
            <Route path='/' element={<div className='container d-flex flex-wrap justify-content-evenly'>
          {list.map((e)=><Card {...e}/>)}
        </div>} />
            <Route path='/fsd' element={<div className='container d-flex flex-wrap justify-content-evenly'>
          {fsdlist.map((e)=><Card {...e}/>)}
        </div>} />
            <Route path='/ds' element={<div className='container d-flex flex-wrap justify-content-evenly'>
          {dslist.map((e)=><Card {...e}/>)}
        </div>} />
            <Route path='/cs' element={<div className='container d-flex flex-wrap justify-content-evenly'>
          {cslist.map((e)=><Card {...e}/>)}
        </div>} />
            <Route path='/career' element={<h5 className='text-success m-3'>No Requirement...For updates,check back later.</h5>} />
            <Route path='*' element={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfecIaqRHqGZitYcX7NJ8LZlpHUXaee4n6hjnZVcIBLqYEhBRkTVyT4pv5yGvKhqIX2JY&usqp=CAU'className='rounded mx-auto d-block m-2' style={{width:"50%"}}  alt="Page not found"/>} />
        </Routes>
        
        

    </>
  )
}

export default App
