import React from 'react'
import Theme from '../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../views/Home'


const Tab = createBottomTabNavigator()

export function TabNav (props) {
    return (
        <Tab.Navigator
            initialRouteName="Home"         
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
            
              switch (route.name) {
                case 'Home':
                    iconName = 'home-outline';
                    break;
                case 'Search':
                   iconName = 'search';
                    break;
                case 'Profile':
                    iconName = 'person-circle-outline';
                    break;
                case 'Chat':
                    iconName = 'chatbubble-ellipses-outline';
                    break;
            }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: { backgroundColor: Theme.background, borderTopWidth: 0 },
            tabBarActiveTintColor: Theme.primaryColor,
            tabBarInactiveTintColor: Theme.secondaryColor,
            tabBarShowLabel: false,
          })}>
            <Tab.Screen name="Home" component={Home} options={{title:'Home'}}/>
            <Tab.Screen name="Search" component={Home} options={{title:'Search'}}/>
            <Tab.Screen name="Profile" component={Home} options={{title:'Profile'}}/>
            <Tab.Screen name="Chat" component={Home} options={{title:'Chat'}}/>
        </Tab.Navigator>
    )
}

export default TabNav