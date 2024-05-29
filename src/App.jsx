import React from 'react';

//importando rotas
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//estilização toda contida em app.css
import './App.css';

//importando barra de navegação e página inicial

import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            {/* <Route path="*" element={<div>404 Not Found</div>}></Route> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
