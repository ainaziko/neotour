import axios from 'axios'

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
    },

    async getRecommendedTours() {
        try {
            const response = await instance.get(`/list-tours`);
            return response;
        } catch (error) {
            return {status: 500, data: [] };
        }
    }
};

export const tourDetailsApi = {
    async getTourDetailsById(id) {
        try {
            const response = await instance.get(`/retrieve-tour/${id}`)
            console.log("details: ", response)
            return response;
        } catch {
            return { status: 500, data: null };
        }
    }
}