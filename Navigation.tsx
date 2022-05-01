import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View, StyleSheet } from "react-native";

//Screens
import Login from "./screens/Login";
import Signup from "./screens/Signup";
//Private Screens
import Home from "./screens/PrivateScreens/Home";
import { useSelector } from "react-redux";


const Stack = createNativeStackNavigator();

function MyStack(){
    
    const User = useSelector((state:any) => state.user.loggedInUser)
    const isLoggedIn = useSelector((state:any) => state.user.loggedIn)


    console.log(isLoggedIn)

    let [isSignedIn, setisSignedIn] = React.useState(false);
    let isLoading = false;

 

    if(isLoading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size={65 || 'large'} color="#0088ff"></ActivityIndicator>
            </View>
        )
    }

    return(
        isSignedIn ? (
            <>
            <Stack.Navigator screenOptions={ {headerShown: false}}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
            </Stack.Navigator>
            </>
        ) : (
            <>
             <Stack.Navigator screenOptions={ {headerShown: false}}>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Signup" component={Signup} options={{animationTypeForReplace: isSignedIn ? 'push' : 'pop'}}></Stack.Screen>
            </Stack.Navigator>
        </>
        )
    )
}


export default function Navigation(){
    return(
        <NavigationContainer>
            {MyStack()}
            {/* <Stack.Navigator >
            </Stack.Navigator>             */}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})