import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

const group = await pinata.groups.create({
	name: "MyFiles",
	isPublic: true,
});

console.log(group);
