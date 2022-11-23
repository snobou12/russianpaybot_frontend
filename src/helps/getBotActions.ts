/** @format */

const queries: any = {
	"data-spotify_3_btn": "Индивидуальная подписка Spotify 3 месяца",
	"data-spotify_6_btn": "Индивидуальная подписка Spotify 6 месяцев",
	"data-spotify_12_btn": "Индивидуальная подписка Spotify 12 месяцев",
	"data-spotify_3_btn_buy": "Индивидуальная подписка Spotify 3 месяца, купить",
	"data-spotify_6_btn_buy": "Индивидуальная подписка Spotify 6 месяцев, купить",
	"data-spotify_12_btn_buy":
		"Индивидуальная подписка Spotify 12 месяцев, купить",
	"data-ps-subs_es_btn": "Essential PS+ подписки",
	"data-ps-subs_ex_btn": "Extra PS+ подписки",
	"data-ps-subs_dx_btn": "Deluxe PS+ подписки",
	"data-ps-subs_ea_btn": "EA Play PS+ подписки",
	"data-ps-subs_es_1_btn": "Essential PS+ подписка 1 месяц",
	"data-ps-subs_es_3_btn": "Essential PS+ подписка 3 месяцев",
	"data-ps-subs_es_12_btn": "Essential PS+ подписка 12 месяцев",
	"data-ps-subs_ex_1_btn": "Extra PS+ подписка 1 месяц",
	"data-ps-subs_ex_3_btn": "Extra PS+ подписка 3 месяцев",
	"data-ps-subs_ex_12_btn": "Extra PS+ подписка 12 месяцев",

	"data-ps-subs_dx_1_btn": "Deluxe PS+ подписка 1 месяц",
	"data-ps-subs_dx_3_btn": "Deluxe PS+ подписка 3 месяцев",
	"data-ps-subs_dx_12_btn": "Deluxe PS+ подписка 12 месяцев",

	"data-ps-subs_ea_1_btn": "EA Play PS+ подписка 1 месяц",
	"data-ps-subs_ea_12_btn": "EA Play PS+ подписка 12 месяцев",

	"data-ps-subs_es_1_btn_buy": "Essential PS+ подписка 1 месяц, купить",
	"data-ps-subs_es_3_btn_buy": "Essential PS+ подписка 3 месяцев, купить",
	"data-ps-subs_es_12_btn_buy": "Essential PS+ подписка 12 месяцев, купить",
	"data-ps-subs_ex_1_btn_buy": "Extra PS+ подписка 1 месяц, купить",
	"data-ps-subs_ex_3_btn_buy": "Extra PS+ подписка 3 месяцев, купить",
	"data-ps-subs_ex_12_btn_buy": "Extra PS+ подписка 12 месяцев, купить",

	"data-ps-subs_dx_1_btn_buy": "Deluxe PS+ подписка 1 месяц, купить",
	"data-ps-subs_dx_3_btn_buy": "Deluxe PS+ подписка 3 месяцев, купить",
	"data-ps-subs_dx_12_btn_buy": "Deluxe PS+ подписка 12 месяцев, купить",

	"data-ps-subs_ea_1_btn_buy": "EA Play PS+ подписка 1 месяц, купить",
	"data-ps-subs_ea_12_btn_buy": "EA Play PS+ подписка 12 месяцев, купить",

	"data-back-Spotify": "Вернуться к Spotify подпискам",
	"data-back-Ps-subs": "Вернуться к Playstation подпискам",
};

export const getBotActions = (message: string) => {
	if (/data-cancel-payment:-:.+/.test(message)) {
		return "Отменить заказ";
	}
	const botMessage = queries[message];
	if (botMessage) {
		return botMessage;
	} else {
		return message;
	}
};
