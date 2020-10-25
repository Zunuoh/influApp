import React from 'react';
import {View, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


const Header = () =>{
    return(
        <View style={{backgroundColor:"#171717"}}>       
          <View>
              <TextInput style={{backgroundColor:"black", width:"80%", height:40, paddingLeft:30, marginLeft:20, marginTop:60, borderWidth:1, borderRadius:30}}
              placeholder="search"
              >
              <Feather name="search" size={24} color="white" />
              </TextInput>
          </View>
        </View>
    );
}

export default Header;
