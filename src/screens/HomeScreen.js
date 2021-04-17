import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import categorydata from '../assets/data/categories.json';
import rosarymysteries from '../assets/data/rosarymysteries.json';
import sacramentsData from '../assets/data/sacraments.json';

let {width} = Dimensions.get('window');

const HomeScreen = (props) => {

  return (
    <View style={styles.container}>

      <ScrollView>
 
        <Header />
 
        <View>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>Daily Prayers</Text>
          </View>
          <View style={styles.categoryContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={categorydata}
              renderItem={(item) => (
                <Card
                  title={item.item.title}
                  subTitle={item.item.subTitle}
                  color={item.item.color}
                  textColor={item.item.textColor}
                  cardWidth={(width * 35) / 100}
                  cardHeight={(width * 20) / 100}
                  audio={item.item.audio}
                  video={item.item.video}
                  text={item.item.text}
                  screen={item.item.screen}
                  navigation={props.navigation}
                  image={item.item.image}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>
        </View>
        <View style={styles.horizontalLine} />

        <View>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>Guided Rosary Meditations</Text>
          </View>
          <View style={styles.categoryContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={rosarymysteries}
              renderItem={(item) => (
                <Card
                  title={item.item.title}
                  subTitle={item.item.subTitle}
                  color={item.item.color}
                  textColor={item.item.textColor}
                  cardWidth={(width * 40) / 100}
                  cardHeight={(width * 25) / 100}
                  audio={item.item.audio}
                  video={item.item.video}
                  text={item.item.text}
                  image={item.item.image}
                  screen={item.item.screen}
                  navigation={props.navigation}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>
        </View>
        <View style={styles.horizontalLine} />

        {/* <View>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>Seven Sacraments</Text>
          </View>
          <View style={styles.categoryContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={sacramentsData}
              renderItem={(item) => (
                <Card
                  title={item.item.title}
                  subTitle={item.item.subTitle}
                  color={item.item.color}
                  textColor={item.item.textColor}
                  cardWidth={(width * 50) / 100}
                  cardHeight={(width * 35) / 100}
                  audio={item.item.audio}
                  video={item.item.video}
                  text={item.item.text}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>
          <View style={styles.horizontalLine} />
        </View> */}



<View>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>Divine Mercy Chaplet</Text>
          </View>
          <View style={styles.categoryContainer}>
      
                <Card
                title={'Divine Mercy Chaplet'}
                subTitle={'JESUS MERCY'}
                color={'indigo'}
                textColor={'#444'}
                cardWidth={(width * 95) / 100}
                cardHeight={(width * 50) / 100}
                audio={'true'}
                video={'true'}
                text={'true'}
               image={"http://wilsoncoelho.com/images/divine-mercy2.jpg"}
               screen={'SurrenderPrayer'}
               navigation={props.navigation}
                />
      
          </View>
        </View>
        <View style={styles.horizontalLine} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginVertical: 10,
    width: (width * 95) / 100,
    overflow: 'hidden',
    borderColor: 'black',
    borderRadius: 10,
    // elevation: 5,
    alignSelf: 'center',
  },
  headerText: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '500',
    color:'gray'
  },
  categoryContainer: {},

  headingTextContainer: {
    marginLeft: 10,
    margin: 5,
  },
  headingText: {
   
    fontSize: 20,
    fontSize: 20,
    color:'#444',
    fontFamily:'Raleway-ExtraBold'
  },
  horizontalLine: {
    borderWidth: 0.2,
    borderColor: 'gray',
    marginHorizontal: 5,
  },
});
