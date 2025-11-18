import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../src/screens/HomeScreen";
import { CuadradoScreen } from "../src/screens/CuadradoScreen";
import { DivisionAScreens } from "../src/screens/DivisionAScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CincoScreen } from "../src/screens/CincoScreen";
import { PromedioScreen } from "../src/screens/PromedioScreen";
import { SumaAScreen } from "../src/screens/SumaAScreen";

/// STACK
const Stack = createNativeStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
    );
}

/// Bottom Tabs
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Cuadrado" component={CuadradoScreen} 
            options={{ headerShown: false }} />
            <Tab.Screen name="Division" component={DivisionAScreens}
            options={{ headerShown: false }} />
            <Tab.Screen name="Cinco" component={CincoScreen} 
            options={{ headerShown: false }}/>
            <Tab.Screen name="Promedio" component={PromedioScreen}
            options={{ headerShown: false }} />
            <Tab.Screen name="Suma" component={SumaAScreen}
            options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default function Navegador() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}