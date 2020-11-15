'use strict'
const Mysql = require('./mysql');

const serieController = {

    crearcapitulo: function (req, res) {
        const body = req.body;
        let query = `INSERT INTO series(name,descripcion,serie,servidor,url,precio,time,disponible) VALUES ('${body.name}','${body.descripcion}','${body.serie}','${body.servidor}','${body.url}','${body.precio}','${body.time}','${body.disponible}')`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    getCapitulos:function(req,res){
        const id = req.params.id;
        let query = `SELECT * FROM series WHERE serie = '${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getSerie:function(req,res){
        const id = req.params.id;
        let query = `SELECT * FROM series WHERE id = '${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    ActualizarSerie:function(req,res){
        const body=req.body;          
        let query = `UPDATE series SET name='${body.name}',descripcion='${body.descripcion}',serie='${body.serie}',
        servidor='${body.servidor}',url='${body.url}',precio='${body.precio}',time='${body.time}',disponible='${body.disponible}'
        WHERE id='${body.id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getSeries:function(req,res){
        const id = req.params.id;    
        let query = `SELECT * FROM productos WHERE id=${id}`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    editarSerie: function (req, res) {
        const body = req.body;
        let query = `UPDATE productos SET name='${body.name}',descripcion='${body.descripcion}',precio='${body.precio}',url='${body.url}',categoria='${body.categoria}',
        time='${body.time}',disponible='${body.disponible}' WHERE id='${body.id}' `;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },

    
    
    
    

 





}

module.exports.serieController = serieController;