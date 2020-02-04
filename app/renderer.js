// Import required modules
const { remote } = require('electron')

// Require stylesheets
import './style/style.scss'

// Require html boilerplate
import './index.html'

// Require marko app
import AppRoot from './view/start'

// Configure i18n
window.i18next = remote.getGlobal('i18next')

// Render & append app to document body
const AppRootRendered = AppRoot.renderSync({}).appendTo(document.body)
