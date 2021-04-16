import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CS = () => {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>Coming Soon</Text>
        </View>
    )
}

export default CS

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#de1738',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:"#fff",
        fontFamily:'Amita-Regular', 
        fontSize:40,
   
    }
})
