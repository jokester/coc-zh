/**
 * TypeScript declaration file for libtidy v0.3
 * 
 * @author Wang Guan <momocraft@gmail.com>
 */

declare module 'libtidy' {
    export = LibTidyModule

    /**
     *  Callback convention
     */
    interface TidyResult {
        /**
         * errlog contains the error messages generated during the run,
         * formatted as a string including a trailing newline.
         */
        errlog: string
        /**
         * contains the output buffer if output was generated.
         * The property is unset if generating output was not part of the method
         * in question, or null if no output was generated due to errors.
         */
        output?: Buffer
    }

    /**
     * The document is assumed to be a buffer or a string.
     * Anything else will be converted to a string and then turned into
     * a buffer.
     */
    type TidyDocument = string | Buffer | any

    module Options {

        // TODO
        type OptKey = "1" | 1

        type OptValue = 1 | 0 | boolean

        type TidyOptionByName = "1" | "2"

        type TidyOptionByID = 1 | 2

        /**
         * An available option
         */
        interface TidyOption {
            // TODO name, category, id, type, readOnly, default, pickList
        }

        type OptionKey = TidyOption | TidyOptionByName | TidyOptionByID
 
        interface TidyOptionConstructor {
            new (): TidyOption
        }

        interface OptionDictionary {
            
        }

    }
    /**
     * Callback convention for async APIs
     */
    interface TidyCB {
        (err?: Error, res?: TidyResult): void
    }

    /**
     * High-level functions automate the most common workflows.
     */
    module HighLevel {

        /**
         * The document is assumed to be a buffer or a string.
         * Anything else will be converted to a string and then
         * turned into a buffer.
         */
        interface TidyBufferStatic {
            (document: string, options: Options.TidyOptions,
                callback: TidyCB): void

            (document: string, callback: TidyCB): void
        }
    }

    module BasicWorkflow {

        /**
         * Central object for dealing with the library at a low level
         */
        interface TidyDoc {
            optGet(key: OptKey): boolean
            optSet(key: OptKey, value: OptValue): void
            options: TidyOptions

            // Sync calls
            parseBufferSync(document: TidyDocument): string
            cleanAndRepairSync(): string
            runDiagnosticsSync(): string
            saveBufferSync(): Buffer
            getErrorLog(): string

            // Async calls
            parseBuffer(document: TidyDocument, callback: TidyCB): void
            cleanAndRepair(callback: TidyCB): void
            runDiagnostics(callback: TidyCB): void
            saveBuffer(callback: TidyCB): void
        }

        /**
         * Constructor
         * (Can be used with `new` or normal call)
         */
        interface TidyDocConstructor {
            new (): TidyDoc
            (): TidyDoc
        }
    }

    // commonjs module returned by `require('libtidy')`
    module LibTidyModule {
        export const tidyBuffer: HighLevel.TidyBufferStatic
        export const TidyDoc: BasicWorkflow.TidyDocConstructor
        export const TidyOption: Options.TidyOptionConstructor
    }

    // a large module for options and possible values


}