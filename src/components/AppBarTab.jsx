import {View,Text,Pressable} from 'react-native';
import { Link } from "react-router-native";

const AppBarTab = ({text,link}) => {
    return(<View>
            <Pressable>
              <Link to={link}>
                <Text style = {{color:'white', fontSize:18, padding:5}}>{text}</Text>
              </Link>
            </Pressable>
          </View>
    );
  };
  
  export default AppBarTab;