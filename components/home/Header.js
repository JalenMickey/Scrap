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
        <Image style={styles.icon}
        source={require('../../assets/notify-logo.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icon}
        source={require('../../assets/message-logo.png')}
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
        marginHorizontal: -10,
        marginVertical: 0
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10

    },

    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
        

    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'center',
    }
})

export default Header