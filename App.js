import React from 'react';
import {Alert} from 'react-native';
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import {API_KEY} from "@env";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    console.log(data);
  }
  getlocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
      // this.setState({ isLoading: false });
    } catch(error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getlocation();
  }
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
