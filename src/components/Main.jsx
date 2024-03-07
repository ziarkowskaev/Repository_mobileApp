import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import {StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;