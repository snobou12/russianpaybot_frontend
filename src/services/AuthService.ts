import $api from "../api";
import {AxiosResponse} from "axios";

export default class AuthService{ 
   static async login(login: string, password: string): Promise<AxiosResponse> {
    return $api.post("/login", { login, password });
  }

  static async logout(): Promise<AxiosResponse> {
    return $api.post("/logout");
  }

  static async checkAuth(): Promise<AxiosResponse> {
    return $api.get("/refresh");
  }
}