import React from 'react';
import {Dimensions, View, ScrollView, Image, StyleSheet, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
let {width, height} = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Swiper showButtons={false} autoplay={true} autoplayTimeout={5} >
        <ImageBackground
          style={styles.imageBanner}
          source={require('../assets/images/jesus-risen.png')}
        />
        <ImageBackground
        resizeMode={'stretch'}
          style={styles.imageBanner}
          source={require('../assets/images/del-sanchez.jpg')}
        />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: width / 1.6,
    backgroundColor: '#FFF',
    
  },
  swiper: {
    width: width,
    height: width / 1.6,
    margin: 5,
    alignItems: 'center',
  },
  imageBanner: {
    width: width,
    height: width / 1.6,
    
  },
});

export default Header;
