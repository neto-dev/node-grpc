var userRepostory = require('../../data/repository/user_repository.js')

module.exports = {
    get: (DB) => {
        return userRepostory.get(DB);
    },

    getByID: (DB, id) => {
        return userRepostory.getByID(DB, id);
    },

    create: (DB, params) => {
        return userRepostory.create(DB, params);
    },

    update: async (DB, id, params) => {
        return userRepostory.update(DB, id, params);
    },

    delete: async (DB, id) => {
        return userRepostory.delete(DB, id);
    }
};
