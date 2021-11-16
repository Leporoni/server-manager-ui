import { Server } from "./server";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    messagem: string;
    developerMessage: string;
    data: { servers?: Server[], server?: Server };
}