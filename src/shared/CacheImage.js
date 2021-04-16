import React ,{useState, useEffect}from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import shorthash from 'shorthash2'
const CacheImage = () => {

const [source, setSource] = useState(null)

useEffect(() => {
const {uri} = this.props
const name = shorthash(uri)
    
    return () => {
        
    }
}, [])

    return (
        <Image style={props.style} source={source}/>
    )
}

export default CacheImage

const styles = StyleSheet.create({})
