import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

const files = await pinata.files.list().name("hello.txt");

const fileCid = files.files[0].cid;

const url = await pinata.gateways.createSignedURL({
	cid: fileCid,
	expires: 30,
});

console.log(url);
