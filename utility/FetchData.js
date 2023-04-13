import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
        console.log(response.data.results)
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
        <Text style={{color: 'red'}}>{error}</Text>
      ) : articles && articles.length > 0 ? (
        articles.map(article => (
          <View key={article.url}>
            <Text style={{color: 'red'}}>
              Title: {article.title ? article.title : 'N/A'}
            </Text>
            <Text style={{color: 'red'}}>
              URL: {article.url ? article.url : 'N/A'}
            </Text>
            <Text style={{color: 'red'}}>
              Image: {article.image_url ? article.image_url : 'N/A'}
            </Text>
          </View>
        ))
      ) : (
        <Text style={{color: 'red'}}>No articles found</Text>
      )}
    </View>
  );
};

export default FetchData;
