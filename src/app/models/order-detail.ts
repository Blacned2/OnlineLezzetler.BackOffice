import { Product } from "./product";
export class OrderDetail{
    detailID:number;
    productID:number;
    products:Product;
    unitPrice:number;
    quantity:number;
    discount:number;
}