# @rnhooks/clipboard [![Build Status](https://travis-ci.com/react-native-hooks/clipboard.svg?branch=master)](https://travis-ci.com/react-native-hooks/clipboard) [![Maintainability](https://api.codeclimate.com/v1/badges/e82c7feaf06945de203d/maintainability)](https://codeclimate.com/github/react-native-hooks/clipboard/maintainability) <a href="https://github.com/pritishvaidya/react-native-hooks/clipboard/blob/master/README.md"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>

> React Native hook for Clipboard

```
import useClipboard from '@rnhooks/clipboard';

function App() {
  const [content, updateContent] = useClipboard();

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`Content: ${content}`}</Text>
      <Button title="Update" onPress={() => updateContent('test string')} />
    </View>
  );
}
```


### Output
| Name  | Type  | Default | Description |
| :------------ |---------------:| :---------------| :-----|
| content | String | `null` | Clipboard content string |
| updateContent | function | `() => {}` | Clipboard content string update function |

## Contribution
- [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.


## Questions

Feel free to [contact me](mailto:pritishvaidya94@gmail.com) or [create an issue](https://github.com/react-native-hooks/clipboard/issues/new)
