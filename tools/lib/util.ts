interface Logger {
    e(arg1?: any, arg2?: any, ang3?: any): void
    w(arg1?: any, arg2?: any, ang3?: any): void
    i(arg1?: any, arg2?: any, ang3?: any): void
    v(arg1?: any, arg2?: any, ang3?: any): void
}

const minLogLevel = 1;

export const logger_normal: Logger = {

    // e: ERROR (lvl=3)
    e: function () {
        if (minLogLevel > 3) return;
        const realArgs = ['ERROR'].concat(Array.from(arguments));
        console.error.apply(console, realArgs);
    },

    // w: WARNING (lvl=2)
    w: function () {
        if (minLogLevel > 2) return;
        const realArgs = ['WARN'].concat(Array.from(arguments));
        console.error.apply(console, realArgs);
    },

    // i: INFO (lvl=1)
    i: function () {
        if (minLogLevel > 1) return;
        const realArgs = ['INFO'].concat(Array.from(arguments));
        console.info.apply(console, realArgs);
    },

    // v: VERBOSE (lvl=0)
    v: function () {
        if (minLogLevel > 0) return;
        const realArgs = ['VERBOSE'].concat(Array.from(arguments));
        console.info.apply(console, realArgs);
    },
};

export const logger_silent: Logger = {
    w(arg1?: any, arg2?: any, ang3?: any) { },
    i(arg1?: any, arg2?: any, ang3?: any) { },
    v(arg1?: any, arg2?: any, ang3?: any) { },
    e(arg1?: any, arg2?: any, ang3?: any) { },
}

/**
 * @param fun: The function to be wrapper
 * @param interval: The interval to call *fun* once
 * @param releaseAfter: Delay between last call and release of timer
 *
 * @returns wrapped version of fun
 *
 * Warning: `fun` will be executed with `setTimeout`. Its unhandled exception may stop node process
 */
export function limit<T extends Function>(fun: T, interval: number, releaseAfter: number): T {

    let lastCallAt = -1;
    let lastCheck = 0;

    const queuedArgs = [] as any[][];

    function now() {
        return (new Date()).getTime();
    }

    // timer: run at 
    const checkTimer = setInterval(function () {
        const checkAt = lastCheck = now();

        const arg = queuedArgs.shift();

        if (arg !== undefined) {
            lastCallAt = checkAt;
            setTimeout(function () {
                fun.apply(null, arg);
            });
        }

        if (lastCheck - lastCallAt > releaseAfter) {
            clearInterval(checkTimer);
        }
    }, interval);

    // queue args and return immediately
    const decorated = function () {
        const args = Array.from(arguments);
        queuedArgs.push(args);
    }

    return decorated as any as T;
}

/**
 * A wrapper for Array.
 */
export class ArrayM<T> {
    constructor(private array: T[]) { }

    /**
     * >>= : taken from List Monad
     */
    bind<T2>(action: (v: T, index?: number, wholeArray?: T[]) => T2[]): ArrayM<T2> {
        let result = [] as T2[];

        this.array.forEach((v, i) => {
            const r = action(v, i, this.array);
            result = result.concat(r);
        })

        return new ArrayM(result);
    }

    /**
     * map: a instance of Functor fmap
     */
    map<T2>(iteratee: (v: T, index?: number, wholeArray?: T[]) => T2): ArrayM<T2> {
        return new ArrayM(this.array.map(iteratee));
    }

    /**
     * taken from Array#tap in ruby
     */
    tap<T2>(iteratee: (v: T[]) => T2[]): ArrayM<T2> {
        return new ArrayM(iteratee(this.array));
    }

    /**
     * unwraps ArrayM<T> and returns an array T[]
     */
    toArray() {
        return this.array.slice();
    }
}
