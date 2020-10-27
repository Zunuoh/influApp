import React, { useState } from 'react';
import {View, Text, Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const InfluencerList = [
    {"id":"0", "picture":require("../../assets/im1.jpeg"), "name":"Samantha Robertson", "followers":"800k followers"},{"id":"1", "picture":require("../../assets/im2.jpeg"), "name":"Samantha Robertson", "followers":"800k followers"},{"id":"2", "picture":require("../../assets/im3.jpeg"), "name":"Samantha Robertson", "followers":"800k followers"},
    {"id":"4", "picture":require("../../assets/im4.jpeg"), "name":"Samantha Robertson", "followers":"800k followers"},{"id":"5", "picture":require("../../assets/im5.jpeg"), "name":"Samantha Robertson", "followers":"800k followers"}, {"id":"6", "picture":require("../../assets/im6.jpeg"), "name":"Samantha Robertson", "followers":"800k followers"},
    {"id":"7", "picture":require("../../assets/images.jpeg"), "name":"Samantha Robertson", "followers":"800k followers"}, {"id":"8", "picture":require("../../assets/im1.jpeg"), "name":"Samantha Robertson", "followers":"800k followers"}
]

const InfluencerScreen = () =>{
    const[influencers, setInfluencers] = useState(InfluencerList);
    return(
        <View style={{flex:1, backgroundColor:"#171717"}}>
            <View>
                <ScrollView>
                    <View style={{flexDirection:"row", marginTop:20, paddingLeft:20, borderBottomWidth:1, borderBottomColor:"white"}}>
                      <View style={{flex:1}}>
                      <Image source={require('../../assets/images.jpeg')} style={{width:60, height:60, borderRadius:30}}/>
                      </View>
                      <View style={{justifyContent:"center", alignItems:"center", flex:7}}>
                          <Text style={{color:"white"}}>Samatha R</Text>
                          <Text style={{color:"white"}}>Samatha R</Text>
                      </View>
                      <View style={{marginLeft:40, justifyContent:"center", alignItems:"center", flex:4}}>
                          <Feather
                          name="chevron-right"
                          color="white"
                          size={24}/>
                      </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default InfluencerScreen;
