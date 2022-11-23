const express = require('express');
const GLOBAL_CONSTS = require('./const/globalConsts');
const ROUTER_CONFIG = require('./routes/index.routes');

const CONFIG_API = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    return;
}

const CONFIG_ROUTER = (app) => {
    app.use('/api', ROUTER_CONFIG.ROUT_INIT());
}

const init = () => {
    const app = express();
    CONFIG_API(app);

    CONFIG_ROUTER(app);

    app.listen(GLOBAL_CONSTS.PORT);
    console.log('Servidor corriendo: http://127.0.0.1:'+ GLOBAL_CONSTS.PORT);
}

init()