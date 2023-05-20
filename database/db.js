const mysql = require('mysql');



const connection = mysql.createConnection({
    host:'sql9.freemysqlhosting.net',
    user:'sql9619728',
    password:'ylLfHVpLuS',
    port:'3306',
    database:'sql9619728',
});



connection.connect((err)=>{
    if(err){
        console.error("Error al conectar con mysql: "+ err.stack)
        return;
    }
    console.log('Conexion extablecida con MySQL como ID: '+ connection.threadId);
});

module.exports = connection;