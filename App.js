import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './src/navigation/drawer/Drawer';

const App = () => {
  return (
    <>
    
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
