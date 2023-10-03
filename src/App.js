import React from "react";

import Topo from './componentes/Topo/index.js'
import Conteudo from "./componentes/Conteudo/index.js";
import Rodape from "./componentes/Rodape/index.js";

import './App.css'
import './componentes/Topo/estilo.css'

function App() {
  return (
    <div>
      <Topo />
      <Conteudo />
      <Rodape />      
    </div>
  );
}

export default App;
