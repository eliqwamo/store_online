import express from 'express';
import tom from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();

let instruments = [];
let students = [];

router.post('/login', async(req,res) => {

    const {email,password} = req.body;
    const isStudent = students.find(x => x.email == email);
    if(isStudent){
        const isMatch = await tom.compare(password,isStudent.password);
        if(isMatch){
            return res.status(200).json({
                message: `Hello ${isStudent.name}`
            })
        } else {
            return res.status(200).json({
                message: `Password not match`
            })
        }

    } else {

    }

    
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