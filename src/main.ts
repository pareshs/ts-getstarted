import './style.css'
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TypeScript Get Started</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      To learn more about TypeScript  <a href="https://www.typescriptlang.org/" target="_blank">click here.</a>
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
