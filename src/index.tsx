import ReactNativePosTools from './NativeReactNativePosTools';

export const multiply = (a: number, b: number): number => {
  const result = ReactNativePosTools?.multiply(a, b);

  if (result === undefined) {
    throw new Error('multiply returned null');
  }

  return result;
};
