import axios from "axios";

// * This method below was using to avoid blocking to request from client
// * Because of the web's api was running on the different domain or origin 
    // * That cause may block our access to the endpoints.
export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {"ngrok-skip-browser-warning": "true"}
});