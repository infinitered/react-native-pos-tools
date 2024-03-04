import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getConstants(): {};

  multiply(a: number, b: number): number;
}

export default TurboModuleRegistry.get<Spec>(
  'ReactNativePosTools'
) as Spec | null;
