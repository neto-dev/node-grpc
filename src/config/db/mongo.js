var mongoAdapter = require('sails-mongo');

module.exports = ({name, user, password, host, port}) => ({
    adapters:{
        'default': mongoAdapter,
        mongo: mongoAdapter 
    },
    datastores: {
        'default': {
            adapter: 'mongo',
            url: `mongodb://${user}:${password}@${host}:${port}/${name}`
        }
    }

});
