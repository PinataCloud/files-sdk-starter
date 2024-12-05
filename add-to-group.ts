import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

// Get latest group
const groups = await pinata.groups.list();
const groupId = groups.groups[0].id;

// Get latest file
const files = await pinata.files.list();
const fileId = files.files[0].id;

// Add to group
const add = await pinata.groups.addFiles({
	groupId: groupId,
	files: [fileId],
});

console.log(add);

// List files part of the group
const updatedFiles = await pinata.files.list().group(groupId);

console.log(updatedFiles);
