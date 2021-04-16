import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import HeaderTitle from '../../shared/HeaderTitle';

const About = (props) => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#de1738',
          height: 50,
          justifyContent: 'center',
        }}>
        <HeaderTitle />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Hello to You! At Metanoia Catholica We belive in having a rock solid
          prayer life. We have built this app for you to have a more enhanced
          prayer life. You can read or listen to various catholic prayers. We
          have also included a number of daily prayers.
        </Text>
      </View>
      {/* <View style={{alignItems:'center'}}>
        <Button title={'Back to Home'} onPress={props.navigation.navigate('Home')}/>
      </View> */}
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {margin: 15},
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: 'red',
  },
  subTitle: {
    textAlign: 'justify',
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text: {
    textAlign: 'justify',
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    lineHeight: 22,
  },
});
