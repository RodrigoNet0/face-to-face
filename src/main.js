import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'
import { $ } from './select';
import { counter } from './components/counter/index';
import { logo } from './components/logo/index';
const app = $('#app');

app.innerHTML = `
  <div>
   
    
    ${logo("https://vitejs.dev", viteLogo, "Vite logo")}
    ${logo("https://www.typescriptlang.org/", typescriptLogo, "Typescript logo")}
    <h1>Vite + TypeScript</h1>
    ${counter()}
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
const button = $('#counter')
setupCounter(button);



