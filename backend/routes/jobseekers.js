const express = require('express')
const router = express.Router()

router.get('/seekers',()=>{
    res.send('job seeker dashboard')
})

module.exports = router