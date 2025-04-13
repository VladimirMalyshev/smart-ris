import { httpClient } from "../httpClient";

export const getUsers = async () => {
	const users = httpClient.get("/api/analytics/users");
	return users;
};

export const getDocuments = () => {
	const documents = httpClient.get("/api/analytics/documents");
	return documents;
};

export const getProcessingTime = () => {
	const proccessingTime = httpClient.get("/api/analytics/processing-time");
	return proccessingTime;
};
