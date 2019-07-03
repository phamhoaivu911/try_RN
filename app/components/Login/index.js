import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { navigateTo } from '../../navigation/NavigationService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});

// TouchableNativeFeeback -> android
// TouchableOpacity ->
// TouchableHighlight ->
// TouchableWithoutFeeback -> k nen xai

const Login = () => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigateTo('MainStack')}
    >
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  </View>
);

export default Login;
