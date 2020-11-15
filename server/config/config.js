//========================
//PUERTO
//========================

process.env.PORT = process.env.PORT || 3000;

//========================
//entorno
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 

//========================
//vencimiento del token
//========================
//60 segundos
//60 minutos
//24 horas
//30dias

process.env.CADUCIDAD_TOKEN=process.env.CADUCIDAD_TOKEN || 60*60*24*30;

//========================
//seed de autenticacion
//========================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//========================
//Credenciales Correo
//========================

merchantId=508029;
accountId=512321;
responseUrl="https://familymedia.orione.cf/#/confirmation";
confirmationUrl="http://familyboxtv.com/api/pagos";
ApiKey="4Vj8eK4rloUd272L48hsrarnUA";


//Base de Datos

module.exports.host ='sv6.byethost6.org';    
module.exports.user= 'familybo_admin';
module.exports.password = '9jLQc9GEZvzusUG';
module.exports.database = 'familybo_fmtvbox';



module.exports.EmailPass="P#3dX2v@wiP1";
module.exports.Email="test@orione.site";
module.exports.EmailPortE=993;
module.exports.EmailPortS=290;
module.exports.HostE="https://sv50.byethost50.org:2096/";
