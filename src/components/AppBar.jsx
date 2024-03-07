import { View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    color:"#FFFFFF",
    fontWeight: 'bold',
    fontSize: 20,
    height:100,
    
  },
  scrolling: {
    flexDirection: 'row',
  }
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
            <ScrollView horizontal>{
              <View style={styles.scrolling}>
                <AppBarTab text='Repositories' link ='/'/>
                <AppBarTab text='Sign In' link ='/signin'/>
              </View>
            }</ScrollView>
            
          </View>;
};

export default AppBar;