/*
GE 120: Machine Exercise 6
Regine Ann Reyes
May 21, 2024
*/
import React from 'react';
import { Image } from 'expo-image';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import ge_compass_pic from './pictures/ge_compass.jpeg'

export default function App() {
  
  const [outputValue, setOutputValue] = React.useState('---');
  const [inputValue, setInputValue] = React.useState('Input value here..');
  const [inputCase, setInputCase] = React.useState("1");

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  function convertValue(value) {
     /*
    Compute for DMS bearing of a given angle. Or, compute for DD bearing of a given angle.

      Input:
      decimal degrees - float
      degrees-minutes-seconds - string
      
      Output:
      degrees-minutes-seconds - string
      decimal degrees - float
    */
    if (inputCase == "1") { // Case 1 converts decimal degree to degree, minutes, and seconds
      var degrees = Math.floor(value);
      var minutes = Math.floor((value - degrees) * 60);
      var seconds = Math.round((value - degrees - (minutes / 60)) * 3600);
      
      var output = degrees.toString().concat("-",minutes.toString(),"-", seconds.toString())
      setOutputValue(output);
    } else { // Case 2 converts degree, minutes, and seconds to decimal degree
      var parts = value.split('-');
      var degrees = parseInt(parts[0]);
      var minutes = parseInt(parts[1]);
      var seconds = parseInt(parts[2]);
  
      var output = degrees + (minutes / 60) + (seconds / 3600);
      setOutputValue(output.toFixed(2)); // rounding to 2 decimal places
    }
  }

  return (
    <View style={styles.box}>
      <View style={styles.box1}>
        <Text style={styles.titleText}>Welcome to DD to DMS Calculator</Text>
      </View>

      <View style={styles.box2}>
        <View style={styles.box2a}>
          <Text>Input Case</Text>
          <Picker
            selectedValue={inputCase}
            onValueChange={(itemValue, itemIndex) => 
              setInputCase(itemValue)
            }
          >
            <Picker.Item label="DD to DMS" value="1" />
            <Picker.Item label="DMS to DD" value="2" />
          </Picker>
        </View>

        <View style={styles.box2b}>
          <TextInput
            style={styles.input}
            onChangeText={setInputValue}
            value={inputValue}
          />
          <Button
            title="Convert"
            onPress={() => convertValue(inputValue)}
          />
        </View>
      </View>

      <View style={styles.box3}>
        <Text style={styles.titleText}>Output: </Text>
        <Text style={styles.titleText}>{outputValue}</Text>
      </View>

      <View style={styles.box4}>
        <Image
          style={styles.image}
          source={ge_compass_pic}
          placeholder={ blurhash }
          contentFit="cover"
          transition={1000}
        />
      </View>
    </View>
  );
}

// create style sheet for each element or box
const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box4: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2a: {
    flexDirection: 'column',
    width: '100%',
    height: '50%',
  },
  box2b: {
    flex: 1,
    width: '100%',
    height: '50%',
  },
  box1: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
  input: {
    height: 40,
    width: '70%',
    fontSize: 24,
    color: 'black',

  },
});


// Sample Inputs:

// DD to DMS conversion:

// Input case: "1"
// Input value: 45.67 (decimal degrees)
// Output value: 45-40-12

// DMS to DD conversion:

// Input case: "2"
// Input value: 30-15-20 (degrees-minutes-seconds)
// Output value: 30.26