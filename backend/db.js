const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "newdatabase"
});

con.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})

module.exports = con;