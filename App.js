import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orientation from "react-native-orientation-locker";
import MenuBar from "./src/components/MenuBar";
import Icon from "react-native-vector-icons/FontAwesome5";
import ProductDetail from "./src/views/ProductDetail";
import Profile from "./src/views/Profile";
import Login from "./src/views/Login";
import Home from "./src/views/Home";
import FavoriteProduct from "./src/views/FavoriteProduct";
import Cart from "./src/views/Cart";
import Buy from "./src/views/Buy";
import CategoryView from "./src/views/CategoryView";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <MenuBar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { marginLeft: -20 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon name="user" size={size} color={color} solid />
          ),
          rawerLabel: "Profile",
        }}
      />
      <Drawer.Screen
        name="FavoriteProduct"
        component={FavoriteProduct}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon name="heart" size={size} color={color} solid />
          ),
          drawerLabel: "Favorite Product",
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon name="shopping-cart" size={size} color={color} solid />
          ),
          drawerLabel: "Cart",
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon name="sign-out-alt" size={size} color={color} />
          ),
          drawerLabel: "Sign out",
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Buy" component={Buy} />
        <Stack.Screen name="CategoryView" component={CategoryView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
