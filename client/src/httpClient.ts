import axios from "axios";

export const httpClient = axios.create({
	baseURL: "https://api.smart-ris.ru",
});
