import axios from "axios";

// * This method below was using to avoid blocking to request from client
// * Because of the web's api was running on the different domain or origin 
    // * That cause may block our access to the endpoints.
export default axios.create({
    baseURL: "https://b0a5-2405-4800-5714-6930-c039-cc3a-dfa5-cf9b.ngrok-free.app",
    headers: {"ngrok-skip-browser-warning": "true"}
});