import React from "react";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// Componentes
import User from "./components/User";
import Links from "./components/Links";
import Materia from "./components/Materia";
// Paginas
import Inicio from "./paginas/Inicio";
import Liniales from "./paginas/Liniales";
import Alternativos from "./paginas/Alternativos";
import Repeticion from "./paginas/Repeticion";
import Otros from "./paginas/Otros";

// Css
import "./App.css";

import llama from "./assets/img/llama.svg";

function App() {
  return (
    <Router>
      <img src={llama} className="img-llama" alt="" />
      <main>
        <section className="glass">
          <div className="dashboard">
            <User />
            <Links />
            <Materia />
          </div>

          <div className="ejer">
            <div className="status">
              <h1>JS-EJERCICIOS</h1>
            </div>

            <div className="cards">
              <Routes>
                <Route path={"/inicio"} element={<Inicio />} />
                <Route path={"/liniales"} element={<Liniales />} />
                <Route path={"/alternativos"} element={<Alternativos />} />
                <Route path={"/repeticion"} element={<Repeticion />} />
                <Route path={"/otros"} element={<Otros />} />
                
              </Routes>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </Router>
  );
}

export default App;
