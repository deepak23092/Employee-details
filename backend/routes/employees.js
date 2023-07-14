const con = require("../db")
const express = require("express")
const router = express.Router();
const { body, validationResult } = require('express-validator')

// to get the data from employees table in newdatabase database using get: '/api/employees/getdetails'
router.get("/getdetails", (req, res) => {

    // const numberOfDetails = req.body.numberOfDetails;

    con.query(`SELECT * FROM employees`, (err, result) => {
        if (err) {
            console.log(`Error while getting customer details ${err}`);
        }
        else {
            res.send(result)
        }
    })
})

// to enter the data in employees table in newdatabase database using post: '/api/employees/enterdetails'
router.post('/enterdetails', [
    body('Fname', 'First name cannot be empty').notEmpty(),
    body('Lname', 'Last name cannot be empty').notEmpty(),
    body('Pnum', 'Phone no. should be of 10 chars').isLength(10),
    body('Email', 'Email is not valid').isEmail()
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send({ error: errors.array() })
    }

    else {
        const Fname = req.body.Fname;
        const Lname = req.body.Lname;
        const Dob = req.body.Dob;
        const Pnum = req.body.Pnum;
        const Email = req.body.Email;
        con.query(`INSERT INTO employees (Fname, Lname, Dob, Pnum, Email) VALUES ('${Fname}', '${Lname}', '${Dob}', ${Pnum}, '${Email}')`, (err, result) => {
            if (err) {
                console.log(`Error inserting employee detail into db ${err}`);
            }
            else {
                res.send(result)
            }
        })
    }
})

module.exports = router;