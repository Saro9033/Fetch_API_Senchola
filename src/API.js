import axios from 'axios';

const URL = "https://jsonplaceholder.typicode.com/users"

export default axios.create({
    baseURL:URL
})