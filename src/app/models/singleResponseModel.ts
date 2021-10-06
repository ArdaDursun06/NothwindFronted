import { ResponeseModel } from "./responseModel";

export interface SingleResponseModel<T> extends ResponeseModel{
   data:T
}