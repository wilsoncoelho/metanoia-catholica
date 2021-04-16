import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TrackList from '../../screens/TrackScreens/TrackList'
import TrackPlayer from '../../screens/TrackScreens/TrackPlayer'
import Icon from 'react-native-vector-icons/Ionicons'
import HeaderTitle from '../../shared/HeaderTitle'
const Stack = createStackNavigator()

const ListenNavigatorStack = (props) => {

    const onShare = async () => {
        try {
          const result = await Share.share({
      
            message:
              'Metanoia | App Built to Strengthen Your Prayer Life.',
              url:'https://www.wilsoncoelho.com'
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    return(
        <Stack.Navigator            screenOptions={{
            headerStyle:{backgroundColor:'#de1738', },
            headerTitle:(<HeaderTitle/>),
            headerTitleAlign:'center',
            headerTitleStyle:{ fontSize:27, fontFamily:'JosefinSans-Bold', color:'#FFF'},
            headerLeft:(
             ()=><Icon style={{marginLeft:10,}} name={"menu"} size={27} color={'white'} onPress={()=>{
                 props.navigation.toggleDrawer();
             }}/>
            ),
            headerRight:(
             ()=><Icon style={{marginRight:10,}} name={"share-social"} size={27} color={'white'} onPress={onShare} />
            )
         }}
         >
            <Stack.Screen name={'Track List'} component={TrackList} />
            <Stack.Screen name={'TrackPlayer'} component={TrackPlayer}  options={{ title: 'Back to Play List' }}/>
        </Stack.Navigator>
    )
}

export default ListenNavigatorStack

