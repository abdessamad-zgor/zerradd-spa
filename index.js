import {render, hydrate} from 'react-dom'
import App from './App'

let renderMethod = module.hot?render:hydrate

renderMethod(<App/>, document.getElementById('root'))