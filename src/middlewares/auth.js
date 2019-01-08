'use strict';

function authentication (app, token) {
	const User = app.models.db.User;
	return new Promise((resolve, reject) => {
		User.findOne({where: {token: token}}).then(response => {
			if (!response) reject('No Authorization');
			resolve(response);
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports = {
	authentication
};