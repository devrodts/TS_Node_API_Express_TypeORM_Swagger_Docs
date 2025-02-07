export enum StatusCodeErrorEnum{
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}
export class StatusCodeError extends Error {
    constructor(message: string, public statusCode: StatusCodeErrorEnum) {
        super(message)
        this.statusCode = statusCode
    }
}