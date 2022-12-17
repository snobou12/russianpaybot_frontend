import $api from "../api";
import {AxiosResponse} from "axios";

export default class OrderService{ 
  //Получить все заказы
   static async getOrders(page:number): Promise<AxiosResponse> {
    return $api.get(`/getOrders?page=${page}`);
  }
}