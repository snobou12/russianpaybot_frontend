/** @format */

import $api from "../api";
import { AxiosResponse } from "axios";

export default class PromoService {
	//Получить все промокоды
	static async getPromos(): Promise<AxiosResponse> {
		return $api.get("/getPromos");
	}
	//Создать новый промокод
	static async createPromo(
		title: string,
		discount: number,
		isOneTime: boolean,
		isDisabled: boolean
	): Promise<AxiosResponse> {
		return $api.post("/createPromo", {
			title,
			discount,
			isOneTime,
			isDisabled,
		});
	}

	static async deletePromo(_id: string): Promise<AxiosResponse> {
		return $api.post("/deletePromo", {
			_id,
		});
	}
}
