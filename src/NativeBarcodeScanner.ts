import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface BarcodeScannerSpec extends TurboModule {
  /**
   * Returns the first available barcode scanner.
   * @throws {Error} A device is not found.
   * @see https://learn.microsoft.com/en-us/uwp/api/windows.devices.pointofservice.barcodescanner.getdefaultasync?view=winrt-22621#windows-devices-pointofservice-barcodescanner-getdefaultasync
   */
  getDefaultAsync(): Promise<ReactBarcodeScanner>;
}

export default TurboModuleRegistry.get<BarcodeScannerSpec>(
  'BarcodeScanner'
) as BarcodeScannerSpec | null;

/** @link windows/ReactNativePosTools/NativeBarcodeScanner.cs */
export interface ReactBarcodeScanner {
  /** @see https://learn.microsoft.com/en-us/uwp/api/windows.devices.pointofservice.barcodescanner.deviceid?view=winrt-22621 */
  DeviceId: string;
}
