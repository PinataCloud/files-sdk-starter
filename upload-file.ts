import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

// Construct a file according to the Web API
const file = new File(["Hello World!"], "hello.txt");

// Upload the file
const upload = await pinata.upload.file(file);
// Optional methods
// .addMetadata({
// 	name: "Hello",
// 	keyvalues: {
// 		awesome: "true",
// 	},
// })
// .group("GROUP_ID");

console.log(upload);
