import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { config } from "../config.js";

const { firebaseConfig } = config;

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const uploadFileToStorage = (path, fileContent) => {
  const storageRef = ref(storage, path);
  return uploadBytes(storageRef, fileContent)
};
