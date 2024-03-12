import React from 'react';
import NativePosPrinter, { type ReactPosPrinter } from './NativePosPrinter';
import ReactNativePosTools from './NativeReactNativePosTools';
import type { ReactDeviceInformation } from './NativeDeviceInformation';
import NativeDeviceInformation from './NativeDeviceInformation';
import NativeBarcodeScanner, {
  type ReactBarcodeScanner,
} from './NativeBarcodeScanner';
import NativeCashDrawer, { type ReactCashDrawer } from './NativeCashDrawer';

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

export const posPrinter = {
  getDefaultAsync: async (): Promise<ReactPosPrinter> => {
    if (NativePosPrinter?.getDefaultAsync === undefined) {
      throw new MethodUndefinedError({
        moduleName: 'PosPrinter',
        methodName: 'getDefaultAsync',
      });
    }

    return NativePosPrinter.getDefaultAsync();
  },
};

export const usePosPrinter = () => {
  const [data, setData] = React.useState<ReactPosPrinter | undefined>();
  const [error, setError] = React.useState<Error | undefined>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    posPrinter
      .getDefaultAsync()
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

export const deviceInformation = {
  findAllAsync: async (): Promise<ReactDeviceInformation[]> => {
    if (NativeDeviceInformation?.findAllAsync === undefined) {
      throw new MethodUndefinedError({
        moduleName: 'DeviceInformation',
        methodName: 'findAllAsync',
      });
    }

    return NativeDeviceInformation.findAllAsync();
  },
};

export const useDeviceInformation = () => {
  const [data, setData] = React.useState<
    ReactDeviceInformation[] | undefined
  >();
  const [error, setError] = React.useState<Error | undefined>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    deviceInformation
      .findAllAsync()
      .then((devices) => {
        setData(devices);
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

export const barcodeScanner = {
  getDefaultAsync: async () => {
    if (NativeBarcodeScanner?.getDefaultAsync === undefined) {
      throw new MethodUndefinedError({
        moduleName: 'BarcodeScanner',
        methodName: 'getDefaultAsync',
      });
    }

    return NativeBarcodeScanner.getDefaultAsync();
  },
};

export const useBarcodeScanner = () => {
  const [data, setData] = React.useState<ReactBarcodeScanner | undefined>();
  const [error, setError] = React.useState<Error | undefined>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    barcodeScanner
      .getDefaultAsync()
      .then((scanner) => {
        setData(scanner);
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

export const cashDrawer = {
  getDefaultAsync: async () => {
    if (NativeCashDrawer?.getDefaultAsync === undefined) {
      throw new MethodUndefinedError({
        moduleName: 'CashDrawer',
        methodName: 'getDefaultAsync',
      });
    }

    return NativeCashDrawer.getDefaultAsync();
  },
};

export const useCashDrawer = () => {
  const [data, setData] = React.useState<ReactCashDrawer | undefined>();
  const [error, setError] = React.useState<Error | undefined>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    cashDrawer
      .getDefaultAsync()
      .then((drawer) => {
        setData(drawer);
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
