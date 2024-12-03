import { StatusBar } from 'expo-status-bar';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, ActivityIndicator, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
    try {
      // Make the API request
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric', // Use 'imperial' for Fahrenheit
        },
      });
  
      // Parse and return weather data
      const data = response.data;
      console.log(`Weather in ${city}:`);
      console.log(`Temperature: ${data.main.temp}°C`);
      console.log(`Weather: ${data.weather[0].description}`);
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error.response?.data?.message || error.message);
      throw error;
    }
  };

export default function DetailsScreen({route}) {
    const { city } = route.params || {}; 

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch weather data when component mounts
        const fetchWeather = async () => {
          try {
            const data = await getWeather(city);
            setWeather(data);
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchWeather();
      }, [city]);

  return (
    <View style={styles.container}>
      <View style ={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Weather {city}</Text>
        {/* <View style={styles.items}> */}
        <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : weather ? (
        <View>
          <Text style={styles.title}>Weather in {weather.name}</Text>
          <Text style={styles.info}>Temperature: {weather.main.temp}°C</Text>
          <Text style={styles.info}>Condition: {weather.weather[0].description}</Text>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}

          {/* Components will be coming here*/}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'column'
  },
  tasksWrapper:{
    flex: 9,
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle:{
    fontSize: 20,
    fontWeight: "bold"
  },
  writeTaskEditor:{
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent:'space-between',
    alignItems: 'center',
    // color:"white"
  },
  input:{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    fontSize: 20,
    width: 300
  },
  addWrapper:{
    backgroundColor: 'white',
    // padding: 10,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 40,
    padding: 10
  },
  addText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
  },
});
