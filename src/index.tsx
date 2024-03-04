import ReactNativePosTools from './NativeReactNativePosTools';

export const multiply = (a: number, b: number): number => {
  if (ReactNativePosTools == null) {
    throw new Error(
      'ReactNativePosTools native module was not loaded properly'
    );
  }

  return ReactNativePosTools.multiply(a, b);
};
