import responses from '../../utils/responses.js';
var userUsecase = require('../../domain/usecase/user_usecase.js');
const grpc = require('grpc');
var protoLoader = require("@grpc/proto-loader");
const userProto = grpc.loadPackageDefinition(
                  protoLoader.loadSync(__dirname + '/../proto/user.proto', {
                    keepCase: true,
                    longs: String,
                    enums: String,
                    defaults: true,
                    oneofs: true
                  })
                );
 
module.exports = (server, DB) => {
    server.addService(userProto.users.UserService.service, {
       Get(call, callback) {
           console.log("New Get Request");
            userUsecase.get(DB)
            .then((data) => {
                callback(null, {user:data});
            }).catch((err) => {
                callback({message: err.message, code: 500}, null);
            });
       },
       GetByID(call, callback) {
           console.log("New GetByID Request", call.request);
            userUsecase.getByID(DB, call.request.id)
            .then((data) => {
                callback(null, data);
            }).catch((err) => {
                callback({message: err.message, code: 500}, null);
            });
       }, 
       Create(call, callback) {
           console.log("New Create Request");
            userUsecase.create(DB, call.request)
            .then((data) => {
                callback(null, data);
            }).catch((err) => {
                callback({message: err.message, code: 500}, null);
            });
       }, 
       Update(call, callback) {
           console.log("New Update Request", call.request);
            userUsecase.update(DB, call.request.id, call.request)
            .then((data) => {
                callback(null, data);
            }).catch((err) => {
                callback({message: err.message, code: 500}, null);
            });
       }, 
       Delete(call, callback) {
           console.log("New Delete Request", call.request);
            userUsecase.delete(DB, call.request.id)
            .then((data) => {
                callback(null, data);
            }).catch((err) => {
                callback({message: err.message, code: 500}, null);
            });
       }, 
    });

//En caso de que se desee implementar api rest los siguientes metodos son los que funcionan con express
//    get: function (server, DB) {
//        app.get('/users', (req, res) => {
//            userUsecase.get(DB)
//            .then((data) => {
//                res.json(responses.respondJson(data));
//            });
//        });
//    },
//
//    getByID: function(app, DB) {
//         app.get('/users/:id', (req, res) => {
//            userUsecase.getByID(DB, req.params.id)
//            .then((data) => {
//                if (data) {
//                    res.json(data);
//                }
//                else {
//                     res.json(responses.respondErrorJson(400, "Record Find Failure", "Record Find Failure")); 
//                }
//            })
//            .catch((err) => {
//                console.log("Error", err);
//                res.json(responses.respondErrorJson(400, "Record Find Failure", err))
//            })
//        }); 
//    },
//
//    create: function(app, DB){
//        app.post('/users', (req, res) => {
//            userUsecase.create(DB, req.body)
//                .then((data) => {
//                    console.log(data);
//                    res.json(data);
//                })
//                .catch((err) => {
//                    console.log("Error", err);
//                    res.json(responses.respondErrorJson(500, "Record Create Failure", err))
//                })
//        })
//    },
//
//    update: function(app, DB){
//        app.put('/users/:id', (req, res) => {
//            userUsecase.update(DB, req.params.id, req.body)
//                .then((response) => {
//                    console.log(response);
//                    res.json(response);
//                })
//                .catch((err) => {
//                    console.log("Error", err);
//                    res.json(responses.respondErrorJson(500, "Record Create Failure", err))
//                })
//
//        })
//    },
//
//    newUserHandler: function (app, DB) {
//        this.get(app, DB);
//        this.getByID(app, DB);
//        this.create(app, DB);
//        this.update(app, DB);
//    }
    
};
