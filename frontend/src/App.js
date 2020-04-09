import React, { useState, useEffect } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

// Componente --> Função que retorna alguma coisa - Bloco isolado de HTML, CSS, e JS que não interfere no restante da aplicação
// Propiedade --> Propriedades da função - O mesmo que os atributos do HTML - Informações que um componente PAI passa ao componente FILHO
// Estado     --> Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } =position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {

      },
      {
        timeout: 30000,
      }
    )
  }, []);

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
              <input 
                type="number"
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49600701?s=460&u=2d0867f70de1ce40d7defb1647fd192c0ca29bc2&v=4" alt="Andrey Gonçalves"/>
              <div className="user-info">
                <strong>Andrey Gonçalves</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Mais um programador neste mundo gigante.</p>
            <a href="https://github.com/zAndreyG">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49600701?s=460&u=2d0867f70de1ce40d7defb1647fd192c0ca29bc2&v=4" alt="Andrey Gonçalves"/>
              <div className="user-info">
                <strong>Andrey Gonçalves</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Mais um programador neste mundo gigante.</p>
            <a href="https://github.com/zAndreyG">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49600701?s=460&u=2d0867f70de1ce40d7defb1647fd192c0ca29bc2&v=4" alt="Andrey Gonçalves"/>
              <div className="user-info">
                <strong>Andrey Gonçalves</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Mais um programador neste mundo gigante.</p>
            <a href="https://github.com/zAndreyG">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
