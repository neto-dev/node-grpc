const grpc = require('grpc');
var protoLoader = require("@grpc/proto-loader");
const userProto = grpc.loadPackageDefinition(
    protoLoader.loadSync(__dirname + '/src/presentation/proto/user.proto', {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })
);

var ObjectID = require('bson').ObjectID;


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let client = new userProto.users.UserService(
    '0.0.0.0:8080',
    grpc.credentials.createInsecure()
);

function dataConsole(question){
    return new Promise((resolve, reject) => {
        readline.question(question, (selected) => {
            console.log(`Your selected => ${selected}!`);
            resolve(selected); 
        }) 
    })
}

function main(){
    console.log(`Welcome to the gRPC test client, select one of the following options to run the test : 
        1.- Get
        2.- GetByID
        3.- Create
        4.- Update
        5.- Delete
        Other.- Exit
        `);
    dataConsole("Enter the selected number: ").then((value) => {
        switch(value) {
            case "1":
                get();
                break;
            case "2":
                dataConsole("Enter the reregistration ID: ").then((id) => {
                    getByID(id);
                });
                break;
            case "3":
                create();
                break;
            case "4":
                dataConsole("Enter the reregistration ID: ").then((id) => {
                    update(id);
                });
                break;
            case "5":
                dataConsole("Enter the reregistration ID: ").then((id) => {
                    remove(id);
                });
                break;
            default:
                console.log("Bye...");
                process.exit();
        }
    });
}

function get(){
    client.Get({}, (error, response) => {
        if (!error) {
            console.log("Response : ", response);
            console.log('\x1b[33m%s\x1b[0m', "\n============= Successful Consultation =============\n\n\n");
            main();
        }
        else {
            console.log("Error:", error.details);
            console.log('\x1b[33m%s\x1b[0m', "\n============= An error occurred in the query =============\n\n\n");
            main();
        }
    });
}

function getByID(id){
    client.GetByID({id: id}, (error, response) => {
        if (!error) {
            console.log("Response : ", response);
            console.log('\x1b[33m%s\x1b[0m', "\n============= Successful Consultation =============\n\n\n");
            main();
        }
        else {
            console.log("Error:", error.details);
            console.log('\x1b[33m%s\x1b[0m', "\n============= An error occurred in the query =============\n\n\n");
            main();
        }
    });
}

function create(){
    var MongoId  = new ObjectID().toString();
    client.Create({id: MongoId, first_name: "Test First Name", last_name: "Test Last Name"}, (error, response) => {
        if (!error) {
            console.log("Response : ", response);
            console.log('\x1b[33m%s\x1b[0m', "\n============= Successful Consultation =============\n\n\n");
            main();
        }
        else {
            console.log("Error:", error.details);
            console.log('\x1b[33m%s\x1b[0m', "\n============= An error occurred in the query =============\n\n\n");
            main();
        }
    });
}

function update(id){
    client.Update({id: id, first_name: "Test First Name Edit", last_name: "Test Last Name Edit"}, (error, response) => {
        if (!error) {
            console.log("Response : ", response);
            console.log('\x1b[33m%s\x1b[0m', "\n============= Successful Consultation =============\n\n\n");
            main();
        }
        else {
            console.log("Error:", error.details);
            console.log('\x1b[33m%s\x1b[0m', "\n============= An error occurred in the query =============\n\n\n");
            main();

        }
    });
}

function remove(id){
    client.Delete({id: id}, (error, response) => {
        if (!error) {
            console.log("Response : ", response);
            console.log('\x1b[33m%s\x1b[0m', "\n============= Successful Consultation =============\n\n\n");
            main();
        }
        else {
            console.log("Error:", error.details);
            console.log('\x1b[33m%s\x1b[0m', "\n============= An error occurred in the query =============\n\n\n");
            main();
        }
    });
}

main();
