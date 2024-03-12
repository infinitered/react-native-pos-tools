import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface CashDrawerSpec extends TurboModule {
  /**
   * Returns the first available cash drawer.
   * @throws {Error} A device is not found.
   * @see https://learn.microsoft.com/en-us/uwp/api/windows.devices.pointofservice.cashdrawer.getdefaultasync?view=winrt-22621#windows-devices-pointofservice-cashdrawer-getdefaultasync
   */
  getDefaultAsync(): Promise<ReactCashDrawer>;
}

export default TurboModuleRegistry.get<CashDrawerSpec>(
  'CashDrawer'
) as CashDrawerSpec | null;

/** @link windows/ReactNativePosTools/NativeCashDrawer.cs */
export interface ReactCashDrawer {
  /** @see https://learn.microsoft.com/en-us/uwp/api/windows.devices.pointofservice.cashdrawer.deviceid?view=winrt-22621 */
  DeviceId: string;
}
