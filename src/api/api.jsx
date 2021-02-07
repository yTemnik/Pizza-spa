import * as axios from 'axios';

const istance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'
});

export const getAPI = {
    getTest() {
        return istance.get(`http://localhost:3000/products?pizza`)
        .then(response => {
            return response
        })
    }
} 