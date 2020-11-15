const express = require('express');
const app = express();
const {MultimediaController} = require('../controllers/contenido');
const {ControllerUploadMedia} = require('../controllers/ServicioUpload');
const {ImagenController}= require('../controllers/imagen');
const {cartaController}= require('../controllers/videoscarta');
const {ProductosController}=require('../controllers/productos');
const {ControllerAdmin} = require('../controllers/auth');
const {ControllerUsuario} = require('../controllers/user');
const {ControllerPayu} = require('../controllers/payu');
const {serieController}= require('../controllers/series');


const router = express.Router();
const { verificaToken }= require('../middlewares/auth');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});
const fileUpload=require('express-fileupload');

router.use( fileUpload({ useTempFiles: true }) );



//ADMIN
router.post('/adm',ControllerAdmin.add_usuario);
router.post('/admin',ControllerAdmin.login);

//Usuario
router.post('/register',ControllerUsuario.add_user);
router.post('/login',ControllerUsuario.login);
router.get('/check/:email',ControllerUsuario.checkEmail);
router.post('/usuario',ControllerUsuario.UpdateUser);
router.post('/recovery',ControllerUsuario.password_recovery);
router.post('/changePass',ControllerUsuario.updatePass);

//pagos

router.post('/pagos',ControllerPayu.pagos);
router.post('/pagos_payu',ControllerPayu.ProcesoPago);
router.post('/ordenes',ControllerPayu.crearOrden);



//contenido
router.post('/contenido',MultimediaController.agregarestacion);
router.put('/contenido',MultimediaController.editarestacion);
router.put('/dcontenido',MultimediaController.eliminarestacion);
router.get('/estacion',MultimediaController.getestacion);

//Publicidad
router.post('/publicidad',MultimediaController.agregarpublicidad);
router.put('/publicidad',MultimediaController.editarpublicidad);
router.put('/dpublicidad',MultimediaController.eliminarpublicidad);
router.get('/publicidad',MultimediaController.getpublicidad);


//idiomas
router.post('/idiomas',MultimediaController.agregaridioma);
router.get('/idiomas',MultimediaController.GetIdiomas);
router.put('/idiomas',MultimediaController.editarIdioma);
router.put('/didiomas',MultimediaController.eliminarIdioma);

//Generos
router.post('/genero',MultimediaController.agregarGenero);
router.put('/genero',MultimediaController.editarGenero);
router.put('/dgenero',MultimediaController.eliminarGenero);
router.get('/genero',MultimediaController.GetGenero);

//Servicio de Upload
router.put('/upload/:tipo/:id',ControllerUploadMedia.UploadImage);
router.get('/img/:tipo/:img',ImagenController.getImagen);

//videos a la carta
router.post('/addvideo',cartaController.addVideo);//agrega videos
router.put('/editvideo',cartaController.editarVideo);//edita video
router.put('/eliminarvideo/:id',cartaController.eliminarVideo);//elimina video
router.get('/videos',cartaController.getVideos);//devuelve todos los videos
router.get('/video/:id',cartaController.getVideo);//Devuelve videos segun categoria
router.get('/cartavideo/:id',cartaController.video);//devuelve un video en especifico
router.get('/series',cartaController.getSeries);//Devuelve todas las series
router.get('/serie/:id',serieController.getCapitulos);//Devuelve capitulos de una serie especifica
router.get('/serieid/:id',serieController.getSerie);//Devuelve capitulos de una serie especifica
router.post('/serie',serieController.crearcapitulo);//agrega capitulos a una serie especifica
router.post('/editarserie',serieController.ActualizarSerie);//edita capitulos a una serie especifica
router.get('/getserie/:id',serieController.getSeries);
router.post('/editars',serieController.editarSerie);

//categorias
router.post('/categoria',cartaController.crearcategoria);//crea categoria videos a la carta
router.put('/categoria',cartaController.editarCategoria);//edita categoria videos a la carta
router.put('/bcategoria',cartaController.eliminarCategoria);//elimina categoria videos a la carta
router.get('/categorias',cartaController.GetCategorias);//devuelve todas las categorias

//cupones
router.post('/cupon',ProductosController.addCupon);
router.post('/ecupon',ProductosController.editCupon);
router.get('/cupon',ProductosController.getCupons);
router.get('/acupon',ProductosController.getActivateCupons);

//productos
router.post('/producto',ProductosController.agregarproducto);//Agrega Productos
router.put('/producto',ProductosController.editarProducto);//Edita Producto
router.put('/bproducto',ProductosController.eliminarProducto)//Elimina Producto
router.get('/productos/:id',ProductosController.getproductos);//trae productos segun la categoria
router.get('/producto/:id',ProductosController.producto);//trae un producto por su id
router.get('/allproductos',ProductosController.allproductos);//trae todos los productos existentes

//Categorias Productos
router.post('/pcategoria',ProductosController.crearcategoria);//Crear Categorias Productos
router.put('/pcategoria',ProductosController.editarCategoria);//Editar Categorias Productos
router.put('/borrarpcategorias',ProductosController.eliminarCategoria);//Elimina una Categoria
router.get('/pcategorias',ProductosController.GetCategorias);//Devuelve las categorias



//RUTAS DESDE LA APLICACION
router.get('/banners',MultimediaController.getBanners);
router.get('/videosp',MultimediaController.getVideosPublicidad);
router.get('/emisoras/:id/:gn',MultimediaController.getEmisoras);
router.get('/tv/:id/:gn',MultimediaController.getCanalesTv);
router.get('/multimedia/:id',MultimediaController.getCanal);
router.get('/getpradios',MultimediaController.getVideosRadio);
router.get('/getptv',MultimediaController.getVideosTV);
router.get('/getAllFlix',cartaController.getAllVideos);
router.get('/getLast',ProductosController.getLast);
router.get('/getLastP',ProductosController.getLastProductos);


//COMPRAS

router.get('/compras/:id',ControllerPayu.getCompras);
router.get('/ordenes/:id',ControllerPayu.getOrdenes);
router.get('/alquileres/:id/:categoria',ControllerPayu.getAlquileres);
router.get('/seriesAlquiler/:id/:categoria',ControllerPayu.getAlquileresSeries);

//prueba
router.get('/test',ControllerPayu.test);












module.exports = router;    