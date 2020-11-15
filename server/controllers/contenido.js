'use strict'
const Mysql = require('./mysql');
const fileUpload = require('./ServicioUpload');
const ServicioUpload = require('./ServicioUpload');

const MultimediaController = {

    agregarestacion: function (req, res, filename) {

        var body = req.body;

        let query = `INSERT INTO multimedia (name, url, tipo,idioma,genero) VALUES ('${body.name}','${body.url}','${body.tipo}','${body.idioma}','${body.genero}')`;

        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    editarestacion: function (req, res) {

        const body = req.body;      

        let query = `UPDATE multimedia SET name ='${body.name}',url='${body.url}',tipo='${body.tipo}',genero='${body.genero}'  WHERE id='${body.id}' `;

        Mysql.BaseDatosController.EjecutarQuery(query, res, false);

    },
    eliminarestacion: function (req, res) {

        const body = req.body;
        let id = body.id;

        let query = `DELETE FROM multimedia WHERE id ='${id}'`;

        Mysql.BaseDatosController.EjecutarQuery(query, res, false);

    },
    getestacion: function (req, res) {
        const body = req.query;

        if (body.tipo === undefined) {
            let query = `SELECT * FROM multimedia`;
            Mysql.BaseDatosController.EjecutarQuery(query, res, true);
        } else {
            let query = `SELECT * FROM multimedia WHERE ${body.tipo} = ${body.valor}`;
            Mysql.BaseDatosController.EjecutarQuery(query, res, true);
        }

    },    
    getCanal: function (req, res) {
        let id = req.params.id;
        let query = `SELECT * FROM multimedia WHERE id='${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    agregaridioma: function (req, res) {
        const body = req.body;
        let query = `INSERT INTO idiomas (idioma) VALUES ('${body.idioma}')`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    GetIdiomas: function (req, res) {
        let query = `SELECT * FROM idiomas`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    eliminarIdioma: function (req, res) {

        const body = req.body;
        let id = body.id;
        let query = `DELETE FROM idiomas WHERE id ='${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    editarIdioma: function (req, res) {
        const body = req.body;
        let query = `UPDATE idiomas SET idioma='${body.idioma}' WHERE id='${body.id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    agregarGenero: function (req, res) {
        const body = req.body;
        let query = `INSERT INTO generos (genero) VALUES ('${body.genero}')`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    GetGenero: function (req, res) {
        let query = `SELECT * FROM generos`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    eliminarGenero: function (req, res) {
        const body = req.body;
        let id = body.id;
        let query = `DELETE FROM generos WHERE id ='${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    editarGenero: function (req, res) {
        const body = req.body;
        let query = `UPDATE generos SET genero='${body.genero}' WHERE id='${body.id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },    
    agregarpublicidad: function (req, res) {

        const body = req.body;

        let query = `INSERT INTO publicidad (name, tipo,publico,state) VALUES ('${body.name}','${body.tipo}','${body.publico}','${body.state}')`;

        Mysql.BaseDatosController.EjecutarQuery(query, res);

    },
    editarpublicidad: function (req, res) {

        const body = req.body;

        let query = `UPDATE publicidad SET name ='${body.name}',tipo='${body.tipo}',publico='${body.publico}',state='${body.state}'  WHERE id='${body.id}' `;
        Mysql.BaseDatosController.EjecutarQuery(query, res);

    },
    eliminarpublicidad: function (req, res) {

        const body = req.body;
        let id = body.id;
        let query = `DELETE FROM publicidad WHERE id ='${id}'`;

        Mysql.BaseDatosController.EjecutarQuery(query, res);

    },
    getpublicidad: function (req, res) {
        const body = req.query;

        if (body.tipo === undefined) {
            let query = `SELECT * FROM publicidad`;
            Mysql.BaseDatosController.EjecutarQuery(query, res, true);
        } else {
            let query = `SELECT * FROM publicidad WHERE ${body.tipo} = ${body.valor}`;
            Mysql.BaseDatosController.EjecutarQuery(query, res, true);
        }
    },
    getBanners: function (req, res) {
        let query = `SELECT * FROM publicidad WHERE tipo = 1 AND state=1`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getVideosPublicidad: function (req, res) {
        let query = `SELECT * FROM publicidad WHERE tipo = 2`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getVideosRadio:function(req,res){
        let query=`SELECT * FROM publicidad WHERE tipo=2 AND state=1 AND publico BETWEEN 0 AND 1`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getVideosTV:function(req,res){
        let query=`SELECT * FROM publicidad WHERE tipo=2 AND state=1 AND publico BETWEEN 1 AND 2`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getEmisoras: function (req, res) {
        const id = req.params.id;
        const gn = req.params.gn;
        var genero="";
        var idioma="";   
        if(id!=0){
          idioma =`AND idioma = ${id}`;  
        }
        if(gn!=0){
           genero=`AND genero = ${gn}`; 
        }
        let query=`SELECT * FROM multimedia WHERE tipo = 1 ${idioma} ${genero} ORDER BY name ASC `;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);

    },
    getCanalesTv: function (req, res) {
        const id = req.params.id;
        const gn = req.params.gn;
        var genero="";
        var idioma="";   
        if(id!=0){
          idioma =`AND idioma = ${id}`;  
        }

        if(gn!=0){
           genero=`AND genero = ${gn}`; 
        }

        let query=`SELECT * FROM multimedia WHERE tipo = 2 ${idioma} ${genero} ORDER BY name ASC `;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);


    }




}

module.exports.MultimediaController = MultimediaController;
