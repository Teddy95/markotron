// Import i18next
const i18next = require('i18next')

// Import locales
const locals_enUS = require('../locales/en-US.json')
const locals_deDE = require('../locales/de-DE.json')

// Configure i18next
i18next.init({
	lng: 'en-US',
	resources: {
		'de-DE': { translation: locals_deDE },
		'en-US': { translation: locals_enUS }
	}
})

// Export i18next for use in main process
module.exports = i18next
