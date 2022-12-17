/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";
import UserService from "../../../services/UserService";
import PriceService from "../../../services/PriceService";
import PromoService from "../../../services/PromoService";
import OrderService from "../../../services/OrderService";

import ConversationService from "../../../services/ConversationService";
import { messageType } from "../../../models/IConversation";
import { PricePlanType } from "../../../models/IPrice";

//Admin auth
export const login = createAsyncThunk(
	"admin/login",
	async ([login, password]: [string, string], thunkApi) => {
		try {
			const response = await AuthService.login(login, password);

			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

export const checkAuth = createAsyncThunk(
	"admin/checkAuth",
	async (_, thunkApi) => {
		try {
			const response = await AuthService.checkAuth();

			return response.data;
		} catch (e: any) {
			console.log(e);
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

export const logout = createAsyncThunk("admin/logout", async (_, thunkApi) => {
	try {
		const response = await AuthService.logout();
		return response.data;
	} catch (e: any) {
		if (e.response?.data?.message) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
});

//users

export const getUsers = createAsyncThunk(
	"admin/getUsers",
	async (page: number, thunkApi) => {
		try {
			const response = await UserService.getUsers(page);
			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

export const searchUsers = createAsyncThunk(
	"admin/searchUsers",
	async (query: string, thunkApi) => {
		try {
			const response = await UserService.searchUsers(query);
			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

//conversations

export const getConversations = createAsyncThunk(
	"admin/getConversations",
	async (page: number, thunkApi) => {
		try {
			const response = await ConversationService.getConversations(page);
			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

export const getConversation = createAsyncThunk(
	"admin/getConversation",
	async (chatId: string, thunkApi) => {
		try {
			const response = await ConversationService.getConversation(chatId);
			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

export const sendMessage = createAsyncThunk(
	"admin/sendMessage",
	async ([chatId, message]: [string, messageType], thunkApi) => {
		try {
			const response = await ConversationService.sendMessage(chatId, message);
			return { msg: response.data, message };
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

//prices

export const getPrices = createAsyncThunk(
	"admin/getPrices",
	async (_, thunkApi) => {
		try {
			const response = await PriceService.getPrices();
			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

export const changePrice = createAsyncThunk(
	"admin/changePrice",
	async ([newPlan, title]: [PricePlanType, string], thunkApi) => {
		try {
			const response = await PriceService.changePrice(newPlan, title);
			return { msg: response.data, newPlan, title };
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

//promocodes

export const getPromos = createAsyncThunk(
	"admin/getPromos",
	async (_, thunkApi) => {
		try {
			const response = await PromoService.getPromos();
			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

export const createPromo = createAsyncThunk(
	"admin/createPromo",
	async (
		[title, discount, isOneTime, isDisabled]: [
			string,
			number,
			boolean,
			boolean
		],
		thunkApi
	) => {
		try {
			const response = await PromoService.createPromo(
				title,
				discount,
				isOneTime,
				isDisabled
			);
			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

export const deletePromo = createAsyncThunk(
	"admin/deletePromo",
	async (_id: string, thunkApi) => {
		try {
			const response = await PromoService.deletePromo(_id);
			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);

//Заказы

export const getOrders = createAsyncThunk(
	"admin/getOrders",
	async (page: number, thunkApi) => {
		try {
			const response = await OrderService.getOrders(page);
			return response.data;
		} catch (e: any) {
			if (e.response?.data?.message) {
				return thunkApi.rejectWithValue(e.response.data.message);
			}
		}
	}
);
