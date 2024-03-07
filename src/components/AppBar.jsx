import { View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    color:"#FFFFFF",
    fontWeight: 'bold',
    fontSize: 20,
    height:100
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}><AppBarTab text='Repositories' /></View>;
};

export default AppBar;