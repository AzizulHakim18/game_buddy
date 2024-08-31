
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import { useEffect, useState } from 'react'
import { ThemeContext } from './Context/ThemeContext'
import SpacemanCanvas from './Components/SpaceMan/SpaceMan'
import Cylinder3d from './Components/Cylinder3d/Cylinder3d'
import Heading from './Pages/Heading/Heading'

function App() {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
  }, [])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='w-full mx-auto'>
        <div className={`${theme} ${theme == 'dark' ? 'bg-[#121212]' : null}  `}>
          <Header></Header>
          <Cylinder3d></Cylinder3d>
          <Home></Home>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
