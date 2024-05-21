/*
GE120: Long Exam 2
REYES - Part Three
GUI and Visualization
*/

// answer to question in bullet 2

/*
The React Native Components needed to develop this app includes picker, stylesheet, text, textinput, view, and button. As seen below,
the app is designed in the way that the elements are divided into box. With this, the components such as text, textinput, view, button,
and others can be applied in the user interface. There would be box for the title, then text field input to type the azimuth, button to 
start the conversion, and another text to display the output. All of this elements will be in the front page or interface with title at
the top, followed by the picker (the only option is azimuth to bearing), the text input for the next box, the button that says convert, 
then the output text. 
*/

// NOTE: run this code by typing node <file name>.js in the designated terminal, I believe since it's javascript

import React from 'react';
import { Image } from 'expo-image';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

    azimuth = input("Enter Azimuth from the South: ") // should ask for azimuth input first 

// Since azimuth test values are given, we could initialize the values of azimuth. However, the app should contain a text field to type the Azimuth in DMS.
    let azimuth = data
    let data = [
        [115-2-3],
        [86-45-45],
        [329-17-14],
        [270],
    ];

function ConvertToBearing(azimuth) {
    let bearing, azimuth_uncon, degree, dms;
    /*
    Convert Azimuth (in DMS) to Bearing (in DMS)

    Input:
    azimuth - string
        convert dms to dd
        azimuth = float

    Output:
    Bearing - string

    */

    if (String(azimuth).includes("-")) { // In DMS form
        // Convert DMS to DD
        let [degrees, minutes, seconds] = azimuth.split("-").map(parseFloat); // parseFloat is the equivalent of float in Python
        azimuth = (degrees + (minutes / 60) + (seconds / 3600)) % 360;
        azimuth_uncon = azimuth;
        /*
        Identify the bearing and orientation of the DMS angle
        1st - convert azimuth to bearing in DD, and  identify direction
        2nd - convert the DD angle from 1st to DMS
        */
        if (azimuth > 0 && azimuth < 90) {
            degree = Math.floor(azimuth);
            let minutes = (azimuth - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            dms = degree+"-"+minutes_whole+"-"+seconds; // String interpolation in JavaScript
            bearing = "S "+dms+" W"; // String interpolation in JavaScript
        } else if (azimuth >= 90 && azimuth < 180) {
            degree = Math.floor(180 - azimuth);
            let minutes = (180 - azimuth - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "N "+dms+" W";
        } else if (azimuth >= 180 && azimuth < 270) {
            degree = Math.floor(azimuth - 180);
            let minutes = (azimuth - 180 - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "N "+dms+" E";
        } else if (azimuth >= 270 && azimuth < 360) {
            degree = Math.floor(360 - azimuth);
            let minutes = (360 - azimuth - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "S "+dms+" E";
        } else if (azimuth === 0 || azimuth === 360) {
            bearing = "DUE SOUTH";
        } else if (azimuth === 90) {
            bearing = "DUE WEST";
        } else if (azimuth === 180) {
            bearing = "DUE NORTH";
        } else if (azimuth === 270) {
            bearing = "DUE EAST";
        }
        return bearing;
    }

    }

  return ( // create a box for each element to be added in the app interface
  // Title for the app
  <View style={styles.box}> 
    <View style={styles.box1}>
      <Text style={styles.titleText}>Welcome to Azimuth to Bearing Calculator</Text>
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
          <Picker.Item label="Azimuth to Bearing" value="1" />
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
          onPress={() => ConvertToBearing(inputValue)}
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
      height: '30%',
      backgroundColor: '#0553',
    },
    input: {
      height: 40,
      width: '70%',
      fontSize: 24,
      color: 'black',
  
    },
  });