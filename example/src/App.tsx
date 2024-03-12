import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  TextInput,
  FlatList,
} from 'react-native';
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

const DeviceInformation = () => {
  const { data, loading, error } = useDeviceInformation();
  const [search, setSearch] = React.useState('');
  const filteredData = React.useMemo(
    () =>
      data?.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
      ),
    [data, search]
  );

  return (
    <View style={{ height: '50%' }}>
      <Text style={[styles.header, { marginBottom: 20 }]}>
        Device Information
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={setSearch}
        value={search}
        placeholder="Search"
      />
      <View style={styles.section}>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <Text>{JSON.stringify(item, null, 2)}</Text>
          )}
          keyExtractor={(item) => item.Id}
        />
      </View>
    </View>
  );
};

export default function App() {
  const posPrinter = usePosPrinter();
  const barcodeScanner = useBarcodeScanner();
  const cashDrawer = useCashDrawer();

  return (
    <View style={styles.container}>
      <SectionList<SectionProps>
        sections={[
          { title: 'POS Printer', data: [posPrinter] },
          { title: 'Barcode Scanner', data: [barcodeScanner] },
          { title: 'Cash Drawer', data: [cashDrawer] },
        ]}
        renderItem={({ item }) => <Section {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      <DeviceInformation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  section: {
    marginVertical: 20,
  },
  header: {
    fontSize: 20,
  },
});
