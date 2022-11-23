
import $api from "../api";
import { AxiosResponse } from "axios";
import { messageType } from "../models/IConversation";

export default class ConversationService {
    //Получить все диалоги пользователей
	static async getConversations(): Promise<AxiosResponse> {
		return $api.get("/getConversations");
	}
    //Получить диалог пользователя
	static async getConversation(chatId:string): Promise<AxiosResponse> {
		return $api.post("/getConversation",{chatId});
	}
	//Отправить пользователю сообщение в телеграм через бота
	static async sendMessage(chatId:string,message:messageType): Promise<AxiosResponse> {
		return $api.post("/sendMessage",{chatId,message});
	}
	

}
