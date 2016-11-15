interface Logger {
    w(arg1?: any, arg2?: any, ang3?: any): void
    i(arg1?: any, arg2?: any, ang3?: any): void
    v(arg1?: any, arg2?: any, ang3?: any): void
    e(arg1?: any, arg2?: any, ang3?: any): void
}

export const logger_normal: Logger = {

    // w: WARNING
    w: function () {
        const realArgs = ['WARN'].concat(Array.from(arguments));
        console.error.apply(console, realArgs);
    },
    // i: INFO
    i: console.info.bind(console),
    // v: VERBOSE
    v: function () {
        if (2 > 2) {
            console.debug.apply(console, arguments);
        }
    },
    e: function () {
        const realArgs = ['ERROR'].concat(Array.from(arguments));
        console.error.apply(console, realArgs);
    }
};

export const logger_silent: Logger = {
    w(arg1?: any, arg2?: any, ang3?: any) { },
    i(arg1?: any, arg2?: any, ang3?: any) { },
    v(arg1?: any, arg2?: any, ang3?: any) { },
    e(arg1?: any, arg2?: any, ang3?: any) { },
}

/**
 * Warning: unhandled exception thrown by `fun` may stop node process
 */
export function limit<T extends Function>(fun: T, interval: number, releaseAfter: number): T {

    let releaseTimer: number = null;
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