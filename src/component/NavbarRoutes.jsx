import React from 'react'
import {Route, Routes} from "react-router-dom"
import Hero from '../pages/Hero'
import Design from '../pages/Design'
import Pictures from '../pages/Pictures'
import Project from '../pages/Project'
import Writing from '../pages/Writing'

const NavbarRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Hero/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/design' element={<Design/>}/>
        <Route path='/pictures' element={<Pictures/>}/>
        <Route path='/writting' element={<Writing/>}/>
    </Routes>
    </>
  )
}

export default NavbarRoutes