import {render, hydrate} from 'react-dom'
import App from './App'
import {initI18nContext} from './i18n'
initI18nContext()

let renderMethod = module.hot?render:hydrate

renderMethod(<App/>, document.getElementById('root'))