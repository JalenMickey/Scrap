import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const FetchData = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch news articles from NewsData.io API
        const response = await axios.get('https://newsdata.io/api/1', {
          params: {
            apiKey: 'pub_2037841278dc570a5f6487d72b784a1e73044', // Replace with your actual API key from NewsData.io
            language: 'en', // Set desired language for news articles
            q: 'technology', // Set desired search query for news articles
          },
        });
        // Update component state with fetched articles
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>News Articles:</Text>
      {articles.map(article => (
        <View key={article.url}>
          <Text>Title: {article.title}</Text>
          <Text>Author: {article.author}</Text>
          <Text>Published at: {article.published_at}</Text>
          <Text>Description: {article.description}</Text>
          <Text>URL: {article.url}</Text>
          <Text>Image: {article.image}</Text>
        </View>
      ))}
    </View>
  );
};

export default FetchData;