const express = require('express')
const router = express.Router()

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











// Routing for end to end testing
// router.post('*/complete-account-creation', function (req, res) {
//     var userGroup = req.session.data['user-group']
    
//     if (userGroup == "compliance-scheme") {
//         res.redirect('../../../../landing-page/cs-submit-behalf-lp-england?account-created-notification=true')
//     }
//     else if (userGroup == "producer") {
//         res.redirect('../../../../landing-page/large-producer?account-created-notification=true')
//     }
//     else {
//         res.redirect('../../../../landing-page/large-producer?account-created-notification=true')
//     }
// })

// Routing for end to end testing
// router.post('*/signing-in', function (req, res) {
//     var userGroup = req.session.data['user-group']
    
//     if (userGroup == "compliance-scheme") {
//         res.redirect('../../../../landing-page/cs-submit-behalf-lp-england')
//     }
//     else if (userGroup == "producer") {
//         res.redirect('../../../../landing-page/large-producer')
//     }
//     else {
//         res.redirect('../../../../landing-page/large-producer')
//     }
// })




module.exports = router