'use strict';
import express from 'express';
var routes = require('../routes');
const grpc = require('grpc');
const server = new grpc.Server();

module.exports = app => {
    var environment = '';
    if(process.env.NODE_ENV != ''){
        environment = process.env.NODE_ENV;
    }else if (process.env.ENVIROMENT != ''){
        environment = process.env.ENVIROMENT;
    }else{
        environment = 'Development';
    }
    const config = app.config.config[environment];

    app.config.db.index(config["Database"])
    .then(response => {
        let DB = response;
        routes(server, DB);
        try{
            console.log("\x1b[33m%s\x1b[0m", "Server start: ", server.bind(config["Host"] + ":" + config["Port"], grpc.ServerCredentials.createInsecure()));
            server.start();
        }catch(err){
            console.log("Error", err);
        }
    });


// Configuracion para montar api Rest con express
//    try{
//// 	    app.set('port', config['Port'] || 3000);
////        app.listen(config['Port'], () => {
////		    console.log('\x1b[33m%s\x1b[0m', 'Port: ', app.get('port'));
////	    });
//        console.log(server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure()))
//    }catch(err){
//        console.log("Error: ", err)
//    }
//
//    server.start();
    
};
