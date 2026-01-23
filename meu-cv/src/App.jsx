// src/App.jsx
import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import EveryScoreboard from './projectPages/everyscoreboard'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 antialiased selection:bg-cyan-300 selection:text-cyan-900">
       <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
       
       <Router>
         <Routes>
           {/* Rota Principal (Seu Portfólio) */}
           <Route path="/" element={<Home />} />
           
           {/* Nova Rota (Every Scoreboard) */}
           <Route path="/every-scoreboard" element={<EveryScoreboard />} />
         </Routes>
       </Router>
    </div>
  )
}

export default App