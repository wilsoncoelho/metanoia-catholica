import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Slider from 'react-native-slider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Trackplayer, {getCurrentTrack} from 'react-native-track-player';

let {height, width} = Dimensions.get('window');

Trackplayer.updateOptions({
  stopWithApp: true,
  capabilities: [
    Trackplayer.CAPABILITY_PLAY,
    Trackplayer.CAPABILITY_PAUSE,
    Trackplayer.CAPABILITY_STOP,
  ],
  compactCapabilities: [
    Trackplayer.CAPABILITY_PLAY,
    Trackplayer.CAPABILITY_PAUSE,
    Trackplayer.CAPABILITY_STOP,
  ],
});

const TrackPlayer = props => {
  const {data} = props.route.params;
  const [isPlaying, setisPlaying] = useState(false);
  const [iconPlayPause, setIconPlayPause] = useState('play');

  const setUpTrackPlayer = async () => {
    try {
      await Trackplayer.setupPlayer();
      await Trackplayer.add(data);

      setisPlaying(true);
      setIconPlayPause('pause')
      await Trackplayer.play();
    } catch (e) {
      console.log(e);
    }
  };

  //setup Track Player
  useEffect(() => {
    setUpTrackPlayer();

    return () => {
      Trackplayer.destroy();
    };
  }, [isPlaying]);

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center', marginTop: 24}}>
          <Text style={[styles.textLight, {fontSize: 12}]}>METANOIA</Text>
          <Text
            style={[
              styles.text,
              {fontSize: 15, fontWeight: '500', marginTop: 8},
            ]}>
            {data.message}
          </Text>
        </View>

        <View style={styles.coverContainer}>
          <Image source={{uri: data.image}} style={styles.cover}></Image>
        </View>

        <View style={{alignItems: 'center', marginTop: 32}}>
          <Text style={[styles.textDark, {fontSize: 20, fontWeight: '500'}]}>
            {data.title}
          </Text>
          <Text style={[styles.text, {fontSize: 16, marginTop: 8}]}>
            {data.category}
          </Text>
        </View>
      </View>

      <View style={{marginHorizontal: 30, marginTop: 30}}>
        <View
          style={{
            marginTop: -12,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/* <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
            <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text> */}

          <Text style={[styles.textLight, styles.timeStamp]}>00:00</Text>
          <Text style={[styles.textLight, styles.timeStamp]}>00:00</Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={1}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#93A8B3"
          // onValueChange={seconds => this.changeTime(seconds)}
        ></Slider>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 12,
        }}>
        {/* <TouchableOpacity>
          <FontAwesome5
            name="step-backward"
            size={26}
            color="#333"></FontAwesome5>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.playButtonContainer}>
          <FontAwesome5
            name={iconPlayPause}
            size={32}
            color="#333"
            style={[styles.playButton, {marginLeft: 8}]}
            onPress={track => {
              isPlaying
                ? Trackplayer.pause() && setIconPlayPause('play') && setisPlaying(false)
                : Trackplayer.play() && setIconPlayPause('pause') && setisPlaying(true);
            }}></FontAwesome5>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <FontAwesome5
            name="step-forward"
            size={26}
            color="#333"></FontAwesome5>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textLight: {
    color: '#333',
  },
  text: {
    color: '#333',
  },
  textDark: {
    color: '#333',
  },
  coverContainer: {
    marginTop: 32,
    width: 250,
    height: 250,
    shadowColor: '#5D3F6A',
    shadowOffset: {height: 15},
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  cover: {
    width: 250,
    height: 250,
    borderRadius: 5,
    resizeMode: 'center',
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: '#333',
  },
  thumb: {
    width: 13,
    height: 13,
    backgroundColor: '#333',
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: '500',
  },
  playButtonContainer: {
    // backgroundColor: "#FFF",
    // borderColor: "rgba(93, 63, 106, 0.2)",
    // borderWidth: 16,
    width: 100,
    height: 100,
    // borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
    shadowColor: '#333',
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },
});

export default TrackPlayer;
