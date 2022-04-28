import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "./auth"
import DrawerNavigator from "./index.drawer"

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Start" component={DrawerNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
