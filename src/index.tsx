import ReactNativePosTools from './NativeReactNativePosTools';

class MethodUndefinedError extends Error {
  constructor(methodName: string) {
    super(
      `ReactNativePosTools ${methodName} method is not available. Please make sure you have linked the library properly.`
    );
  }
}

export const multiply = (a: number, b: number): number => {
  if (ReactNativePosTools?.multiply === undefined) {
    throw new MethodUndefinedError('multiply');
  }

  const result = ReactNativePosTools.multiply(a, b);

  return result;
};
