import $api from "../api";
import {AxiosResponse} from "axios";

export default class UserService{ 
  //Получить всех пользователей
   static async getUsers(page:number): Promise<AxiosResponse> {
    return $api.get(`/getUsers?page=${page}`);
  }
  static async searchUsers(query:string): Promise<AxiosResponse> {
    return $api.get(`/searchUsers?query=${query}`);
  }
}