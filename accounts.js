const express = require('express');
const router = express.Router();


router.get('/login', (req,res) => {
    return res.status(200).json({
        message: 'Hello from login route'
    })
})

router.get('/register', (req,res) => {

})


module.exports = router;