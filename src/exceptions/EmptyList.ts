export class EmptyList extends Error {
    constructor(...args: any[]) {
        super(...args)
        Error.captureStackTrace(this, EmptyList)
    }
}