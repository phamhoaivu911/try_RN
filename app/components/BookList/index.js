import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';

import BookItem from './BookItem';

const renderItem = ({ item }) => <BookItem item={item} />;

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
  },
});

const SeparatorComponent = () => <View style={styles.separator} />;
const BookList = ({ books = [] }) => (
  <FlatList
    data={books}
    renderItem={renderItem}
    ItemSeparatorComponent={SeparatorComponent}
  />
);

export default BookList;
