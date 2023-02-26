
/**
 * @description Will generate a s4 Guid
 * @example generateGuid() => "741baba3-1efc-b52e-5d9c-75b1fc80395a"
 */
export default function generateGuid(): string {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    const result = `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
    return result;
  }
  
  