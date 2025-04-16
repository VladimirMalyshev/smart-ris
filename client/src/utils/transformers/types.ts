export interface DocumentsApiResponseType {
	total: number;
	statuses: {
		draft: number;
		on_signature: number;
		signed: number;
	};
}

export type UsersApiResponseType = Array<{
	user_id: number;
	name: string;
	documents: number;
}>;

export type ProcessingTimeApiResponseType = Array<{
	date: string;
	hours: number;
}>;
