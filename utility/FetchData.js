import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
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
            apikey: 'pub_20477cfdb6f3dc07edda30d6f863f55d2b851', // Replace with your actual API key from NewsData.io
            qInTitle: 'trump', // Set desired search query for news articles
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
    <SafeAreaView>
      <Text style={{color:'red'}}>News Articles:</Text>
      {error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
      ) : articles && articles.length > 0 ? (
        articles.map(article => (
          <View key={article.link}style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
              <View style={styles.pngContainer}>
                <Image style={styles.icon} source={article.image_url? { uri: article.image_url } : require('../assets/header-logo.png')} />
              </View>
              <View style={styles.textBox}>
                <Text style={{ color: 'red' }}>
                  {article.title}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Image style={styles.commentIcon}
                source={require('../assets/message-logo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.likeIcon}
                source={require('../assets/notify-logo.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

        ))
      ) : (
        <Text style={{ color: 'red' }}>No articles found</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start',
    flex: 1,
    display: 'flex',
    resizeMode: 'contain',
    borderColor: 'purple',
    borderWidth: '2px',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    borderWidth: '2px',
    borderColor: 'red',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'space-around'

  },

  icon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
  },
  commentIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 0,
    borderWidth: '1px',
    borderColor: 'white'
  },
  likeIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 0,
    borderWidth: '1px',
    borderColor: 'white'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    flex: 1,
    borderWidth: '1px',
    borderColor: 'yellow'
  },
  pngContainer: {
    width: '20%',
    height: '80%',
    borderWidth: '1px',
    borderColor: 'white',
    alignContent: 'center'
  },
  textBox: {
    height: '80%',
    borderWidth: '1px',
    borderColor:'orange',
    width: '80%',
  }

})
export default FetchData;
