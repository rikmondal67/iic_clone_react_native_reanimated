import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  House,
  Users,
  Activity,
  Handshake,
  Images,
} from 'lucide-react-native';

import HomeScreen from '../screens/HomeScreen';
import TeamScreen from '../screens/TeamScreen';
import ActivityScreen from '../screens/ActivityScreen';
import CollaborationPage from '../screens/CollaborationPage';
import GalleryScreen from '../screens/GatlleryScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#F97316',

        tabBarInactiveTintColor: '#9CA3AF',

        tabBarStyle: {
          backgroundColor: 'white',
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,

          elevation: 10,

          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowRadius: 10,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        tabBarIcon: ({ color, focused }) => {
          const size = focused ? 26 : 22;

          if (route.name === 'Home') {
            return <House color={color} size={size} />;
          }

          if (route.name === 'Team') {
            return <Users color={color} size={size} />;
          }

          if (route.name === 'Activity') {
            return <Activity color={color} size={size} />;
          }

          if (route.name === 'Partners') {
            return <Handshake color={color} size={size} />;
          }

          if (route.name === 'Gallery') {
            return <Images color={color} size={size} />;
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Team"
        component={TeamScreen}
      />

      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
      />

      <Tab.Screen
        name="Partners"
        component={CollaborationPage}
      />

      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;