import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import NewsFeed from '../components/home/NewsFeed'
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <NewsFeed/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black'
  }
})

export default HomeScreen