export interface BbsContent {
	id: number;
	created_at: string;
	user_name: string;
	body: string;
}

export interface BbsContentAdd {
	user_name: string;
	body: string;
}