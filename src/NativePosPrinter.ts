import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface PosPrinterSpec extends TurboModule {
  /**
   * Gets the default paired or locally-connected printer.
   * @throws {Error} If no printer is found.
   * @see https://learn.microsoft.com/en-us/uwp/api/windows.devices.pointofservice.posprinter.getdefaultasync?view=winrt-22621#windows-devices-pointofservice-posprinter-getdefaultasync
   */
  getDefaultAsync(): Promise<ReactPosPrinter>;
}

export default TurboModuleRegistry.get<PosPrinterSpec>(
  'PosPrinter'
) as PosPrinterSpec | null;

/** @link windows/ReactNativePosTools/NativePOSPrinter.cs */
export interface ReactPosPrinter {
  /** @see https://learn.microsoft.com/en-us/uwp/api/windows.devices.pointofservice.posprinter.deviceid?view=winrt-22621#windows-devices-pointofservice-posprinter-deviceid */
  DeviceId: string;
}
