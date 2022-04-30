import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Pressable } from "react-native";
import { StackParamList } from "../typings/StackParamlist";

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Signup"
>




export default function Login () {

    const navigation = useNavigation<ScreenNavigationType>()

    function handleLogin(){

    }
    function goToSignup(){
        navigation.navigate('Signup');
    }

    let isFocused;

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={[styles.title, {textAlign:'center', fontSize:55}]}>MyApp</Text>
            </View>

            <Text style={styles.title}>Log in</Text>
            <View style={[styles.login]}>
                
                <View style={[styles.inputContainer, styles.elevation]}>
                    <Text style={styles.label}>E-MAIL</Text>
                    <TextInput style={styles.input} defaultValue="Samirali@live.dk"></TextInput>
                </View>
                
                <View style={[styles.inputContainer, styles.elevation]}>
                    <Text style={styles.label}>PASSWORD</Text>
                    <TextInput style={styles.input} defaultValue="123456789" secureTextEntry></TextInput>
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