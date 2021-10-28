import { HttpRequest, HttpResponse } from '../protocols/Http';

import MissingParamError from '../errors/MissingParamError';
import { badRequest } from '../helpers/HttpHelper';

export default class SignUpController {
    private requiredFields: string[] = ['name', 'email', 'password'];

    handle = (httpRequest: HttpRequest): HttpResponse => {
        for (const field of this.requiredFields) {
            if (!httpRequest.body[`${field}`]) {
                return badRequest(new MissingParamError(field));
            }
        }
    }
}