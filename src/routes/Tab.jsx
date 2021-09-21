import React from 'react'
import Theme from '../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Views
import Home from '../views/Home'
import Chat from '../views/Chat'
import Search from '../views/Search'
import Profile from '../views/Profile'
import WebContent from '../views/WebContentView'
import Conversation from '../views/Conversation'


function MessageStack({navigation}) {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
      <Stack.Screen name="Conversation" component={Conversation} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function SearchStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="Repository" component={WebContent} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function ProfileStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileStack" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="WebContent" component={WebContent} options={{ headerShown: false }} />
      <Stack.Screen name="FollowerProfile" component={Profile} options={{ headerShown: false }} />
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
            tabBarActiveTintColor: Theme.TabBar.iconActive,
            tabBarInactiveTintColor: Theme.TabBar.iconInactive,
            tabBarShowLabel: false,
          })}>
            <Tab.Screen name="HomeTab" component={ProfileStack} options={{title:'Home'}}/>
            <Tab.Screen name="SearchTab" component={SearchStack} options={{title:'Search'}}/>
            <Tab.Screen name="ProfileTab" component={ProfileStack} options={{title:'Profile'}}/>
            <Tab.Screen name="ChatTab" component={MessageStack} options={{title:'Chat'}}/>
        </Tab.Navigator>
    )
}

export default TabNav