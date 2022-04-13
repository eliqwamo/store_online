import express from 'express';
const router = express.Router();

router.post('/login', (req,res) => {

    //1
    const fn = req.body.name;
    const ln = req.body.lastname;

    //2
    const {name,lastname} = req.body;

    return res.status(200).json({
        message: `Hello ${name} ${lastname}`
    })
})

router.get('/register', (req,res) => {

})

//module.exports = router;
export default router;