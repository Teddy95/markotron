var template = require('./app/components/index.marko');

template.renderSync().appendTo(document.body);
