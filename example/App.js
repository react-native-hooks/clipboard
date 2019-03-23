import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import useClipboard from '@rnhooks/clipboard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  type: {
    margin: 20,
    fontSize: 20,
  },
});

function App() {
  const [content, updateContent] = useClipboard();

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`Content: ${content}`}</Text>
      <Button title="Update" onPress={() => updateContent('test string')} />
    </View>
  );
}

export default App;
