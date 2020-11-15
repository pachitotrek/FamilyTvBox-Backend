const jwt = require('jsonwebtoken');

//====================
//Verificar Token
//===================

let verificaToken = (req,res,next)=>{

    let token = req.get('token');

    jwt.verify(token,process.env.SEED, (err,decode)=>{

        if(err){
            return res.status(401).json({
                ok:false,
                err
            });

        }
        req.usuario = decode.usuario;
        next();
    });

};

//====================
//Verificar Role
//===================
let verificaRole = (req,res,next)=>{

    let usuario = req.usuario;

    if(usuario.role==='ADMIN_ROLE'){
        next();

    }else{
        return res.status(401).json({
            ok:false,
            err
        });
    }

};

module.exports={
    verificaToken,
    verificaRole
}