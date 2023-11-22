/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import MoreScreen from './src/screens/MoreScreen';
import CartScreen from './src/screens/CartScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#8891A5', // Set the inactive tab color
        tabBarActiveTintColor: '#1E222B', // Set the active tab color
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          lineHeight: 16,
          paddingBottom: 10,
        },
        tabBarStyle: {
          height: 80,
          padding: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                padding: focused ? 8 : 0,
                backgroundColor: focused ? '#1E222B' : 'white',
                borderRadius: focused ? 50 : 0,
              }}>
              <Image
                source={require('./assets/home.png')}
                style={[
                  styles.image,
                  {
                    tintColor: focused ? '#F9B023' : 'black',
                  },
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                padding: focused ? 8 : 0,
                backgroundColor: focused ? '#1E222B' : 'white',
                borderRadius: focused ? 50 : 0,
              }}>
              <Image
                source={require('./assets/Category.png')}
                style={[
                  styles.image,
                  {tintColor: focused ? '#F9B023' : 'black'},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                padding: focused ? 8 : 0,
                backgroundColor: focused ? '#1E222B' : 'white',
                borderRadius: focused ? 50 : 0,
              }}>
              <Image
                source={require('./assets/LikeProduct.png')}
                style={[
                  styles.image,
                  {tintColor: focused ? '#F9B023' : 'black'},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                padding: focused ? 8 : 0,
                backgroundColor: focused ? '#1E222B' : 'white',
                borderRadius: focused ? 50 : 0,
              }}>
              <Image
                source={require('./assets/more.png')}
                style={[
                  styles.image1,
                  {tintColor: focused ? '#F9B023' : 'black'},
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen
            name="ProductDetailsScreen"
            component={ProductDetailsScreen}
          />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  image1: {
    width: 4,
    height: 16,
  },
});

export default App;
