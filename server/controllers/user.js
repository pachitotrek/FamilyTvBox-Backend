'use strict'

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Mysql = require('./mysql');
const {EmailController}=require('../controllers/email');
var mysql = require('mysql');
const generator = require('generate-password');
const host = require('../config/config').host;
const user = require('../config/config').user;
const password = require('../config/config').password;
const database = require('../config/config').database;


const ControllerUsuario = {

    add_user: function (req, res) {
        let body = req.body;

        let pass = bcrypt.hashSync(body.password, 10);

        let query = `INSERT INTO users (name, surname ,email ,telefono ,password) VALUES ('${body.name}','${body.surname}','${body.email}','${body.telefono}','${pass}')`;

        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    login: function (req, res) {

        let body = req.body;       
        let query = `SELECT id,name,surname,email,telefono,password,direccion,direccion2,pais,ciudad,zip,telefono2,fecha FROM users WHERE email ='${body.email}'`;

        var cnn = mysql.createConnection({
            host     : host,    
            user     : user,
            password : password,
            database : database
        });
        cnn.query(query, function (error, results, fields) {
            if (error) throw error;

            if (results[0] == null) {
                return res.status(400).json({
                    ok: false,
                    message: 'Credenciales incorrectas'
                });

            } else {
                let email = results[0].email;              

                if (!bcrypt.compareSync(body.password, results[0].password)) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: 'Error Contraseña incorrecta mamita rica'
                        }
                    });
                }

                let token = jwt.sign({
                    email: email,
                    name: results[0].name,
                    surname: results[0].surname
                }
                    , process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
                
         
                return res.status(200).json({
                    ok: true,
                    email: email,
                    name: results[0].name,
                    surname: results[0].surname,
                    telefono: results[0].telefono,
                    fecha:results[0].fecha,
                    direccion:results[0].direccion,
                    direccion2:results[0].direccion2,
                    pais:results[0].pais,
                    ciudad:results[0].ciudad,
                    telefono2:results[0].telefono2,
                    zip:results[0].zip,
                    id:results[0].id, 
                    token
                });

            }


        });

        cnn.end((err) => {
            if (err) {
                console.log(err);
            }
        });
    },
    checkEmail:function(req,res){
        let email = req.params.email;       
        let query = `SELECT email FROM users WHERE email='${email}'`;

        var cnn = mysql.createConnection({
            host     : host,    
            user     : user,
            password : password,
            database : database
        });

        cnn.query(query, function (error, results, fields) {
            if (error) throw error;

            if (results[0] == null) {
                return res.status(200).json({  
                    email:false                                
                });
            } else {
                return res.status(200).json({
                   email:true

                });

            }

        });

        cnn.end((err) => {
            if (err) {
                console.log(err);
            }
        });





    },
    UpdateUser:function(req,res){
        const body = req.body;

        let query = `UPDATE users SET name='${body.name}',surname='${body.surname}',email='${body.email}',telefono='${body.telefono}',
        direccion='${body.direccion}',direccion2='${body.direccion2}',pais='${body.pais}',ciudad='${body.ciudad}',zip='${body.zip}',
        telefono2='${body.telefono2}' WHERE id='${body.id}'`;

        Mysql.BaseDatosController.EjecutarQuery(query, res, false);

    },
    password_recovery:function(req,res){
        const body = req.body;      

        let query = `SELECT id,email FROM users WHERE email='${body.email}'`;

        var cnn = mysql.createConnection({
            host     : host,    
            user     : user,
            password : password,
            database : database
        });
        cnn.query(query, function (error, results, fields) {
            if (error) throw error;
           
            if (results[0] == null) {
                return res.status(400).json({
                    ok: false,
                    message: 'No existe ese Usuario'
                });
            } else {
                let email = results[0].email;
                let id = results[0].id;             
                
                ControllerUsuario.generarPass(email,id,res);
            }
        });
        cnn.end((err) => {
            if (err) {
                console.log(err);
            }
        });
    },
    generarPass:function(email,id,res){
     
        const newpassword = generator.generate({
            length: 10,
            numbers: true
            });    
        
        const newEncryptPassword = bcrypt.hashSync(newpassword, 10);  

        var cnn = mysql.createConnection({
            host     : host,    
            user     : user,
            password : password,
            database : database
        });

        let query=`UPDATE users SET password='${newEncryptPassword}' WHERE id='${id}'`;


        cnn.query(query, function (error, results, fields) {
            if (error) throw error;       
            if (results == null) {
                return res.status(400).json({
                    ok: false,
                    message: 'No existe ese Usuario'
                });
            } else {

            EmailController.sendPass(email,newpassword,res);
              
            }
        });
        cnn.end((err) => {
            if (err) {
                console.log(err);
            }
        });      
        
    },
    updatePass:function(req,res){
        const body = req.body;     

        const newEncryptPassword = bcrypt.hashSync(body.pass, 10);  

        let query = `UPDATE users SET password='${newEncryptPassword}' WHERE id='${body.id}'`;

        Mysql.BaseDatosController.EjecutarQuery(query, res, false);

    },




}

module.exports.ControllerUsuario = ControllerUsuario;