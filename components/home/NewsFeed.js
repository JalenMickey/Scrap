import React, {useState} from 'react';
import { View, Text } from 'react-native';
import FetchData from '../../utility/FetchData'; // Import the FetchData component

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);

  // Handle fetching of news data and update state
  const handleFetchData = (data) => {
    // Process the fetched data as needed
    setNewsData(data);
  };

  return (
    <View>
      {/* Render the FetchData component and pass the handleFetchData function as a prop */}
      <FetchData onDataFetched={handleFetchData} />
      {/* Render the news data in the JSX */}
      {newsData.map((item) => (
        <View key={item.url}>
          <Text>Title: {item.title}</Text>
          <Text>Author: {item.author}</Text>
          <Text>Published at: {item.published_at}</Text>
          <Text>Description: {item.description}</Text>
          <Text>URL: {item.url}</Text>
          <Text>Image: {item.image}</Text>
        </View>
      ))}
    </View>
  );
};

export default NewsFeed;