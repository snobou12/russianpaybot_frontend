export type PricePlanType={
    _id:string;
    fullname:string;
    name:string;
    price:number;
    pricePerMonth:number | null;
    query:string;
}
export interface IPrice {
    _id:string,
    title:string,
    plan:PricePlanType[]
  }