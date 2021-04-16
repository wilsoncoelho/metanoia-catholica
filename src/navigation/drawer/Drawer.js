import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeStackNavigator from '../../navigation/stacks/HomeNavigatorStack'
import BottomTab from '../../navigation/tabs/BottomTab'
import HomeNavigatorStack from '../stacks/HomeNavigatorStack';
import PrivacyPolicy from '../../screens/Metanoia/PrivacyPolicy'
import About from '../../screens/Metanoia/About'
import { HeaderTitle } from '../../shared/HeaderTitle';

const Draw = createDrawerNavigator();

const Drawer = () => {
  return (
    <Draw.Navigator initialRouteName="Home" 
    drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical:5  },
        labelStyle:{fontSize:15},
     
      }}
      drawerStyle={{
          backgroundColor:"#FFF",
          
      }}
      
      
    >
      <Draw.Screen name="Home" component={BottomTab}/>
      <Draw.Screen name="About Metanoia Catholica" component={About} />
      {/* <Draw.Screen name="Contact Us" component={HomeNavigatorStack} /> */}
      {/* <Draw.Screen name="Terms and Conditions" component={HomeNavigatorStack} /> */}
      <Draw.Screen name="Privacy Policy" component={PrivacyPolicy} />
      {/* <Draw.Screen name="Show you Support" component={HomeNavigatorStack} /> */}
    </Draw.Navigator>
  );
};

export default Drawer;
