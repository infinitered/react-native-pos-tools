import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface ReactDeviceInformation {
  Id: string;
  Name: string;
  Kind: string;
  IsDefault: boolean;
}

export interface DeviceInformationSpec extends TurboModule {
  getConstants(): {};

  /**
   * Enumerates all DeviceInformation objects.
   * @throws {Error}
   * @see https://learn.microsoft.com/en-us/uwp/api/windows.devices.enumeration.deviceinformation.findallasync?view=winrt-22621#windows-devices-enumeration-deviceinformation-findallasync
   */
  findAllAsync(): Promise<ReactDeviceInformation[]>;
}

export default TurboModuleRegistry.get<DeviceInformationSpec>(
  'DeviceInformation'
) as DeviceInformationSpec | null;
