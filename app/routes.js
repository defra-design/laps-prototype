//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Sign in
router.post("/laps/sign-in",  function(request, response) {
  response.redirect(301, "/laps/account-home-blk")
});

// account home blank
router.post("/laps/account-home-blk",  function(request, response) {
  response.redirect(301, "/laps/upload")
});

// upload
router.post("/laps/upload",  function(request, response) {
  response.redirect(301, "/laps/success")
});

// change name
router.post("/laps/barnsley-cd",  function(request, response) {
  response.redirect(301, "/laps/barnsley-bcs")
});

// change name
router.post("/laps/barnsley-bcs",  function(request, response) {
  response.redirect(301, "/laps/barnsley-bcs")
});