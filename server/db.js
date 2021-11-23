const mysql = require("mysql")
const db=mysql.createConnection({
    "host":"sql6.freemysqlhosting.net",
    "user":"sql6447767",
    "password":"e2HW3HhcSf",
    "database":"sql6447767"
})

db.connect(function(error){
    if(!!error){
      console.log(error);
    }else{
      console.log('Connected!:)');
    }
  });  
 module.exports = db; 