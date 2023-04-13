import React, {useState} from 'react';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import FetchData from '../../utility/FetchData'; // Import the FetchData component
import { TouchableOpacity } from 'react-native-web';

const NewsFeed = () => {

  return (
    <View>
      <ScrollView>
        <FetchData />
      </ScrollView>
    </View>
  );
};

export default NewsFeed;