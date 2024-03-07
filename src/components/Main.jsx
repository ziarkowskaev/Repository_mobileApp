import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import {StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    fontFamily: theme.fonts.main
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;