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