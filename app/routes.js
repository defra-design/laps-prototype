//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit")
const router = govukPrototypeKit.requests.setupRouter()
// Add your routes here


// << PRIVATE BETA >> 

// CEO Register for a LAPS Account // Beta
// CEO Register // Set up
router.post("/laps/account/set-up",  function(request, response) {
  response.redirect(301, "/laps/account/email")
});

// CEO Register // Email
router.post("/laps/account/email",  function(request, response) {
  response.redirect(301, "/laps/account/id-verification-ceo")
});

// CEO Register // Check your email
// HTTP link on the page

// CEO Register // Create password
router.post("/laps/account/create-password",  function(request, response) {
  response.redirect(301, "/laps/account/terms-and-conditions")
});

// CEO Register // Terms and conditions
router.post("/laps/account/terms-and-conditions",  function(request, response) {
  response.redirect(301, "/laps/account/check-your-details")
});

// CEO Register // Check your details
router.post("/laps/account/check-your-details", function (req, res) {
  req.session.check_details = req.body.check_details ;
  console.log(req.body);

  if (req.session.check_details === "Yes") {
    res.redirect(301, "/laps/account/responsibility");
  }

  else {
    res.redirect(301, "/laps/account/incorrect-details");
  }
});
 
// CEO Register // Choose 1 or 2 colleagues to manage [authority]"s pEPR payments and data

router.post("/laps/account/responsibility",  function(request, response) {
  response.redirect(301, "/laps/account/role-details")
});

// CEO Register // Enter colleagues 1"s details
router.post("/laps/account/role-details",  function(request, response) {
  response.redirect(301, "/laps/account/role-details-2")
});

// CEO Register // Do you want to add anyone else?
router.post("/laps/account/add-another", function (req, res) {
  req.session.upload_another = req.body.upload_another;
  console.log(req.body);
 
  if (req.session.upload_another === "Yes") {
    res.redirect(301, "/laps/account/role-details-2");
    }
  
    else {
     res.redirect(301, "/laps/account/check-details");
     }
  });

// CEO Register // Enter colleague 2"s details
router.post("/laps/account/role-details-2",  function(request, response) {
  response.redirect(301, "/laps/account/check-details")
});

// CEO Register // Check details
router.post("/laps/account/check-details",  function(request, response) {
  response.redirect(301, "/laps/account/success")
});

 // CEO Register // Success page
 router.post("/laps/account/success",  function(request, response) {
  response.redirect(301, "/laps/account/account-home-ceo")
});

// <<<< END >>>> // CEO register // 

// CEO registered with LAPs ////                            

// CEO registered // Set up -- new to sign in
router.post("/laps/account/set-up-acc-ceo",  function(request, response) {
  response.redirect(301, "/laps/account/signin")
});
   
// CEO registered // Signin
router.post("/laps/account/signin",  function(request, response) {
  response.redirect(301, "/laps/account/id-verification")
});

// CEO already registered // Registering another LA taken to Signin
router.post("/laps/account/signin-registered",  function(request, response) {
  response.redirect(301, "/laps/account/id-verification-ceo")
});

// CEO registered // forgotten password
router.post("/laps/account/forgotten-password",  function(request, response) {
  response.redirect(301, "/laps/account/id-verification")
});

// CEO registered // forgotten password
//router.post("/laps/account/forgotten-password",  function(request, response) {
//  response.redirect(301, "/laps/account/email-account-password-reset")
// });

// CEO registered // Check your email
// HTTP link on the page



// CEO registered // MULTI LAs
router.post("/laps/account/multi-la",  function(request, response) {
  response.redirect(301, "/laps/account/account-home-ceo")
});

// CEO registered // change LAs
router.post("/laps/account/change-la",  function(request, response) {
  response.redirect(301, "/laps/account/account-home-ceo")
});


// CEO registered // CEO change user details 
router.post("/laps/account/role-details-change",  function(request, response) {
  response.redirect(301, "/laps/account/manage-account-ceo")
});

// CEO registered // CEO Remove user
router.post("/laps/account/remove",  function(request, response) {
  response.redirect(301, "/laps/account/manage-account-ceo-a")
});

// CEO registered // CEO add user
router.post("/laps/account/manage-account-ceo-a",  function(request, response) {
  response.redirect(301, "/laps/account/responsibility-2-ceo")
});

// CEO registered // CEO add user responsibility
router.post("/laps/account/responsibility-2-ceo",  function(request, response) {
  response.redirect(301, "/laps/account/manage-account-ceo")
});

// CEO registered // CEO add user details
router.post("/laps/account/role-details-2-ceo",  function(request, response) {
  response.redirect(301, "/laps/account/manage-account-ceo-a")
});

// <<<< END >>>> // CEO registered ////

// Invited user ////   

// Invited user // Check your email
// HTTP link on the page

// Invited user // Create a password
router.post("/laps/account/create-password-admin",  function(request, response) {
  response.redirect(301, "/laps/account/terms-and-conditions-admin")
});

// Invited user // Terms and conditions
router.post("/laps/account/terms-and-conditions-admin",  function(request, response) {
  response.redirect(301, "/laps/account/success-admin")
});

// Invited user  // Success
// HTTP link on the page

// <<<< END >>>> // Invited user ////



// DEFRA ACCOUNT SUPPORT ADMIN PORTAL ////

// DEFRA ACCOUNT SUPPORT ADMIN PORTAL // Sign in
router.post("/laps/admin/sign-in",  function(request, response) {
  response.redirect(301, "/laps/admin/account-home-blk")
});

// DEFRA ACCOUNT SUPPORT ADMIN PORTAL // account home blank
router.post("/laps/admin/account-home-blk",  function(request, response) {
  response.redirect(301, "/laps/admin/upload")
});

// DEFRA ACCOUNT SUPPORT ADMIN PORTAL // upload
router.post("/laps/admin/upload",  function(request, response) {
response.redirect(301, "/laps/admin/checked")
});

// DEFRA ACCOUNT SUPPORT ADMIN PORTAL // Add another
router.post("/laps/admin/checked", function (req, res) {
  req.session.upload_file = req.body.upload_file;
  console.log(req.body);

  if (req.session.upload_file === "Yes") {
    res.redirect(301, "/laps/admin/account-home");
  }

  else {
    res.redirect(301, "/laps/admin/upload");
  }
});

// DEFRA ACCOUNT SUPPORT ADMIN PORTAL // Remove
router.post("/laps/admin/remove-barnsley", function (req, res) {
  req.session.remove_ceo = req.body.remove_ceo;
  console.log(req.body);

  if (req.session.remove_ceo === "single") {
    res.redirect(301, "/laps/admin/account-home-barnsley-removed");
  }

  else {
    res.redirect(301, "/laps/admin/account-home-barnsley-removed");
  }
});

// DEFRA ACCOUNT SUPPORT ADMIN PORTAL // Pause - Do you want to ...
router.post("/laps/admin/checked",  function(request, response) {
  response.redirect(301, "/laps/admin/success")
  });
  

// DEFRA ACCOUNT SUPPORT ADMIN PORTAL /// change name
router.post("/laps/admin/barnsley-cd",  function(request, response) {
  response.redirect(301, "/laps/admin/barnsley-bcs")
});

// DEFRA ACCOUNT SUPPORT ADMIN PORTAL // change name
router.post("/laps/admin/barnsley-bcs",  function(request, response) {
  response.redirect(301, "/laps/admin/barnsley-bcs")
});


// <<<< END >>>> // DEFRA ACCOUNT SUPPORT ADMIN PORTAL ////

// << PRIVATE  BETA  1.1 >> 

// CEO registered // Set up -- new to sign in
router.post("/laps/account-1-1/set-up-acc-ceo",  function(request, response) {
  response.redirect(301, "/laps/account-1-1/signin")
});

// CEO registered // Signin
router.post("/laps/account-1-1/signin",  function(request, response) {
  response.redirect(301, "/laps/account-1-1/id-verification")
});

// CEO registered // MULTI LAs
router.post("/laps/account-1-1/multi-la",  function(request, response) {
  response.redirect(301, "/laps/account-1-1/account-home-ceo")
});

// CEO registered // change LAs
router.post("/laps/account-1-1/change-la",  function(request, response) {
  response.redirect(301, "/laps/account-1-1/account-home-ceo")
});

// CEO registered // CEO add user details
router.post("/laps/account-1-1/role-details-2-ceo",  function(request, response) {
  response.redirect(301, "/laps/account-1-1/manage-account-ceo-a")
});

// Delegate registered // MULTI LAs
router.post("/laps/account-1-1/multi-la-admin",  function(request, response) {
  response.redirect(301, "/laps/account-1-1/account-home-admin")
});

router.post("/laps/account-1-1/set-up-acc-admin",  function(request, response) {
  response.redirect(301, "/laps/account-1-1/signin")
});

// *****************************
// *****************************
// *****************************
// *****************************
// *****************************
// *****************************
// *****************************
// Account creation (enrollment)
// *****************************


// Routing for Page
router.post('*/registered-charity-question', function (req, res) {
  var registeredCharity = req.session.data['registered-charity']
  
  if (registeredCharity == "Yes"){
      res.redirect('../not-affected/charity')
  }
  else if (registeredCharity == "No"){
      res.redirect('registered-with-companies-house')
  }
})

// Routing for Page
router.post('*/registered-with-companies-house', function (req, res) {
  var registeredCH = req.session.data['registered-companies-house']
  
  if (registeredCH == "Yes"){
      res.redirect('../companies-house/about-your-organisation/companies-house-number')
  }
  else if (registeredCH == "No"){
      res.redirect('../non-companies-house/about-your-business/type-of-organisation')
  }
})


// Routing for Page
router.post('*/uk-nation-ch', function (req, res) {
  var userGroup = req.session.data['user-group']
  
  if (userGroup == "compliance-scheme") {
      res.redirect('../about-you/role-in-organisation')
  }
  else {
      res.redirect('../about-you/role-in-organisation?uk-nation-question=yes')
  }
})

// Routing for Page
router.post('*/authorised-person', function (req, res) {
  var authorisedPerson = req.session.data['form-role-in-organisation']
  
  if (authorisedPerson == "none-of-the-above") {
      res.redirect('../authorised-details-on-behalf/consent-from-authorised-person')
  }
  else {
      res.redirect('full-name')
  }
})


// *****************************
// Routing for compliance scheme
// *****************************

router.post('*/compliance-scheme-or-not', function (req, res) {
    
  var complianceScheme = req.session.data['compliance-scheme']
  
  if (complianceScheme == "yes"){
      res.redirect('selected-yes')
  }
  else if (complianceScheme == "no") {
      res.redirect('../confirm-declaration/check-your-answers')
  }
})




module.exports = router