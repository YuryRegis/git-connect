import React from 'react'
import Theme from '../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../views/Home'
import Search from '../views/Search'
import Profile from '../views/Profile'
import WebContent from '../views/WebContentView'


function SearchStack(props) {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="Repository" component={WebContent} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export function TabNav (props) {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            initialRouteName="Home"         
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
            
              switch (route.name) {
                case 'HomeTab':
                    iconName = 'home-outline';
                    break;
                case 'SearchTab':
                   iconName = 'search';
                    break;
                case 'ProfileTab':
                    iconName = 'person-circle-outline';
                    break;
                case 'ChatTab':
                    iconName = 'chatbubble-ellipses-outline';
                    break;
            }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarStyle: { backgroundColor: Theme.background, borderTopWidth: 0 },
            tabBarActiveTintColor: Theme.primaryColor,
            tabBarInactiveTintColor: Theme.tertiaryColor,
            tabBarShowLabel: false,
          })}>
            <Tab.Screen name="HomeTab" component={Home} options={{title:'Home'}}/>
            <Tab.Screen name="SearchTab" component={SearchStack} options={{title:'Search'}}/>
            <Tab.Screen name="ProfileTab" component={Profile} options={{title:'Profile'}}/>
            <Tab.Screen name="ChatTab" component={Home} options={{title:'Chat'}}/>
        </Tab.Navigator>
    )
}

export default TabNav