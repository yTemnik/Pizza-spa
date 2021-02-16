import * as axios from 'axios';

const istance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'
});

export const productsAPI = {
    getProducts() {
        return istance.get(`products`)
            .then(response => {
                return response
            })
    }
}

export const promoAPI = {
    getPromo() {
        return istance.get(`promo`)
            .then(response => {
                return response
            })
    }
}

export const basketAPI = {
    getBasket() {
        return istance.get(`basket`)
            .then(response => {
                return response.data
            })
    },
    async updateBasket(elem, amount, sum) {
        const basketResponse = await basketAPI.getBasket();
        return await istance.post(`basket`, {
            ...basketResponse,
            selectedElem: [...basketResponse.selectedElem, elem],
            amountElem : amount, 
            sum : sum
        });
    }
}