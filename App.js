import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,Image
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import * as Speech from 'expo-speech';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Dictionary App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks : db[this.state.text ].chunks });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
            {this.state.chunks.map(
              (item)=>{
                return (
                  <TouchableOpacity style = {styles.chunkButton} onPress={() => {
          Speech.speak('https://docs.expo.io/versions/latest/sdk/speech/');
                  }} >
                   <Text style={styles.displayText}>{item}</Text>
                   </TouchableOpacity>
                )  
              }
            )}
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03fcca',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },

  chunkButton : {
    width : '60%',
    height : 50,
    justifyContent : "center",
    alignItems : "center",
    alignSelf : "center",
    borderRadius : 10,
    margin : 5,
    backgroundColor : 'green'
  }
});
