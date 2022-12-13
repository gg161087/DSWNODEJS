const express = require('express');
const global_consts = require('./const/globalConsts');
const index_routes = require('./routes/index.routes');

let http_errors = require('http-errors')

const apiConfig = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    return;
}

const routerConfig = (app) => {
    app.use('/api', index_routes.routesInit());
    app.use('/', index_routes.routesAuth())

    app.use(function (req, res){
        res.status(200).json({message:'Not Found'})
    })
}

const init = () => {
    const app = express();

    apiConfig(app);
    routerConfig(app);

    app.listen(global_consts.PORT);
    console.log('Servidor corriendo: http://127.0.0.1:'+ global_consts.PORT);
}

init()