import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '100%',
    marginTop: 70,
  },
  inputBox : {
    width :"100%",
    paddingHorizontal: 20,
    marginBottom: 5
  },
  input : {
    height : 60,
    fontSize:20,
    paddingHorizontal : 20,
    borderColor : '#8c8b8b',
    borderWidth : 1,
    borderRadius: 7,
    backgroundColor: "white"
  },
  button : {
    backgroundColor : "#0366d6",
    height : 60,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center",
    marginHorizontal: 20
  }
});

const initialValues = {
  username: '',
  password: '',
};


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      </View>
      
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
      </View>
      
      <View>
        <Pressable onPress={formik.handleSubmit} style={styles.button}>
          <Text style={{color:"white", fontSize: 20}}>Sign in</Text>
        </Pressable>
      </View>
      
    </View>
  );
};

const SignIn = () => {
    
    const onSubmit = (values) => {
        console.log(values);
      };
  
    return <SignInForm onSubmit={onSubmit} />;
  };
  
  export default SignIn;