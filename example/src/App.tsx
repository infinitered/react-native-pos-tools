import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { usePosPrinter } from 'react-native-pos-tools';

export default function App() {
  const { data, error, loading } = usePosPrinter();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>POS Printer</Text>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {data && <Text>DeviceId: {data.DeviceId}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  box: {
    width: 200,
    height: 400,
    marginVertical: 20,
  },
});
