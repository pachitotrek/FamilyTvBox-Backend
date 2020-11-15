var Mysql = require('mysql');
const host = require('../config/config').host;
const user = require('../config/config').user;
const password = require('../config/config').password;
const database = require('../config/config').database;



const BaseDatosController={  


    EjecutarQuery:function(query,res,item){       

        var cnn = Mysql.createConnection({
            host     : host,    
            user     : user,
            password : password,
            database : database
        });

        if(item===true){
            cnn.query(query, function (error, results, fields) {
                if (error){
                    res.status(401).json({
                        ok:false,
                        error:error.code
                    })                                     
                }else{
                    return res.status(200).json({
                        ok:true,
                        results          
                    });
                }                
            });    
            cnn.end((err)=>{
                if(err){
                    console.log(err);
                }        
            });    

        }else{
            cnn.query(query, function (error, results, fields) {
                if (error) throw error;
                return res.status(200).json({
                    ok:true,
                    results:results.insertId          
                })
            });
    
            cnn.end((err)=>{
                if(err){
                    console.log(err);
                }
    
                
            });    
        }
        

       
        
      
    },
    alquileres:function(datos){

        let query= `SELECT users.id ,productos_ordenes.id_producto,productos_ordenes.email_usuario,productos_ordenes.state,
        productos_ordenes.date_now,productos_ordenes.date_end FROM users INNER JOIN productos_ordenes ON users.email = productos_ordenes.email_usuario 
        INNER JOIN ordenes ON productos_ordenes.id_orden = ordenes.id WHERE ordenes.status = 4 AND users.id = ${datos}`;

        
        var cnn = Mysql.createConnection({
            host     : host,    
            user     : user,
            password : password,
            database : database
        });    

        cnn.query(query, function (error, results, fields) {
            if (error){
                                            
            }else{
               
            }                
        });    
        cnn.end((err)=>{
            if(err){
                console.log(err);
            }        
        }); 




    }
}








module.exports.BaseDatosController = BaseDatosController;