import { connect } from 'react-redux';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import React from 'react';

import { setSelectedBookAC } from './state';
import { navigateTo } from '../../navigation/NavigationService';

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

const BookItem = ({ item, setSelectedBook }) => (
  <TouchableHighlight
    style={styles.itemContainer}
    onPress={() => {
      setSelectedBook(item.title);
      navigateTo('BookDetail');
    }}
    underlayColor="gray"
  >
    <Text>{item.title}</Text>
  </TouchableHighlight>
);

export default connect(
  null,
  { setSelectedBook: setSelectedBookAC }
)(BookItem);
