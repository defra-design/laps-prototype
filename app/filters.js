//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('uppercase', function (content) {
  return content.toUpperCase()
})

addFilter('bold', function (content) {
    return '<strong>' + content + '</strong>'
  }, { renderAsHtml: true })