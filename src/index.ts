import React from 'react';
import NativePosPrinter, { type ReactPosPrinter } from './NativePosPrinter';
import ReactNativePosTools from './NativeReactNativePosTools';
import type { ReactDeviceInformation } from './NativeDeviceInformation';
import NativeDeviceInformation from './NativeDeviceInformation';

class MethodUndefinedError extends Error {
  constructor({
    moduleName,
    methodName,
  }: {
    moduleName: string;
    methodName: string;
  }) {
    super(
      `${moduleName} ${methodName} method is not available. Please make sure you have linked the library properly.`
    );
  }
}

export const multiply = (a: number, b: number): number => {
  if (ReactNativePosTools?.multiply === undefined) {
    throw new MethodUndefinedError({
      moduleName: 'ReactNativePosTools',
      methodName: 'multiply',
    });
  }

  const result = ReactNativePosTools.multiply(a, b);

  return result;
};

export const getDefaultAsync = async (): Promise<ReactPosPrinter> => {
  if (NativePosPrinter?.getDefaultAsync === undefined) {
    throw new MethodUndefinedError({
      moduleName: 'PosPrinter',
      methodName: 'getDefaultAsync',
    });
  }

  return NativePosPrinter.getDefaultAsync();
};

export const findAllAsync = async (): Promise<ReactDeviceInformation[]> => {
  if (NativeDeviceInformation?.findAllAsync === undefined) {
    throw new MethodUndefinedError({
      moduleName: 'DeviceInformation',
      methodName: 'findAllAsync',
    });
  }

  return NativeDeviceInformation.findAllAsync();
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

export const useDeviceInformation = () => {
  const [data, setData] = React.useState<
    ReactDeviceInformation[] | undefined
  >();
  const [error, setError] = React.useState<Error | undefined>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    findAllAsync()
      .then((devices) => {
        setData(devices);
        console.log(devices);
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
