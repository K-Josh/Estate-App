export const errorHandler = (statusCode, message) => {
    const error = new Error()
    const statusCode = statusCode
    error.message = message
    return error
}