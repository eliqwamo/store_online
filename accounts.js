import express from 'express';
import tom from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();

let instruments = [];
let students = [];

router.post('/login', (req,res) => {

    const fn = req.body.name;
    const ln = req.body.lastname;

    //const {name,lastname} = req.body;

    return res.status(200).json({
        message: `Hello ${fn} ${ln}`
    })
})


router.post('/register', async(req,res) => {
    const {fname, lname,email,password} = req.body;
    const isStudent = students.filter(x => x.email == email);
    if(isStudent > 0){
        return res.status(200).json({
            //NO
        });
    } else {

        const hash = await tom.hash(password, 10);

        const student = {
            name: fname + ' ' + lname,
            email: email,
            password: hash
        }
        students.push(student);
        return res.status(200).json({
            students: students
        });
    }

    

})

router.post('/addInstrument', async(req,res) => {
    const instrument = req.body.instrument;
    instruments.push(instrument);
    return res.status(200).json({
        instruments: instruments
    });
})

//module.exports = router;
export default router;