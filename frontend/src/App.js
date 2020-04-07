import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'

// Componente --> Função que retorna alguma coisa - Bloco isolado de HTML, CSS, e JS que não interfere no restante da aplicação
// Propiedade --> Propriedades da função - O mesmo que os atributos do HTML - Informações que um componente PAI passa ao componente FILHO
// Estado     --> Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input type="text" name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>

      </main>
    </div>
  );
}

export default App;
