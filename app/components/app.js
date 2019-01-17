// require('marko/node-require').install()
const template = require('./index.marko')

template.render().appendTo(document.body)
