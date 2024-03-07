
import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'Sans-serif',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    tab: {
      color:"#FFFFFF",
      fontWeight: 'bold',
      fontSize: 20,
    }
  };
  
  export default theme;