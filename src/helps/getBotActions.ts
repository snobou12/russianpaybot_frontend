/** @format */
type query = {
	[name: string]: string;
};
const queries: query = {
	"data-spotify_btn": "Spotify Premium",
	"data-spotify_1_btn": "Индивидуальная подписка Spotify 1 месяц",
	"data-spotify_3_btn": "Индивидуальная подписка Spotify 3 месяца",
	"data-spotify_6_btn": "Индивидуальная подписка Spotify 6 месяцев",
	"data-spotify_12_btn": "Индивидуальная подписка Spotify 12 месяцев",
	"data-spotify_1_btn_buy": "Индивидуальная подписка Spotify 1 месяц, купить",
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

	"data-back": "Вернуться в меню",
	"data-ps_subs_btn": "Playstation Подписки - Игры",
	"data-discord_nitro_btn": "Discord Nitro",
	"data-discord_nitro_1_btn": "Discord Nitro 1 месяц",
	"data-discord_nitro_12_btn": "Discord Nitro 12 месяцев",
	"data-discord_nitro_1_btn_buy": "Discord Nitro 1 месяц, купить",
	"data-discord_nitro_12_btn_buy": "Discord Nitro 12 месяцев, купить",
	"data-epic_games_btn": "Epic Games",
	"data-epic_games_fall_guys_btn": "Epic Games Fall Guys",
	"data-epic_games_fortnite_btn": "Epic Games Fornite",
	"data-epic_games_fortnite_1000_btn_buy": "Fornite, 1000 B-баксов, купить",
	"data-epic_games_fortnite_2800_btn_buy": "Fornite, 2800 B-баксов, купить",
	"data-epic_games_fortnite_5000_btn_buy": "Fornite, 5000 B-баксов, купить",
	"data-epic_games_fortnite_13500_btn_buy": "Fornite, 13500 B-баксов, купить",
	"data-epic_games_fall_guys_1000_btn_buy": "Fall Guys, 1000 шмяксов, купить",
	"data-epic_games_fall_guys_2800_btn_buy": "Fall Guys, 2800 шмяксов, купить",
	"data-epic_games_fall_guys_5000_btn_buy": "Fall Guys, 5000 шмяксов, купить",
	"data-epic_games_fall_guys_13500_btn_buy": "Fall Guys, 13500 шмяксов, купить",

	"data-csgo_faceit_btn": "Faceit Premium",
	"data-csgo_faceit_1_btn": "Faceit Premium 1 месяц",
	"data-csgo_faceit_1_btn_buy": "Faceit Premium 1 месяц, купить",
	"data-apple_top_up_btn": "Apple пополнение",
	"data-promocode": "Ввести промокод меню",
	"data-enter-promocode": "Ввести промокод",
};

export const getBotActions = (message: string) => {
	const botMessage = queries[message];
	if (botMessage) {
		return botMessage;
	} else {
		return message;
	}
};
