import React, { useEffect, useState, StyleSheet } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

const FetchData = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch news articles from NewsData.io API
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: 'pub_2037841278dc570a5f6487d72b784a1e73044', // Replace with your actual API key from NewsData.io
            qInTitle: 'ufc', // Set desired search query for news articles
            language: 'en', // Set desired language for news articles
          },
        });
        // Update component state with fetched articles
        setArticles(response.data.results);
        setError(null);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch articles. Please try again later.');
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>News Articles:</Text>
      {error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
      ) : articles && articles.length > 0 ? (
        articles.map(article => (
          <View key={article.url}>
            <Image style={{ resizeMode: 'contain' }} source={require('../assets/header-logo.png')} />
            <Text style={{ color: 'red' }}>
              Title: {article.title}
            </Text>
          </View>
        ))
      ) : (
        <Text style={{ color: 'red' }}>No articles found</Text>
      )}
    </View>
  );
};


export default FetchData;
