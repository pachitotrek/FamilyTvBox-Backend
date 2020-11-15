'use strict'
const Mysql = require('./mysql');
const host = require('../config/config').host;
const user = require('../config/config').user;
const password = require('../config/config').password;
const database = require('../config/config').database;
const crypto = require('crypto');
const mysql = require('mysql');



const ControllerPayu = {

    pagos: function (req, res) {
        let body = req.body;

        let state_pol = body.state_pol;
        let reference_sale = body.reference_sale;

        var cnn = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });

        let query = `INSERT INTO pagospayu(state_pol,response_code_pol,reference_sale,sign,payment_method_type, 
            value,tax,transaction_date,currency,email_buyer,test,date,ip,payment_method_id,response_message_pol,payment_method_name) 
            VALUES ('${body.state_pol}','${body.response_code_pol}','${body.reference_sale}','${body.sign}','${body.payment_method_type}',
            '${body.value}','${body.tax}','${body.transaction_date}','${body.currency}',
            '${body.email_buyer}','${body.test}','${body.date}','${body.ip}','${body.payment_method_id}','${body.response_message_pol}',
            '${body.payment_method_name}')`;




        cnn.query(query, function (error, results, fields) {
            if (error) {
                res.status(401).json({
                    ok: false,
                    error: error.code
                })
            } else {
                let id_payu = results.insertId;

                ControllerPayu.VerificarCompras(req, res, id_payu, state_pol, reference_sale);
            }

        });
        cnn.end((err) => {
            if (err) {
                console.log(err);
            }
        });


    },


    crearOrden: function (req, res) {

        var cnn = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });

        let body = req.body;

        let email_usuario = body.email_usuario;
        let amount = body.amount;


        let query = `INSERT INTO ordenes(email_usuario,amount,status,cupon,id_usuario) VALUES ('${email_usuario}','${amount}','0','${body.cupon}','${body.id_usuario}')`;


        cnn.query(query, function (error, results, fields) {
            if (error) {
                res.status(401).json({
                    ok: false,
                    error: error.code
                })
            } else {
                let id_orden = results.insertId;
                ControllerPayu.productosOrdenes(req, res, id_orden);
            }

        });
        cnn.end((err) => {
            if (err) {
                console.log(err);
            }
        });
    },
    productosOrdenes: function (req, res, id_orden) {

        var cnn = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });

        let body = req.body;
        let email_usuario = body.email_usuario;
        let productos = body.productos;
        let id_asociado=body.id_asociado;
        let amount = body.amount;
        let date = new Date();        
        let state=0; 


        let values = productos.reduce((o, a) => {
            let ini = [];
            ini.push(email_usuario);
            ini.push(a.id);
            ini.push(a.id_asociado);
            ini.push(a.cantidad);
            ini.push(id_orden);
            ini.push(state);
            ini.push(date);
            ini.push(date);
            o.push(ini);
            return o
        }, []);

        var sql = "INSERT INTO productos_ordenes (email_usuario,id_producto,id_asociado,cantidad,id_orden,state,date_now,date_end) VALUES ?";

        cnn.query(sql, [values], function (err, results) { //pass values array (from above)  directly here
            if (err) {
                res.status(401).json({
                    ok: false,
                    error: err.code
                });
            } else {

                ControllerPayu.ProcesoPago(req, res, id_orden);
            }

        });

        cnn.end((err) => {
            if (err) {
                console.log(err);
            }
        });

    },
    ProcesoPago: function (req, res, id_orden) {

        let body = req.body;
        let email_usuario = body.email_usuario;
        let amount = body.amount;

        let currency = "COP";
        let referenceCode = `CompraNo=${id_orden}`;

        let description = `Compra por parte de ${email_usuario}`;

        let hascode = `${ApiKey}~${merchantId}~${referenceCode}~${amount}~${currency}`;

        let signature = crypto.createHash('md5').update(hascode).digest('hex');

        return res.status(200).json({
            ok: true,
            ApiKey: ApiKey,
            merchantId: merchantId,
            accountId: accountId,
            responseUrl: responseUrl,
            confirmationUrl: confirmationUrl,
            referenceCode: referenceCode,
            signature: signature,
            currency: currency,
            amount: amount,
            description: description
        });

    },
    VerificarCompras: function (req, res, id_payu, state_pol, reference_sale) {
        let CodigoOrden = reference_sale.split('=');

        let idOrden = CodigoOrden[1];
        let status = state_pol;
        let idPayu = id_payu;
        let query = `UPDATE ordenes SET status='${status}',id_payu='${idPayu}' WHERE id='${idOrden}'`;

        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    getCompras: function (req, res) {

        const id = req.params.id;  

        let query = `SELECT * FROM productos INNER JOIN productos_ordenes ON productos.id=productos_ordenes.id_producto 
        INNER JOIN ordenes ON ordenes.id=productos_ordenes.id_orden WHERE ordenes.id='${id}' AND ordenes.status= 4`;      

        Mysql.BaseDatosController.EjecutarQuery(query, res, true);

    },
    getOrdenes:function(req,res){

        const id = req.params.id;   

        let query= `SELECT * FROM ordenes WHERE id_usuario='${id}' `;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);

    },
    getAlquileres: function (req, res) {

        const id = req.params.id; 
        const categoria= req.params.categoria; 

        Mysql.BaseDatosController.alquileres(id);

        let query = ` SELECT productos.id AS id_producto,productos.categoria,productos.name,productos.descripcion,productos.url,productos.tipo,productos.imagen,users.id AS usuario_id FROM ordenes INNER JOIN productos_ordenes ON ordenes.id = productos_ordenes.id_orden INNER JOIN productos ON productos_ordenes.id_producto= productos.id INNER JOIN users ON productos_ordenes.email_usuario = users.email WHERE ordenes.status = 4 AND users.id='${id}' AND productos.tipo=1 AND productos.categoria='${categoria}' `;      

        Mysql.BaseDatosController.EjecutarQuery(query, res, true);

    },
    getAlquileresSeries: function (req, res) {

        const id = req.params.id; 
        const categoria= req.params.categoria; 

        let query = `SELECT productos.categoria,productos.name,productos.descripcion,productos.tipo,productos.imagen,users.id AS usuario_id,series.id,series.name AS capitulo,series.descripcion AS descripcionC,series.servidor,series.url FROM ordenes INNER JOIN productos_ordenes ON ordenes.id = productos_ordenes.id_orden INNER JOIN series ON productos_ordenes.id_asociado = series.id INNER JOIN productos ON productos_ordenes.id_producto = productos.id INNER JOIN users ON productos_ordenes.email_usuario = users.email WHERE ordenes.status = 4 AND users.id='${id}' AND productos.tipo=3 AND productos.categoria='${categoria}'`;
    
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);

    },

    test:function(req,res){
        let date = new Date();
        return res.status(200).json({
            date
        });
    }

 






}

module.exports.ControllerPayu = ControllerPayu;