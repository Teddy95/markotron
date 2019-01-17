require('marko/node-require').install()
const template = require('./index.marko')

template.renderSync({
	name:'Markotron'
}).appendTo(document.getElementById('app'))
