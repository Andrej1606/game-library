import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import EditPage from './pages/EditPage';
import AddPage from './pages/AddPage';

import classes from './styles/App.module.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/game/edit/:id" element={<EditPage />} />
        <Route path="/game/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
