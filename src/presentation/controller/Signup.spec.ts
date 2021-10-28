import SignUpController from './Signup';

describe('SignUp Controller', () => {
    test('Should return 400 if name is not provided', () => {
        const sut = new SignUpController();

        const httpRequest = {
            body: {
                name: 'any',
                email: 'any@gmail.com',
                password: '123456'
            }
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse.statusCode).toBe(400);
    });
});