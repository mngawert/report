import axios from "axios";

export default axios.create({
  //baseURL: "https://localhost:44384/api",
  baseURL: "http://localhost:11287/api",
  headers: { "Content-Type": "application/json" },
});
