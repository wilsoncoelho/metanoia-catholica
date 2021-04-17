import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CacheImage from '../shared/CacheImage';
const Card = props => {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(props.image);
    // console.log(`${image} done`)
    return () => {
      setImage();
    };
  }, [image]);

  return (
    <>
      <View style={styles.cardItem}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(props.screen);
          }}>
          <View>
            <View
              style={[
                styles.container,
                {
                  backgroundColor: props.color,
                  width: props.cardWidth,
                  height: props.cardHeight,
                },
              ]}>
              <Image
                source={{uri: image}}
                style={[
                  styles.container,
                  {
                    backgroundColor: props.color,
                    width: props.cardWidth,
                    height: props.cardHeight,
                  },
                ]}
              />
            </View>
            <Text style={[styles.title, {color: props.textColor, margin: 3}]}>
              {props.title}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'gray',
                  margin: 2,
                  padding: 2,
                  fontFamily: 'JosefinSans-Bold',
                  fontSize: 11,
                }}>
                {props.subTitle}
              </Text>
              <View style={{flexDirection: 'row'}}>
                {props.audio == 'true' ? (
                  <Icon name="music" color={'gray'} style={{padding: 5}} />
                ) : null}
                {props.text == 'true' ? (
                  <Icon name="book" color={'gray'} style={{padding: 5}} />
                ) : null}
                {props.video == 'true' ? (
                  <Icon name="video" color={'gray'} style={{padding: 5}} />
                ) : null}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    marginLeft: 10,
    margin: 10,
  },

  container: {
    padding: 15,
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,

    textAlign: 'left',
    fontFamily: 'JosefinSans-Bold',
  },
  backgroundImage: {
    width: 50,
    height: 50,
  },
});

export default Card;
