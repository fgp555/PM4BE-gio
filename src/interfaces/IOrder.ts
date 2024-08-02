import  IProduct  from "./IProduct";
export interface IOrder{
    id: number;
    date: string;
    products: IProduct[];
    status: string;
}