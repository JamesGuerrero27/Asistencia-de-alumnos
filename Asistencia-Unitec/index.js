
var express = require('express');
var sql = require('mssql');
var cors = require('cors');
var bodyparser = require('body-parser');
var env = require('dotenv');


var app = express();


const result = env.config();

app.use(cors());
app.use(bodyparser());

const sqlconfig={
    server: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT),
}

app.use(function(err, req, res, next){
    console.log(err);
    res.send({success: false, message: err});
});

// Escucho el puerto para levantar el servidor
app.listen(parseInt(process.env.APP_PORT), () => {
    console.log("Esta corriendo el servidor!!!")
    console.log(result.parsed);
    console.log(sqlconfig);
});

app.get('/app/view/student', (req, res, next) =>{

    sql.connect(sqlconfig).then(() => {
        return sql.query(`select * from Assistance.dbo.Teacher`);
    }).then(result => {
        var data = {
            seccess: true,
            message: '',
            data: result.recordset,
        }
        res.send(data);
        // cerrare la conexion.
        sql.close();
    }).catch(err => {
        return next(err);
    });
});
