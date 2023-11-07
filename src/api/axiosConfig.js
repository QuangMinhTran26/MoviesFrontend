import axios from 'axios';

export default axios.create({
    baseURL:'https://d696-2a02-908-1576-6e40-00-c8b3.ngrok.io',
    headers:{"ngrok-skip-browser-warning": "true"}
}); 