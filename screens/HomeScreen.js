import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import Header from '../components/home/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white'
  }
})

export default HomeScreen