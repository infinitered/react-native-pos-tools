import * as React from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';
import {
  useBarcodeScanner,
  useCashDrawer,
  useDeviceInformation,
  usePosPrinter,
} from 'react-native-pos-tools';

interface SectionProps {
  data: any;
  error: Error | undefined;
  loading: boolean;
}

const Section = ({ data, error, loading }: SectionProps) => {
  return (
    <View style={styles.section}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
    </View>
  );
};

export default function App() {
  const posPrinter = usePosPrinter();
  const deviceInformation = useDeviceInformation();
  const barcodeScanner = useBarcodeScanner();
  const cashDrawer = useCashDrawer();

  return (
    <View style={styles.container}>
      <SectionList<SectionProps>
        sections={[
          { title: 'POS Printer', data: [posPrinter] },
          { title: 'Barcode Scanner', data: [barcodeScanner] },
          { title: 'Cash Drawer', data: [cashDrawer] },
          { title: 'Device Information', data: [deviceInformation] },
        ]}
        renderItem={({ item }) => <Section {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  section: {
    marginVertical: 20,
  },
  header: {
    fontSize: 20,
  },
});
