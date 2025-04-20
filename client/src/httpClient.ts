import axios from "axios";

export const httpClient = axios.create({
	baseURL: "http://[2001:1bb0:e000:1e::3e]:8000",
});
