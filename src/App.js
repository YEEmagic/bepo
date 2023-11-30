import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './route/Home';
import Detail from './route/Detail';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/movie/:id' element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}


export default App;
