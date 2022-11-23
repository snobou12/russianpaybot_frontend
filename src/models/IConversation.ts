/** @format */

import { IUser } from "./IUser";

export type messageType = {
	message: string;
	sender: string;
	createdAt: number;
};

type conversationType = {
	chatId: string;
	messages: messageType[];
};
export interface IConversation {
	conversation: conversationType;
	user: IUser;
}
