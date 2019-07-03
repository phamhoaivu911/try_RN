import { values } from 'lodash/fp';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import React from 'react';

import BookList from './BookList';
import {
  booksDataSelector,
  fetchBooksAC,
  isFetchingBooksSelector,
} from '../apiCalls/list';

class Home extends React.Component {
  static navigationOptions() {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    };
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <View>
        {this.props.isFetching ? (
          <ActivityIndicator />
        ) : (
          <BookList books={this.props.books} />
        )}
      </View>
    );
  }
}

export default connect(
  state => ({
    books: values(booksDataSelector(state)),
    isFetching: isFetchingBooksSelector(state),
  }),
  { fetchBooks: fetchBooksAC }
)(Home);
