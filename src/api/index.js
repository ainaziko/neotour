import axios from 'axios'
import { mockDiscoverCardsData } from './mock';

const instance = axios.create({
    baseURL: 'https://muha-backender.org.kg'
})

export const getTourListByCategoryName = (categoryName) => {
    const res = instance.get(`/category-tour/${categoryName}`)
    return res;
}

export const discoverApi = {
    async getTourListByCategoryName(categoryName) {
        try {
            const response = await instance.get(`/category-tour/${categoryName}/`);
            return response;
        } catch (error) {
            return { status: 500, data: [] };
        }
    }
};