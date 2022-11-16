const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { createServer } = require('http');

require('dotenv').config();
const { dbConnection } = require('./db/mongo/config');
const { socketController } = require('./sockets/controller');

// const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./default.yaml');

class Server {

    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;

        // this.server = createServer( this.app );
        // this.io     = require('socket.io')(this.server, {
        //     cors: {
        //         origin: 'http://localhost:8100',
        //         // origin: '*',
        //         methods: ['GET', 'POST'],
        //         allowedHeaders: ['Authorization'],
        //         credentials: true
        //         }
        //   });


        this.paths = {
            menu: '/api/menu',
            perfil: '/api/perfil',
            usuario: '/api/usuario',
            login: '/api/login',
            sistema: '/api/sistema',
            dispositivo: '/api/dispositivo',
            registro: '/api/registro',
            notificacion: '/api/notificacion',
            programa: '/api/programa',
            cultivo: '/api/cultivo',
            seguimiento: '/api/seguimiento',
            // swagger: '/swagger'
        };
        
        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middleware();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        // this.sockets();
    }

    conectarDB = async()=> {
        await dbConnection();
    }

    middleware = () => {

        // CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use( express.static('public'));

    
         // Fileupload - Carga de archivos
         this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));

        //lista blanca CORS
        // let whitelist  = process.env.ORIGENES_PERMITIDOS.split(' ');
        // this.app.use(cors({
        //     origin: function(origin, callback){
        //     // allow requests with no origin // (like mobile apps or curl requests)
        //         if( !origin) return callback(null, true);
        //         if(whitelist.indexOf(origin) === -1)
        //         {
        //             let msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        //             return callback(new Error(msg), false);
        //         }
        //         return callback(null, true);
        //     }
        // }));

    }

    routes = () => {

        this.app.use(this.paths.menu, require('./routes/menu'));
        this.app.use(this.paths.perfil, require('./routes/perfil'));
        this.app.use(this.paths.usuario, require('./routes/usuario'));
        this.app.use(this.paths.login, require('./routes/login'));
        this.app.use(this.paths.sistema, require('./routes/sistema'));
        this.app.use(this.paths.dispositivo, require('./routes/dispositivo'));
        this.app.use(this.paths.registro, require('./routes/registro'));
        this.app.use(this.paths.notificacion, require('./routes/push-notification'));
        this.app.use(this.paths.programa, require('./routes/programa'));
        this.app.use(this.paths.cultivo, require('./routes/cultivo'));
        this.app.use(this.paths.seguimiento, require('./routes/seguimiento'));
        // this.app.use(this.paths.swagger, swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
        
    }

    sockets = () => {
        this.io.on('connection', ( socket ) => socketController(socket, this.io ) );
    }

    listen = () => {
        // this.server.listen( this.port, () => {
        this.app.listen( this.port,  () => {
            console.log(`servidor corriendo en puerto ${ this.port }`);
        });
    }

}

module.exports = Server;