import $api from "../api";
import {AxiosResponse} from "axios";

export default class UserService{ 
  //Получить всех пользователей
   static async getUsers(): Promise<AxiosResponse> {
    return $api.get("/getUsers");
  }
}