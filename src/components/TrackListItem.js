import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlayIcon from 'react-native-vector-icons/FontAwesome5'

let { width } =  Dimensions.get('window')

const TrackListItem = (props) => {

  const itemIden = props.itemID
  

  return (
  
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate('TrackPlayer', {data:itemIden})
          }}>
      <View style={styles.row}>
        <Image
        // source={{ uri: props.artwork }}
    
          source={{uri:props.artwork}}
          style={styles.artwork}
        />
        <View>
          <Text style={styles.trackTitle}>{props.title}</Text>
          <Text style={styles.artist}>{props.artist}</Text>
          <Text style={styles.categoryText}>{props.categoryText}</Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.row}>
        <Icon name="ellipsis-vertical" size={25}/>
      </View>
      </TouchableOpacity>
    </View>
   
  );
};

export default TrackListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    width:width*85/100,
  },
  artist:{
    fontSize:10,
    color:'black'
  },
  artwork: {
    width: 60,
    height: 60,
   
    marginRight: 15,
  },
  trackTitle: {
    fontSize: 15,
    fontWeight: '700',
    color:'darkslategrey',
    paddingTop:4
    
  },
  categoryText: {
    fontSize: 13,
    color: 'darkslategrey',
    fontWeight: 'bold',
  },
});
