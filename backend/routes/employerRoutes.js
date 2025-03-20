const express = require('express')
const router = express.Router()

router.get('/dashboard',(res,req)=>{
    res.send('employers dashboard')
})


module.exports = router 