import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo}
        source={require('../../assets/header-logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
            <Image
            source={{
                uri:'https://icons8.com/icon/38977/chat-bubble'
                }}
                style={styles.icon}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 0,
        marginVertical: -10
    },
    iconsContainer: {
        flexDirection: 'row' 
    },

    logo: {
        width: 80,
        height: 40,
        resizeMode: 'contain'
        

    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    }
})

export default Header