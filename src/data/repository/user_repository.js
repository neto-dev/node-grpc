
module.exports = {
    get: async (DB) => {
        return new Promise((resolve, reject) => {
            DB.user.find({
                where: {
                    deleted_at: ""
                }
            })
                .then((rows) => {
                    resolve(rows);
                })
                .catch((err) => {
                    console.log("Error: ", err.message)
                    reject(err)
                })
        }) 
    },
    getByID: (DB, id) => {
        return new Promise((resolve, reject) => {
             DB.user.findOne({
                id: id
             }).where({
                deleted_at: ""
             })
                .then((row) => {
                    resolve(row);  
                })
                .catch((err) => {
                    console.log("Error: ", err.message);
                    reject(err);
                })
        });
    },
    create: (DB, params) => {
        let current_date = new Date().toString();
        Object.assign(params, {created_at: current_date});
        return new Promise((resolve, reject) => {
            DB.user.create(params).fetch()
                .then((row) => {
                    resolve(row);
                })
                .catch((err) => {
                    console.log("Error: ", err.message);
                    reject(err);
                });
        });
    },
    update: (DB, id, params) => {
        let current_date = new Date().toString();
        delete params.created_at;
        params.updated_at = current_date;
        console.log("Este es el current date: ", current_date)
        return new Promise((resolve, reject) => {
            DB.user.updateOne({
                id: id
            })
                .set(params)
                .then((row) => {
                    resolve(row);
                })
                .catch((err) => {
                    console.log("Error: ", err.message);
                    reject(err)
                })
        });
    },
    delete: (DB, id) => {
        let current_date = new Date().toString();
        return new Promise((resolve, reject) => {
            DB.user.updateOne({
                id: id
            })
                .set({
                    deleted_at: current_date
                })
                .where({
                    deleted_at: ""
                })
                .then((row) => {
                    resolve(row);
                })
                .catch((err) => {
                    console.log("Error: ", err.message);
                    reject(err)
                })
        });
    }

}
