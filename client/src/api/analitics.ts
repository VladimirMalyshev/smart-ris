import { httpClient } from "../httpClient";

export const get_users = async () => {
	const users = httpClient.get("/api/analytics/users");
	return users;
};

export const get_documents = () => {
	const documents = httpClient.get("/api/analytics/documents");
	return documents;
};

export const get_processing_time = () => {
	const documents = httpClient.get("/api/analytics/processing-time");
	return documents;
};
