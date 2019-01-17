require('marko/node-require').install()
const template = require('./index.marko')
// var template = require('marko').load(require.resolve('./index.marko'));

template.renderSync({
	name:'Markotron'
}).appendTo(document.getElementById('app'))
