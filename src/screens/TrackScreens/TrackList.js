import React from 'react';
import {StyleSheet,View, FlatList} from 'react-native';
import tracks from '../../assets/data/tracks.json';
import TrackListItem from '../../components/TrackListItem'

const TrackList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={tracks}
      renderItem={({item}) => (
        <TrackListItem
          // key={item.id}
          artwork={item.artwork}
          title={item.title}
          artist={item.artist}
          categoryText={item.category}
          url={item.url}
          navigation={props.navigation}
         itemID={item}
        />
      )}
      keyExtractor={(item) => item.id}

    />
    </View>
  );
};

export default TrackList;

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#fff'
  }
});
