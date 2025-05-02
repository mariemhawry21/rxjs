import { Observable } from "rxjs";

const callback = () => {
  console.log("looged");
};
const observer = new Observable();
const promise = new Promise(callback);
