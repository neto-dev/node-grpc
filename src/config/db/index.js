var Waterline = require('waterline');
var sailsDiskAdapter = require('sails-mongo');
var waterline = new Waterline();
var entitys = require('./models');
var mongo = require('./mongo.js');
var mysql = require('./mysql.js');
var postgres = require('./postgres.js');

function connect(config) {
    return new Promise(function(resolve, reject) {
        for(var i = 0; i < entitys.length; i++){
            var collection = Waterline.Collection.extend(entitys[i]);
            waterline.registerModel(collection);
            collection = null;
        }

        let configuration;
        switch(config.adapter){
            case 'mongo':
                configuration = mongo(config);
                break;
            case 'mysql':
                configuration = mysql(config);
                break;
            case 'postgres':
                configuration = postgres(config);
                break;
        }
        configuration =   
        waterline.initialize(configuration, (err, ontology) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            resolve(ontology.collections);
        })
    })
}

module.exports = () => connect;
    

