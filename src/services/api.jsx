import axios from 'axios';

// Create an instance with your backend's base URL
const api = axios.create({  // Adjust the URL as needed and component creation 
  baseURL: 'http://localhost:8888/api', //  this is your actual Spring Boot URL/Port
  headers: {
    'Content-Type': 'application/json',  // Set default content type for requests
  },
});

export default api;