import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mapLogo from './assets/map.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={mapLogo} className="framework" alt="Map logo" />
          <img src={mapLogo} className="vite" alt="Map logo" />
        </div>

            {/*
            Tento text zustava schovany, aby stranka pusobila jednoduseji.
            Puvodni ukazkovy o   dstavec je tu jen jako poznamka pro dalsi upravy.
            <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
          
          
          */}
        <div>
          <h1>Moje Mapy</h1>  
            
        </div>

  
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Mapy a gastro</h2>
          <p>Nevíte kam na výlet nebo jídlo ? mrkněte sem </p>
          <ul>
            <li>
              <a href="https://mapy.com/s/hotalufofo" target="_blank">
                <img className="logo" src={mapLogo} alt="" />
                Výlety a zajímavá místa
              </a>
            </li>

            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={mapLogo} alt="" />
                Výlety a zajímavá místa
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={mapLogo} alt="" />
                Gastro typy
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Kontakty</h2>
          <p>Navštivte i mé ostatní stránky</p>
          <ul>
            <li>
              <a href="https://github.com/Vojtech-M" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://vojtech-m.github.io" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="https://vojtech-m.github.io"></use>
                </svg>
                Osobní stránka
              </a>
            </li>

 
 
 
          {/*
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            */}
           


          </ul>
        </div>


      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
    {/* Kratky komentar k nadpisu */}
          {/*
            Tento text zustava schovany, aby stranka pusobila jednoduseji.
            Puvodni ukazkovy o   dstavec je tu jen jako poznamka pro dalsi upravy.
          */}