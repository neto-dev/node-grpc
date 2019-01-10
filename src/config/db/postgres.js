var mysqlAdapter = require('sails-mysql');

module.exports = ({name, user, password, host, port}) => ({
    adapters:{
        'default': mysqlAdapter,
        mysql: mysqlAdapter 
    },
    datastores: {
        'default': {
            adapter: 'mysql',
            url: `mysql://${user}:${password}@${host}:${port}/${name}`,
            connectTimeout: 20000,
            migrate: 'alter',
        }
    }

});
