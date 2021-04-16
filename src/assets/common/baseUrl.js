import { Platform } from 'react-native'

let baseUrl = '';

{Platform.OS == 'android'
? baseUrl = 'https://api.scripture.api.bible/v1/' 
: baseUrl = 'https://api.scripture.api.bible/v1/'
}

export default baseUrl;