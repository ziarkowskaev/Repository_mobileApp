import {View,Text,Pressable} from 'react-native';


const AppBarTab = ({text}) => {
    return(<View>
            <Pressable>
              <Text style = {{color:'white', fontSize:18}}>{text}</Text>
            </Pressable>
          </View>
    );
  };
  
  export default AppBarTab;