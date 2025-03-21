type Success<T> = {
    data: T;
    error?: never;
};

type Failure<E> = {
    data?: never;
    error: E;
};

type Result<T, E = Error> = Success<T> | Failure<E>;

type MaybePromise<T> = T | Promise<T>;


/**
 * @description -- a function that takes a promise or a function that returns a promise and returns a promise that resolves to a Result object containing the data or error.
 * @example
 * const result = await tryCatch(() => {
 *     throw new Error('Error');
 * }); // { error: Error: Error, data: null }
 * 
 * @example
 * const result = await tryCatch(() => {
 * return Promise.resolve('Data');
 * }); // { data: 'Data' }
 */
export default function tryCatch<T, E = Error>(
    arg: Promise<T> | (() => MaybePromise<T>)
): Result<T, E> | Promise<Result<T, E>> {
    if (typeof arg === 'function') {
        try {
            const result = arg();

            return result instanceof Promise ? tryCatch(result) : { data: result };
        } catch (error) {
            return { error: error as E };
        }
    }

    return arg
        .then((data) => ({ data }))
        .catch((error) => ({ error: error as E }));
}

