import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const FetchData = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch news articles from NewsData.io API
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: 'pub_2037841278dc570a5f6487d72b784a1e73044', // Replace with your actual API key from NewsData.io
            q: 'technology', // Set desired search query for news articles
            language: 'en', // Set desired language for news articles
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
      {articles && articles.length > 0 ? (
        articles.map(article => (
          <View key={article.url}>
            <Text style={{color:"red"}}>Title: {article.title}</Text>
            <Text style={{color:"red"}}>Author: {article.author}</Text>
            <Text style={{color:"red"}}>Published at: {article.publishedAt}</Text>
            <Text style={{color:"red"}}>Description: {article.description}</Text>
            <Text style={{color:"red"}}>URL: {article.url}</Text>
            <Text style={{color:"red"}}>Image: {article.image}</Text>
          </View>
        ))
      ) : (
        <Text style={{color:"red"}}>No articles found</Text>
      )}
    </View>
  );
};

export default FetchData;
