import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { PageListUsers } from './pages/PageListUsers'

export const MainRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lista-usuarios" element={<PageListUsers />} />
            </Routes>
        </BrowserRouter>
    )
}