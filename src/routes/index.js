import user from '../presentation/handler/user_handler.js';

module.exports = (server, DB) => {
    user(server, DB);
};
