const basics = {
    id: {
        type: 'string',
        autoMigrations: {autoIncrement: true}, 
        columnName: '_id'
    },
    created_at: {
        type: 'string',
    },
    updated_at: {
        type: 'string',
    },
    deleted_at: {
        type: 'string',
    }
}

module.exports = [
    {
        identity: 'user',
	    datastore: 'default',
        shema: true,
        autoPK: false,
        primaryKey: 'id',
	    attributes: {
            ...basics,
            first_name: { 
                type: 'string'
            },
		    last_name: {
                type: 'string'
            },
	    }
    }
]
