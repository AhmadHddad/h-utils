import { LogRecord } from "../utils/types";

/**
 * @description A utility to record all logs 'error' | 'log' | 'info' | 'table' | 'warn', will save them to an object logRecord with time.
 * @example const logManager = new LogManager();
 * console.log("foo");
 * logManager.logRecord.log // [{time:"123", value:["foo"]}]
 */
export default class LogManager {
  private _logRecord: LogRecord = {
    error: [],
    info: [],
    log: [],
    table: [],
    warn: [],
  };

  constructor() {
    const oldLog = console.log;
    const oldInfo = console.info;
    const oldError = console.error;
    const oldTable = console.table;
    const oldWarn = console.warn;
    const that = this;

    console.log = function () {
      //@ts-ignore
      that._logRecord.log.push({
        time: new Date().getTime().toString(),
        value: Array.from(arguments),
      });
      //@ts-ignore
      return oldLog.apply(console, arguments);
    };

    console.error = function () {
      //@ts-ignore
      that._logRecord.error.push({
        time: new Date().getTime().toString(),
        value: Array.from(arguments),
      });
      //@ts-ignore
      return oldError.apply(console, arguments);
    };

    console.info = function () {
      //@ts-ignore
      that._logRecord.info.push({
        time: new Date().getTime().toString(),
        value: Array.from(arguments),
      });
      //@ts-ignore
      return oldInfo.apply(console, arguments);
    };

    console.warn = function () {
      //@ts-ignore
      that._logRecord.warn.push({
        time: new Date().getTime().toString(),
        value: Array.from(arguments),
      });
      //@ts-ignore
      return oldWarn.apply(console, arguments);
    };

    console.table = function () {
      //@ts-ignore
      that._logRecord.table.push({
        time: new Date().getTime().toString(),
        value: Array.from(arguments),
      });
      //@ts-ignore
      return oldTable.apply(console, arguments);
    };
  }

  get logRecord() {
    return this._logRecord;
  }
}
