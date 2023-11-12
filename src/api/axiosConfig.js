import axios from 'axios';

/*export default axios.create({
    baseURL:'https://fc67-2a02-908-1576-6e40-00-c8b3.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
}); */

export default axios.create({
    baseURL: 'http://localhost:8080', // Replace with your backend server URL
    headers: {
      'Content-type': 'application/json',
    
    },
  });
