import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { uploadFileToStorage } from "./storage/remoteStorage.js";

import { config } from "./config.js";

const { branch, schemaFileName } = config;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaPath = path.join(__dirname, `schema/${schemaFileName}`);
const storagePath = `schemas/${branch}/${schemaFileName}`;

const fileContent = fs.readFileSync(schemaPath);

uploadFileToStorage(storagePath, fileContent).then(() =>
  console.log(`Schema successfuly uploaded to ${storagePath}`)
);
