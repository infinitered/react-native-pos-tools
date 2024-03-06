import React from 'react';
import NativePosPrinter, { type ReactPosPrinter } from './NativePosPrinter';
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

export const getDefaultAsync = async (): Promise<ReactPosPrinter> => {
  if (NativePosPrinter?.getDefaultAsync === undefined) {
    throw new MethodUndefinedError('getDefaultAsync');
  }

  return NativePosPrinter.getDefaultAsync();
};

export const usePosPrinter = () => {
  const [data, setData] = React.useState<ReactPosPrinter | undefined>();
  const [error, setError] = React.useState<Error | undefined>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    getDefaultAsync()
      .then((printer) => {
        setData(printer);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    error,
    loading,
  };
};
