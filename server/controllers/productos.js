'use strict'
const Mysql = require('./mysql');


const ProductosController = {

    agregarproducto: function (req, res) {

        var body = req.body;
        let query = `INSERT INTO productos (name, descripcion,precio,tipo,categoria,disponible,cantidad) VALUES ('${body.name}','${body.descripcion}','${body.precio}','${body.tipo}','${body.categoria}','${body.disponible}','${body.cantidad}')`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);

    },
    editarProducto: function (req, res) {
        var body = req.body;
        let query = `UPDATE productos SET name ='${body.name}',descripcion='${body.descripcion}',precio='${body.precio}',
        tipo='${body.tipo}',categoria='${body.categoria}',disponible='${body.disponible}'  WHERE id='${body.id}' `;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    eliminarProducto: function (req, res) {
        const body = req.body;         
        let id = body.id;
        let query= `DELETE FROM productos WHERE id ='${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },
    getproductos: function (req, res) {
        const id = req.params.id;
        let query = `SELECT * FROM productos WHERE categoria = ${id} AND tipo = 2 AND disponible = 1`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    producto: function (req, res) {
        let id = req.params.id;   
        let query = `SELECT * FROM productos WHERE id = '${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    allproductos: function (req, res) {
        let query = `SELECT * FROM productos WHERE tipo = 2`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getLast: function (req, res) {  
        let query = `SELECT * FROM multimedia ORDER BY id DESC limit 3`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getLastProductos: function (req, res) {  
        let query = `SELECT * FROM productos ORDER BY id DESC limit 3 AND disponible = 1`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    crearcategoria: function (req, res) {
        const body = req.body;
        let query = `INSERT INTO Pcategorias (categoria) VALUES ('${body.categoria}')`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    editarCategoria:function(req,res){
        var body = req.body;
        let query = `UPDATE Pcategorias SET categoria='${body.categoria}' WHERE id='${body.id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    eliminarCategoria:function(req,res){
        const body = req.body;         
        let id = body.id;     
        let query= `DELETE FROM Pcategorias WHERE id ='${id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query,res,false);
    },
    GetCategorias: function (req, res) {

        let query = `SELECT * FROM Pcategorias`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    addCupon:function(req,res){
        const body = req.body;
        let query =`INSERT INTO cupones(cupon,descuento,estado) VALUES ('${body.cupon}','${body.descuento}','${body.estado}')`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    editCupon:function(req,res){
        const body = req.body;
        let query= `UPDATE cupones SET cupon='${body.cupon}',descuento='${body.descuento}',estado='${body.estado}' WHERE id='${body.id}'`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, false);
    },
    getCupons:function(req,res){
        let query= `SELECT * FROM cupones`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    },
    getActivateCupons:function(req,res){
        let query= `SELECT * FROM cupones WHERE estado=1`;
        Mysql.BaseDatosController.EjecutarQuery(query, res, true);
    }



}

module.exports.ProductosController = ProductosController;