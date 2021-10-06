import { ResponeseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponeseModel {
    data:T[];
}