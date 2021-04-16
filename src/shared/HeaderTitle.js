import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

let {width} = Dimensions.get('window');

const HeaderTitle = props => {
  return (
    <View style={styles.appTitleContainer}>
      <Text style={styles.appTitle}>Metanoia Catholica</Text>
      {/* <View style={styles.line}/>
      <Text style={styles.appSubTitle}>CATHOLICA</Text> */}
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  appTitleContainer: {},
  line: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#FFF',
  },
  appTitle: {
    fontSize: 20,
    fontFamily: 'JosefinSans-Bold',
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  appSubTitle: {
    fontSize: 11,
    fontFamily: 'JosefinSans-Bold',
    color: '#FFF',
    textAlign: 'center',
  },
});
