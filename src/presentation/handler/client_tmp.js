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

let client = new userProto.users.UserService(
  '0.0.0.0:50051',
  grpc.credentials.createInsecure()
);

client.Get({}, (error, response) => {
   if (!error) {
      console.log("Response : ", response)
   }
   else {
      console.log("Error:", error.details);
   }
});

