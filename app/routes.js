//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//
//
// LA Account
//
//


// Set up
router.post("/laps/account/set-up",  function(request, response) {
  response.redirect(301, "/laps/account/email")
});

// Email
router.post("/laps/account/email",  function(request, response) {
  response.redirect(301, "/laps/account/check-your-details")
});

// Check your details
router.post("/laps/account/check-your-details",  function(request, response) {
  response.redirect(301, "/laps/account/create-password")
});

// Create password
router.post("/laps/account/create-password",  function(request, response) {
  response.redirect(301, "/laps/account/responsibility")
});

// Choose who will manage [name]'s EPR account
//
// What is this person's area of responsibility?
 router.post("/laps/account/responsibility", function (req, res) {
  var chooseAnEvent = req.session.data["who_list"];

// Finance role
  if (chooseAnEvent === "finance")  {
    res.redirect("/laps/account/role-details");
  }
// Waste role
  if (chooseAnEvent === "waste") {
    res.redirect("/laps/account/role-details");
  }
// Finance and waste role 
  if (chooseAnEvent === "finance and waste") {
    res.redirect("/laps/account/role-details");
  }
// Cant do this right now
  if (chooseAnEvent === "cannot") {
    res.redirect("/laps/account/success-c");
  }

});



// Add details
router.post("/laps/account/role-details",  function(request, response) {
  response.redirect(301, "/laps/account/add-another")
});

// Add another
  router.post("/laps/account/add-another", function (req, res) {
    req.session.upload_another = req.body.upload_another;
    console.log(req.body);

    if (req.session.upload_another === "Yes") {
      res.redirect(301, "/laps/account/responsibility-2");
    }
 
    else {
      res.redirect(301, "/laps/account/check-details");
    }
  });

// Check details
router.post("/laps/account/check-details",  function(request, response) {
  response.redirect(301, "/laps/account/success")
});

 // Success page
 router.post("/laps/account/success",  function(request, response) {
  response.redirect(301, "/laps/account/account-home")
});

//
//
// 2nd person addeed
//
//

// Choose who will manage [name]'s EPR account
//
// What is this person's area of responsibility?
router.post("/laps/account/responsibility-2", function (req, res) {
  var chooseAnEvent = req.session.data["who_list_2"];

// Finance role
  if (chooseAnEvent === "finance")  {
    res.redirect("/laps/account/role-details-2");
  }
// Waste role
  if (chooseAnEvent === "waste") {
    res.redirect("/laps/account/role-details-2");
  }
// Finance and waste role 
  if (chooseAnEvent === "finance and waste") {
    res.redirect("/laps/account/role-details-2");
  }
// Cant do this right now
  if (chooseAnEvent === "cannot") {
    res.redirect("/laps/account/check-details");
  }

});

// Add details
router.post("/laps/account/role-details-2",  function(request, response) {
  response.redirect(301, "/laps/account/check-details")
});



//
//
//
// ADMIN 
//
//

// Sign in
router.post("/laps/admin/sign-in",  function(request, response) {
  response.redirect(301, "/laps/admin/account-home-blk")
});

// account home blank
router.post("/laps/admin/account-home-blk",  function(request, response) {
  response.redirect(301, "/laps/admin/upload")
});

// upload
router.post("/laps/admin/upload",  function(request, response) {
response.redirect(301, "/laps/admin/success")
});

// change name
router.post("/laps/admin/barnsley-cd",  function(request, response) {
  response.redirect(301, "/laps/admin/barnsley-bcs")
});

// change name
router.post("/laps/admin/barnsley-bcs",  function(request, response) {
  response.redirect(301, "/laps/admin/barnsley-bcs")
});