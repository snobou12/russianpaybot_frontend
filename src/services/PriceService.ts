import $api from "../api";
import {PricePlanType} from "../models/IPrice";
import {AxiosResponse} from "axios";

export default class PriceService{ 
  //Получить все цены услуг
   static async getPrices(): Promise<AxiosResponse> {
    return $api.get("/getPrices");
  }
  static async changePrice(newPlan:PricePlanType,title:string): Promise<AxiosResponse> {
    return $api.post("/changePrice",{newPlan,title});
  }
  
}