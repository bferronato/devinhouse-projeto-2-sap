import axios from "axios";

import * as constants from "../constants/constants"

const BASE_URL = `${constants.DEVINHOUSE_API}/processes`
console.log(BASE_URL)
class ProcessService {
    async searchProcess (filter) {
        const url = filter ? `${BASE_URL}?q=${filter}` : BASE_URL
        console.log(url)
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        }

    }
}

export default new ProcessService();