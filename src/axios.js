import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amaoz-9dee4.cloudfunctions.net/api",
  // "http://localhost:5001/amaoz-9dee4/us-central1/api", // THE API (cloud funtion) URL
});

export default instance;
