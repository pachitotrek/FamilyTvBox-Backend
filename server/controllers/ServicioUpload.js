'use strict'

const users = require('./user');
const fs = require('fs');
const path = require('path');
const contenido= require('./contenido');
const Mysql=require('./mysql');




const ControllerUploadMedia = {


 UploadImage:function(req, res) {


    if (!req.files) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No se ha subido archivo'
            }
        });
    }  
   
   
    
    const id=req.params.id;
    const key = req.params.tipo;
   
    const archivo = req.files.archivo;
    const fileExt = archivo.mimetype;
    
    const ext = archivo.mimetype.split('/')[1];
    const fileName = `${id}${key}${new Date().getMilliseconds()}.${ext}`;
    

    

    let extensionesvalidas = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif','video/mp4'];

    let keysValors = ['contenido', 'publicidad','tienda','videos','servidor','seriesfile'];

    if (extensionesvalidas.indexOf(fileExt) > -1) {

        if (keysValors.includes(key, 0)) {
            archivo.mv(`uploads/${key}/${fileName}`, (err) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'error al mover el archivo'
                    })
                }
            });
        } else {
            return res.status(401).json({
                ok: false,
                message: 'Funcion aun no construida'
            });
        }
        
        if (key === "contenido") {       
                                
            let query= `UPDATE multimedia SET imagen = '${fileName}' WHERE id = '${id}'`;
    
            Mysql.BaseDatosController.EjecutarQuery(query,res,false);         
        
        }
        
        if(key === "publicidad"){            

            let query= `UPDATE publicidad SET archivo = '${fileName}' WHERE id = '${id}'`;      
    
            Mysql.BaseDatosController.EjecutarQuery(query,res,false);  
        }

        if(key === "tienda"){            

            let query= `UPDATE productos SET imagen = '${fileName}' WHERE id = '${id}'`;      
    
            Mysql.BaseDatosController.EjecutarQuery(query,res,false);  
        }
        
        if(key === "videos"){            

            let query= `UPDATE productos SET imagen = '${fileName}' WHERE id = '${id}'`;    
            Mysql.BaseDatosController.EjecutarQuery(query,res,false);  
        }
        if(key === "servidor"){            

            let query= `UPDATE productos SET url = '${fileName}' WHERE id = '${id}'`;      
            Mysql.BaseDatosController.EjecutarQuery(query,res,false);  
        }
        if(key === "seriesfile"){            

            let query= `UPDATE series SET url = '${fileName}' WHERE id = '${id}'`;      
            Mysql.BaseDatosController.EjecutarQuery(query,res,false);  
        }

       

    } else {
        return res.status(500).json({
            ok: false,
            err: {
                message: 'Las extensiones permitidas son ' + extensionesvalidas.join(', '),
                ext: ext
            }
        });
    }

},

borraArchivo:function(fileName, key) {

    let pathImagen = path.resolve(__dirname, `../../uploads/${key}/${fileName}`);

    if (fs.existsSync(pathImagen)) {
        fs.unlinkSync(pathImagen);
    }

}



}



module.exports.ControllerUploadMedia = ControllerUploadMedia;