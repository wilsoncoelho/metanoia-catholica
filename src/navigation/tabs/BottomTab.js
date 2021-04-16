import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Icon from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/Octicons'
import TrackList from '../../screens/TrackScreens/TrackList'
import HomeNavigatorStack from '../stacks/HomeNavigatorStack'
import ListenNavigatorStack from '../stacks/ListenNavigatorStack'
import CS from '../../screens/CS'
const Tab = createBottomTabNavigator()

const BottomTab = () => {
    const iconSize = 25;
    return(
        <Tab.Navigator
        
        tabBarOptions={
          
          {
            tabStyle: {
              paddingBottom: 1,
              paddingTop: 5,
            },
          activeTintColor: 'lightseagreen',
          inactiveTintColor: 'gray',
          showLabel:true,
          labelStyle:{fontSize:11, textTransform:'uppercase'}, 
        }
      }
        
      >
        <Tab.Screen
          name={"Home"}
          component={HomeNavigatorStack}
          options={{
            tabBarIcon: ({color}) => <Icon4 name="home"  color={color} size={iconSize} />
          }}
        />

{/* <Tab.Screen
        name={"Bible"}

        component={BibleNavigationStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon3 name="fire" color={color}  size={iconSize} />
          ),
        }}
      /> */}

<Tab.Screen
        name={"Listen"}
        component={ListenNavigatorStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="md-headset" color={color}  size={iconSize} />
          ),
        }}
      />

        <Tab.Screen
          name={"Prayers"}
          component={CS}
          options={{
            tabBarIcon: ({color}) => <Icon3 name="bookshelf"  color={color} size={iconSize} />
          }}
        />



 

      <Tab.Screen
        name={"You"}
        component={CS}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color}  size={iconSize} />
          ),
        }}
      />


        
        </Tab.Navigator>
    )
}

export default  BottomTab