/** @format */

import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { adminPaths } from "../../../const/adminPaths";
import { IAdmin } from "../../../models/IAdmin";
import { IAllConversation } from "../../../models/IAllConversation";
import { IConversation, messageType } from "../../../models/IConversation";
import { IPrice, PricePlanType } from "../../../models/IPrice";
import { IPromo } from "../../../models/IPromo";
import { IUser } from "../../../models/IUser";
import {
	changePrice,
	checkAuth,
	createPromo,
	deletePromo,
	getConversation,
	getConversations,
	getPrices,
	getPromos,
	getUsers,
	login,
	logout,
	sendMessage,
} from "./ActionApCreator";
interface LoginPayloadType {
	admin: IAdmin;
	accessToken: string;
	refreshToken: string;
}
interface SendMessageType {
	msg: string;
	message: messageType;
}

interface ChangePriceType {
	msg: string;
	newPlan: PricePlanType;
	title: string;
}

interface AuthState {
	//navigation
	activeNav: number;
	//admin
	isLoadingAdmin: boolean;
	isAuth: boolean;
	admin: IAdmin;
	//users
	isLoadingUsers: boolean;
	users: IUser[];
	//conversations
	isLoadingConversations: boolean;
	conversations: IAllConversation[];
	//conversation
	isLoadingConversation: boolean;
	conversationErrorMessage: string;
	conversation: IConversation | Record<string, never>;
	//sendMessage
	isLoadingSending: boolean;
	sendingSuccessMessage: string;
	sendingErrorMessage: string;
	//prices
	isLoadingPrices: boolean;
	prices: IPrice[];
	//change price
	isLoadingChangingPrice: boolean;
	changingPriceSuccessMessage: string;
	changingPriceErrorMessage: string;
	//promocodes
	promocodes: IPromo[];
	isLoadingPromocodes: boolean;
	isLoadingCreatePromo: boolean;
	createPromoSuccessMessage: string;
	createPromoErrorMessage: string;
	isLoadingDeletePromo: boolean;
	deletePromoSuccessMessage: string;
	deletePromoErrorMessage: string;
}

const initialState: AuthState = {
	//navigation
	activeNav: 0,
	//admin
	isAuth: false,
	isLoadingAdmin: false,
	admin: {
		id: "",
		login: "",
	},
	//users
	isLoadingUsers: false,
	users: [],
	//conversations
	isLoadingConversations: false,
	conversations: [],
	//conversation
	isLoadingConversation: false,
	conversation: {},
	conversationErrorMessage: "",
	//sendMessage
	isLoadingSending: false,
	sendingSuccessMessage: "",
	sendingErrorMessage: "",
	//prices
	isLoadingPrices: false,
	prices: [],
	//changePrice
	isLoadingChangingPrice: false,
	changingPriceSuccessMessage: "",
	changingPriceErrorMessage: "",
	//promocodes
	//createPromo
	promocodes: [],
	isLoadingPromocodes: false,
	isLoadingCreatePromo: false,
	createPromoSuccessMessage: "",
	createPromoErrorMessage: "",
	isLoadingDeletePromo: false,
	deletePromoSuccessMessage: "",
	deletePromoErrorMessage: "",
};

export const apSlice = createSlice({
	name: "admin-panel",
	initialState,
	reducers: {
		changeActiveNav(state, action: PayloadAction<number>) {
			const id = action.payload;
			state.activeNav = id;
		},
		checkNavigationPath(state, action: PayloadAction<string>) {
			const path = action.payload;
			let id = adminPaths.findIndex(p => p === path);
			state.activeNav = id;
		},
	},
	extraReducers: {
		//admin
		[login.fulfilled.type]: (
			state,
			action: PayloadAction<LoginPayloadType>
		) => {
			state.isLoadingAdmin = false;
			localStorage.setItem("russianpaybot-token", action.payload.accessToken);
			state.admin = action.payload.admin;
			state.isAuth = true;
		},
		[login.pending.type]: state => {
			state.isLoadingAdmin = true;
		},
		[login.rejected.type]: state => {
			localStorage.removeItem("russianpaybot-token");
			state.admin = {
				id: "",
				login: "",
			};
			state.isAuth = false;
			state.isLoadingAdmin = false;
		},
		[checkAuth.fulfilled.type]: (
			state,
			action: PayloadAction<LoginPayloadType>
		) => {
			state.isLoadingAdmin = false;
			localStorage.setItem("russianpaybot-token", action.payload.accessToken);
			state.admin = action.payload.admin;
			state.isAuth = true;
		},
		[checkAuth.pending.type]: state => {
			state.isLoadingAdmin = true;
		},
		[checkAuth.rejected.type]: state => {
			localStorage.removeItem("russianpaybot-token");
			state.isLoadingAdmin = false;
			state.isAuth = false;
			state.admin = {
				id: "",
				login: "",
			};
		},

		[logout.fulfilled.type]: state => {
			localStorage.removeItem("russianpaybot-token");
			state.isLoadingAdmin = false;
			state.isAuth = false;
			state.admin = {
				id: "",
				login: "",
			};
		},
		[logout.pending.type]: state => {
			state.isLoadingAdmin = true;
		},
		[logout.rejected.type]: state => {
			state.isLoadingAdmin = false;
		},

		[logout.fulfilled.type]: state => {
			localStorage.removeItem("russianpaybot-token");
			state.isLoadingAdmin = false;
			state.isAuth = false;
			state.admin = {
				id: "",
				login: "",
			};
		},
		[logout.pending.type]: state => {
			state.isLoadingAdmin = true;
		},
		[logout.rejected.type]: state => {
			state.isLoadingAdmin = false;
		},
		//users
		//Получить всех пользователей
		[getUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.isLoadingUsers = false;
			state.users = action.payload;
		},
		[getUsers.pending.type]: state => {
			state.isLoadingUsers = true;
		},
		[getUsers.rejected.type]: state => {
			state.isLoadingUsers = false;
			state.users = [];
		},

		//conversations
		//Получить все диалоги пользователей

		[getConversations.fulfilled.type]: (
			state,
			action: PayloadAction<IAllConversation[]>
		) => {
			state.isLoadingConversations = false;
			state.conversations = action.payload;
		},
		[getConversations.pending.type]: state => {
			state.isLoadingConversations = true;
		},
		[getConversations.rejected.type]: state => {
			state.isLoadingConversations = false;
			state.conversations = [];
		},
		//Получить  диалог пользователя

		[getConversation.fulfilled.type]: (
			state,
			action: PayloadAction<IConversation>
		) => {
			state.isLoadingConversation = false;
			state.conversation = action.payload;
			state.conversationErrorMessage = "";
		},
		[getConversation.pending.type]: state => {
			state.isLoadingConversation = true;
		},
		[getConversation.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoadingConversation = false;
			state.conversation = {};
			state.conversationErrorMessage = action.payload;
		},
		//Отправить сообщение пользователю в бота
		[sendMessage.fulfilled.type]: (
			state,
			action: PayloadAction<SendMessageType>
		) => {
			state.sendingSuccessMessage = action.payload.msg;
			let prevMessages = [...current(state.conversation.conversation.messages)];
			let newMessages = [...prevMessages, action.payload.message];
			console.log(newMessages);
			state.conversation.conversation.messages = newMessages;
			state.sendingErrorMessage = "";
			state.isLoadingSending = false;
		},
		[sendMessage.pending.type]: state => {
			state.isLoadingSending = true;
		},
		[sendMessage.rejected.type]: (state, action: PayloadAction<string>) => {
			state.sendingErrorMessage = action.payload;
			state.sendingSuccessMessage = "";
			state.isLoadingSending = false;
		},
		//Цены
		//Получить все цены
		[getPrices.fulfilled.type]: (state, action: PayloadAction<IPrice[]>) => {
			state.isLoadingPrices = false;
			state.prices = action.payload;
		},
		[getPrices.pending.type]: state => {
			state.isLoadingPrices = true;
		},
		[getPrices.rejected.type]: state => {
			state.isLoadingPrices = false;
			state.prices = [];
		},

		[changePrice.fulfilled.type]: (
			state,
			action: PayloadAction<ChangePriceType>
		) => {
			state.isLoadingChangingPrice = false;
			state.changingPriceSuccessMessage = action.payload.msg;
			state.changingPriceErrorMessage = "";
			let prevPrices = [...current(state.prices)];
			let newPrices = [...prevPrices].map(price => {
				if (price.title === action.payload.title) {
					let prevPricePlan = [...price.plan];
					let newPricePlan = [...prevPricePlan].map(plan => {
						if (plan.query === action.payload.newPlan.query) {
							return action.payload.newPlan;
						} else {
							return { ...plan };
						}
					});
					return { ...price, plan: newPricePlan };
				} else {
					return { ...price };
				}
			});
			state.prices = newPrices;
		},
		[changePrice.pending.type]: state => {
			state.isLoadingChangingPrice = true;
		},
		[changePrice.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoadingChangingPrice = false;
			state.changingPriceErrorMessage = action.payload;
			state.changingPriceSuccessMessage = "";
		},
		//Промокоды
		//Получить все промокоды

		[getPromos.fulfilled.type]: (state, action: PayloadAction<IPromo[]>) => {
			state.isLoadingPromocodes = false;
			state.promocodes = action.payload;
		},
		[getPromos.pending.type]: state => {
			state.isLoadingPromocodes = true;
		},
		[getPromos.rejected.type]: state => {
			state.isLoadingPromocodes = false;
			state.promocodes = [];
		},
		//Создать новый промокод
		[createPromo.fulfilled.type]: (state, action: PayloadAction<IPromo>) => {
			state.isLoadingCreatePromo = false;
			state.createPromoSuccessMessage = "Promo created";
			state.createPromoErrorMessage = "";
			let prevPromos = [...current(state.promocodes)];
			let newPromos = [...prevPromos, action.payload];
			state.promocodes = newPromos;
		},
		[createPromo.pending.type]: state => {
			state.isLoadingCreatePromo = true;
		},
		[createPromo.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoadingCreatePromo = false;
			state.createPromoSuccessMessage = "";
			state.createPromoErrorMessage = action.payload;
		},

		[deletePromo.fulfilled.type]: (state, action: PayloadAction<string>) => {
			state.isLoadingDeletePromo = false;
			state.deletePromoSuccessMessage = "Промокод успешно удален";
			state.deletePromoErrorMessage = "";
			let prevPromos = [...current(state.promocodes)];
			let newPromos = [...prevPromos].filter(
				promo => promo._id !== action.payload
			);
			state.promocodes = newPromos;
		},
		[deletePromo.pending.type]: state => {
			state.isLoadingDeletePromo = true;
		},
		[deletePromo.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoadingDeletePromo = false;
		},
	},
});

export const { changeActiveNav, checkNavigationPath } = apSlice.actions;

export default apSlice.reducer;
