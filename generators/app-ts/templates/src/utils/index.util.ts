import { SQLError } from "../types/index";
import hexoid from "hexoid";

// 生成指定位数的十六进制随机数
export const useHexiod = (digit: number) => {
  return {
    create: () => hexoid(digit)(),
  };
};
export const exec = async (promise: Promise<any>) => {
  try {
    const res = await promise;
    return [null, res];
  } catch (err) {
    return [err];
  }
};

export const sqlErr = (message: string, site: string): SQLError => {
  return { message, site, code: 500 };
};
