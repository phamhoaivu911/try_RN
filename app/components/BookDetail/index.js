import { setStatic } from 'recompose';
import { connect } from 'react-redux';
import React from 'react';
import { Text, View } from 'react-native';

import { publishDateSelector } from './state';
import { selectedBookTitleSelector } from '../BookList/state';

const BookDetail = ({ title, publishDate, author, publisher }) => (
  <View>
    <Text>{title}</Text>
    <Text>{publisher}</Text>
    <Text>{author}</Text>
    <Text>{publishDate}</Text>
  </View>
);

const connectToRedux = connect(state => ({
  title: selectedBookTitleSelector(state),
  // publisher: publisherSelector(state),
  // author: authorSelector(state),
  publishDate: publishDateSelector(state),
}));

const withTitle = setStatic('navigationOptions', {
  title: 'BookDetail',
});

export default withTitle(connectToRedux(BookDetail));
