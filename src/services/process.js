import axios from "axios";

import * as constants from "../constants/constants"

const BASE_URL = `${constants.DEVINHOUSE_API}/processes`
class ProcessService {
    async searchProcess (filter) {
        const url = filter ? `${BASE_URL}?q=${filter}` : BASE_URL
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        }

    }
    async insertProcess(process) {
		try {
            return axios.post(BASE_URL, process);
        } catch (error) {
            throw error;
        }
	}

	async updateProcess(process, id) {
		try {
            return axios.put(`${BASE_URL}/${id}`, process);
        } catch (error) {
            throw error;
        }
    }
    async deleteProcess(id) {
		try {
            return axios.delete(`${BASE_URL}/${id}`);
        } catch (error) {
            throw error;
        }
	}
}

export default new ProcessService();