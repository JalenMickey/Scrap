import React, {useState} from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import FetchData from '../../utility/FetchData'; // Import the FetchData component
import { TouchableOpacity } from 'react-native-web';

const NewsFeed = () => {

  return (
    <View>
      <ScrollView style={styles.container}>
        <FetchData />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    resizeMode: 'contain',
    borderColor: 'brown',
    borderWidth: '2px',
    height: "60%"
  },

})

export default NewsFeed;