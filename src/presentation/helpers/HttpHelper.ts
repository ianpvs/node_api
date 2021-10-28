import { HttpResponse } from '../protocols/Http';

export const badRequest = (body: Error): HttpResponse => ({
    statusCode: 400,
    body
});