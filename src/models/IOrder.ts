type ProductData={
    product:string;
    amount:number;
}
export interface IOrder{
    _id:string;
    login:string;
    username:string;
    firstname:string;
    lastname:string;
    billId:string;
    promocode:string;
    productData:ProductData
    createdAt:string;
}