import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

const files = await pinata.files.list();
// Optional Queries
// .name("Hello")
// .group("GROUP_ID")
// .metadata({ awesome: "true" })
// .pageToken("next_page_token")
// .limit(10)

console.log(files);
