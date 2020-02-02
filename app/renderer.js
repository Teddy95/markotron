// Require stylesheets
import './style/style.scss'

// Require html boilerplate
import './index.html'

// Require marko app
import AppRoot from './view/start'

// Render & append app to document body
const AppRootRendered = AppRoot.renderSync({}).appendTo(document.body)
