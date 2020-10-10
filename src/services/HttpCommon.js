import axios from "axios";

export default axios.create({
  //baseURL: "https://localhost:44384/api",
  //baseURL: "http://172.27.1.16:11287/api",
  //baseURL: "http://172.27.1.16:81/6dreportApi/api",

  baseURL: "http://localhost:11287/api",
  //baseURL: "http://dev.vasreport.totmobile.net:81/6dreportApi/api",
  headers: { "Content-Type": "application/json" },
});
