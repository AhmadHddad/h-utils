import { ConsoleRecord } from '../utils/types';

/**
 * @description A utility to record all logs 'error' | 'log' | 'info' | 'table' | 'warn', will save them to an object logRecord with time.
 * @example const logManager = new ConsoleRecorder();
 * console.log("foo");
 * logManager.logRecord.log // [{time:"123", value:["foo"]}]
 */
export default class ConsoleRecorder {
  private oldestLog = console.log;
  private oldestInfo = console.info;
  private oldestError = console.error;
  private oldestWarn = console.warn;
  private oldestTable = console.table;

  private _logRecord: ConsoleRecord = {
    error: [],
    info: [],
    log: [],
    table: [],
    warn: [],
  };

  constructor(options?: {
    error?: boolean;
    info?: boolean;
    log?: boolean;
    table?: boolean;
    warn?: boolean;
  }) {
    const {
      error = true,
      info = true,
      table = true,
      log = true,
      warn = true,
    } = options || {};

    error && this.recordError();
    info && this.recordInfo();
    log && this.recordLog();
    table && this.recordTable();
    warn && this.recordWarn();
  }

  recordLog = () => {
    const oldLog = console.log;
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
  };

  recordError = () => {
    const oldError = console.error;
    const that = this;
    console.error = function () {
      //@ts-ignore
      that._logRecord.error.push({
        time: new Date().getTime().toString(),
        value: Array.from(arguments),
      });
      //@ts-ignore
      return oldError.apply(console, arguments);
    };
  };

  recordInfo = () => {
    const oldInfo = console.info;
    const that = this;
    console.info = function () {
      //@ts-ignore
      that._logRecord.info.push({
        time: new Date().getTime().toString(),
        value: Array.from(arguments),
      });
      //@ts-ignore
      return oldInfo.apply(console, arguments);
    };
  };

  recordWarn = () => {
    const oldWarn = console.warn;
    const that = this;
    console.warn = function () {
      //@ts-ignore
      that._logRecord.warn.push({
        time: new Date().getTime().toString(),
        value: Array.from(arguments),
      });
      //@ts-ignore
      return oldWarn.apply(console, arguments);
    };
  };

  recordTable = () => {
    const oldTable = console.table;
    const that = this;
    console.table = function () {
      //@ts-ignore
      that._logRecord.table.push({
        time: new Date().getTime().toString(),
        value: Array.from(arguments),
      });
      //@ts-ignore
      return oldTable.apply(console, arguments);
    };
  };

  get logRecord() {
    return this._logRecord;
  }

  stopAllRecord = () => {
    console.error = this.oldestError;
    console.info = this.oldestInfo;
    console.log = this.oldestLog;
    console.warn = this.oldestWarn;
    console.table = this.oldestTable;
  };
}
