export enum StatusCodeErrorEnum{
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}
export class StatusCodeError extends Error {
    constructor(message: string, public statusCodeError?: StatusCodeErrorEnum) {
        super(message)
        this.message = message
        this.statusCodeError = statusCodeError ?? StatusCodeErrorEnum.INTERNAL_SERVER_ERROR
    }

}