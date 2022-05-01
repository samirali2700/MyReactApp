import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Pressable } from "react-native";
import { StackParamList } from "../typings/StackParamlist";


import { useSelector, useDispatch } from "react-redux";
import { signin } from "../store/features/user/userSlice";


type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Signup"
>




export default function Login () {

    const navigation = useNavigation<ScreenNavigationType>()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')



    useEffect(() => {
       setEmail('samirali@live.dk');
       setPassword('123456789')
    }, [])


    const User = useSelector((state:any) => state.user.loggedInUser);
    const dispatch = useDispatch();

    function handleLogin(){
       

        if(User ===  {}){
            console.log('empty');
        }
        else{ console.log('not empty')}

        //conditions for email and password
        if(email.length > 0){
            if(password.length > 0){
                dispatch(signin({email, password}))
            }
        }
    }

  
   



    function goToSignup(){
        navigation.navigate('Signup');
    }

    let isFocused;

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={[styles.title, {textAlign:'center', fontSize:55}]}>MyApp</Text>
                <Text>{User.email}</Text>
                <Text>{User.password}</Text>
            </View>

            <Text style={styles.title}>Log in</Text>
            <View style={[styles.login]}>
                
                <View style={[styles.inputContainer, styles.elevation]}>
                    <Text style={styles.label}>E-MAIL</Text>
                    <TextInput style={styles.input} onChangeText={setEmail} defaultValue={email}></TextInput>
                </View>
                
                <View style={[styles.inputContainer, styles.elevation]}>
                    <Text style={styles.label}>PASSWORD</Text>
                    <TextInput style={styles.input} onChangeText={setPassword} defaultValue={password} secureTextEntry></TextInput>
              </View>

       
              
            </View>
                <Text style={styles.link}>Forgot password?</Text>
                <TouchableOpacity        
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={{color:'#fff', fontSize:18, fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Don't have a user?  <Text style={styles.link} onPress={goToSignup}>Sign up</Text></Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        paddingTop:50,
        backgroundColor: '#fff'
    },
    logo:{
       // borderWidth:1,
       // borderColor:'#eee',
        height:152,
        marginBottom:25
    },
    title: {
        fontSize:26,
        fontWeight: "bold",
        color: '#000',
    },
    login:{
        justifyContent:'center',
        width:'100%',
        marginVertical: 25,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 12,
        textAlign:'center',
        marginVertical:35,
        color:'#999'
    },
    link:{
        fontSize: 14,
        textAlign:'center',
        marginVertical:35,
        color: '#0088ff',
    },
    inputContainer:{
        width:"100%",
        paddingVertical:15,
        borderRadius:2,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    input:{
        fontSize:22,
        color:'grey',
        paddingTop:2,
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000'
    },
    button: {
        marginTop:25,
        width: '100%',
        height:60,
        borderRadius: 5,
        backgroundColor: '#000',
        justifyContent: 'center',
        paddingLeft:25,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    elevation: {
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.3)',
    
    }
})