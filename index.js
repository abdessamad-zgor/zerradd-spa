import {render, hydrate} from 'react-dom'
import App from './App'
import './i18n'

let renderMethod = module.hot?render:hydrate

renderMethod(<App/>, document.getElementById('root'))